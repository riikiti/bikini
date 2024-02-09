import org.jenkinsci.plugins.pipeline.modeldefinition.Utils

pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }

    parameters {
        booleanParam(name: 'Backend', defaultValue: true, description: 'Собрать backend')
        booleanParam(name: 'Frontend', defaultValue: true, description: 'Собрать frontend')
        booleanParam(name: 'CleanBuild', defaultValue: false, description: 'Чистая сборка')
    }

    environment {
        PROJECT_NAME = projectName()

        DELIVERY_TEST_SERVER_CONFIR = "msocial-test"
        DELIVERY_PROD_SERVER_CONFIR = ""

        SOURCE_CODE_DIR = "source-code"
        DOCKER_CONFIG_DIR = "docker"

        DEPLOYMENT_PREPARE_FILES_DIR = "${DOCKER_CONFIG_DIR}/deployment/"

        DELIVERY_SERVER_FOLDER = "/srv/${PROJECT_NAME}"


        /////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////


        IS_PRODUCTION = isProduction()
        PROFILE_NAME = profileName()

        DELIVERY_SERVER_CONFIR = "${IS_PRODUCTION.toBoolean() ? DELIVERY_PROD_SERVER_CONFIR : DELIVERY_TEST_SERVER_CONFIR}"

        GIT_SHA = "${env.GIT_COMMIT.take(8)}"

        GIT_LAB_READ_CREDENTIALS = credentials("msocial-gitlab-read")

        NEXUS_REPOSITORY_URL = "${msocialNexusDockerRegistryUrl}${msocialNexusDockerRepositorySuffixUrl}"
        NEXUS_DOCKER_REPO_CREDENTIALS = credentials("msocial-nexus-docker")

        TRIGGERED_BY_USER = "${!currentBuild.getBuildCauses('hudson.model.Cause$UserIdCause').isEmpty()}"
        TRIGGERED_BY_BRANCH_INDEXING = "${!currentBuild.getBuildCauses('jenkins.branch.BranchIndexingCause').isEmpty()}"

        DEPLOYMENT_SERVER_SCRIPTS_DIR = "deployment"
        DEPLOYMENT_SERVER_SCRIPTS_CONTEXT_DIR = "context"
        DEPLOYMENT_SERVER_RUN_SCRIPT_NAME = "run.sh"

        DEPLOYMENT_GIT_DEFAULT_SCRIPTS_CLONE_INTO = "ci-cd-deployment-scripts"

        ONE_OF_BUILD_SERVICE_PRESENT = "false"
    }


    stages {
        stage("clean ws") {
            when {
                expression { return params.CleanBuild }
            }
            steps {
                sh "git clean -fdx"
            }
        }
        stage("prepare") {
            steps {
                script {
                    NO_CACHE_OPTION = "${(params.CleanBuild ? '--no-cache' : '')}"

                    LAST_RELEASE_TAG = sh(returnStdout: true, script: 'git describe --tags --abbrev=0').trim()
                    IMAGE_TAG = "${IS_PRODUCTION.toBoolean() ? LAST_RELEASE_TAG : GIT_SHA}"

                    SERVICES = []

                    DEPLOY_SERVICES_SUFFIX = ""

                    def dockerfiles = sh(returnStdout: true, script: 'find $DOCKER_CONFIG_DIR/ -name "Dockerfile"')

                    println("DOCKERFILES:")
                    println("${dockerfiles}")

                    dockerfiles.split('\n').each{ file ->
                        def dir = file.replace('/Dockerfile', '')
                        def dockerDir = "${dir}/"
                        def name = dir.substring(dir.lastIndexOf("/") + 1)

                        def sourceCodeDir = file.replace("${DOCKER_CONFIG_DIR}", "${SOURCE_CODE_DIR}").replace('Dockerfile', '')
                        def differentSourceCodeDir = fileExists(sourceCodeDir);
                        sourceCodeDir = differentSourceCodeDir ? sourceCodeDir : dockerDir

                        def normalizedName = Arrays.stream(name.replaceAll("[_-]", " ").split(" "))
                                            .collect{ part -> part.split("")[0].toUpperCase() + part.substring(1) }
                                            .join('')

                        def sourceCodeChanged = changesetContains(currentBuild.changeSets, /^$sourceCodeDir.*$/)
                        def configChanged = changesetContains(currentBuild.changeSets, /^$dockerDir.*$/)
                        def changed = sourceCodeChanged || configChanged

                        def buildByParams = params[normalizedName] == null || params[normalizedName]

                        def build = (TRIGGERED_BY_USER.toBoolean() && buildByParams) || (TRIGGERED_BY_BRANCH_INDEXING.toBoolean() && changed)

                        service = [:]
                        service.name = normalizedName
                        service.build = build
                        service.changed = changed
                        service.sourceCodeChanged = sourceCodeChanged
                        service.configChanged = configChanged
                        service.plainName = name
                        service.dockerDir = dockerDir
                        service.sourceCodeDir = sourceCodeDir
                        service.dockerfile = file
                        service.differentSourceCodeDir = differentSourceCodeDir

                        SERVICES.push(service)

                        if (build) {
                            ONE_OF_BUILD_SERVICE_PRESENT = "true"
                            DEPLOY_SERVICES_SUFFIX = "${DEPLOY_SERVICES_SUFFIX} ${name}"
                        }
                    }

                    sortByField(SERVICES, 'name')

                    SERVICES.each{ service ->
                        println("Found service: ${service}")
                    }

                    PREPARE_FILES_SATAGES = SERVICES.collectEntries {
                        ["${it.name}" : generatePrepareFilesStage(it)]
                    }

                    BUILD_DOCKER_IMAGE_STAGES = SERVICES.collectEntries {
                        ["${it.name}" : generateBuildImageStage(it)]
                    }

                    PUSH_DOCKER_IMAGES_STAGES = SERVICES.collectEntries {
                        ["${it.name}" : generatePushImageStage(it)]
                    }

                    println("Project name: ${PROJECT_NAME}")
                    println("Profile: ${PROFILE_NAME}")
                    println("Image tag: ${IMAGE_TAG}")
                    println("Last release tag: ${LAST_RELEASE_TAG}")
                    println("Deploy services suffix: ${DEPLOY_SERVICES_SUFFIX}")
                    println("Nexus repository url: ${NEXUS_REPOSITORY_URL}")
                    println("Delivery server config: ${DELIVERY_SERVER_CONFIR}")
                    println("Delivery server folder: ${DELIVERY_SERVER_FOLDER}")
                    println("Triggered by user: ${TRIGGERED_BY_USER}")
                    println("Triggered by branch index: ${TRIGGERED_BY_BRANCH_INDEXING}")
                    println("One of build service present: ${ONE_OF_BUILD_SERVICE_PRESENT}")


                    pritTasks()
                }
            }
        }
        stage("prepare files") {
            steps {
                script {
                    parallel PREPARE_FILES_SATAGES
                }
            }
        }
        stage("build imgs") {
            steps {
                script {
                    parallel BUILD_DOCKER_IMAGE_STAGES
                }
            }
        }
        stage("docker login") {
            when {
                expression { return ONE_OF_BUILD_SERVICE_PRESENT.toBoolean() }
            }
            steps {
                sh 'echo $NEXUS_DOCKER_REPO_CREDENTIALS_PSW | docker login -u $NEXUS_DOCKER_REPO_CREDENTIALS_USR $msocialNexusDockerRegistryUrl --password-stdin'
            }
        }
        stage("push imgs") {
            steps {
                script {
                    parallel PUSH_DOCKER_IMAGES_STAGES
                }
            }
        }
        stage("deployment") {
            when {
                expression { return ONE_OF_BUILD_SERVICE_PRESENT.toBoolean() }
            }
            steps {
                script {
                    print "Load deployment scripts..."
                    prepareDeploymentScriptsFromRepo()
                    print "Deployment scripts loaded and prepared"

                    def servicesEnv = generateDeployedServicesEnv(SERVICES)
                    print "Services tags: ${servicesEnv}"

                    def serverDeploymentContextDirPath = "${DEPLOYMENT_SERVER_SCRIPTS_DIR}/${DEPLOYMENT_SERVER_SCRIPTS_CONTEXT_DIR}"
                    def serverDeploymentRunScript = "${DEPLOYMENT_SERVER_SCRIPTS_DIR}/${DEPLOYMENT_SERVER_RUN_SCRIPT_NAME}"

                    def transfers = []

                    transfers.push(sshTransfer(
                        remoteDirectory: "${DELIVERY_SERVER_FOLDER}",
                        removePrefix: "${DOCKER_CONFIG_DIR}",
                        sourceFiles: "${DOCKER_CONFIG_DIR}/docker-compose.yml,${DOCKER_CONFIG_DIR}/${PROFILE_NAME}.env",
                        execCommand: "mv ${DELIVERY_SERVER_FOLDER}/${PROFILE_NAME}.env ${DELIVERY_SERVER_FOLDER}/.env"
                    ))

                    transfers.push(generateFilesTransfer(
                        "${DEPLOYMENT_PREPARE_FILES_DIR}",
                        "${DELIVERY_SERVER_FOLDER}/${DEPLOYMENT_SERVER_SCRIPTS_DIR}"
                    ))
                    transfers.push(generateFilesTransfer(
                        "${DEPLOYMENT_PREPARE_FILES_DIR}${PROFILE_NAME}/",
                        "${DELIVERY_SERVER_FOLDER}/${serverDeploymentContextDirPath}"
                    ))

                    transfers.push(sshTransfer(
                        execCommand: "cd ${DELIVERY_SERVER_FOLDER} && \
                            chmod +x ${serverDeploymentRunScript} && \
                            echo ${NEXUS_DOCKER_REPO_CREDENTIALS_PSW} | docker login -u ${NEXUS_DOCKER_REPO_CREDENTIALS_USR} ${msocialNexusDockerRegistryUrl} --password-stdin && \
                            (export NEXUS_REPOSITORY_URL=\"${NEXUS_REPOSITORY_URL}\" ${servicesEnv} DEPLOY_SERVICES_SUFFIX=\"${DEPLOY_SERVICES_SUFFIX}\" ; ./${serverDeploymentRunScript}) && \
                            rm -f ${serverDeploymentRunScript}"
                    ))

                    sshPublisher(
                        continueOnError: false, failOnError: true,
                        publishers: [
                            sshPublisherDesc(
                                configName: "${DELIVERY_SERVER_CONFIR}",
                                verbose: true,
                                transfers: transfers
                            )
                        ]
                    )

                    checkPublishOverSshResult("ERROR deploy stage")
                }
            }
        }
        stage("clean") {
            when {
                expression { return ONE_OF_BUILD_SERVICE_PRESENT.toBoolean() }
            }
            steps {
                script {
                    cleanWs();

                    for(int i = 0; i < SERVICES.size(); i++) {
                        def service = SERVICES[i]
                        def imageName = generateImageName(service)

                        catchError(
                            buildResult: "SUCCESS",
                            stageResult: "SUCCESS",
                            message: "${service.plainName} images not present. There is nothing to clean"
                        ) {
                            sh "docker rmi -f \$(docker images -q ${imageName})"
                        }
                    }
                }
            }
        }
    }
}

def generatePrepareFilesStage(service) {
    return {
        stage(service.name) {
            if (!service.build) {
                Utils.markStageSkippedForConditional(service.name)
                println("Skip prepare files step for service: ${service.name}")
                return;
            }

            println("Prepare files for ${service.name}")

            if (fileExists("${service.sourceCodeDir}pom.xml")) {
                println("Pom file found. Copy settings.xml file in context")
                configFileProvider([
                    configFile(fileId: mavenNexusSettingsCredentialId, variable: "MAVEN_SETTINGS_XML")
                ]) {
                    sh "cp ${MAVEN_SETTINGS_XML} ${service.sourceCodeDir}settings.xml"
                }
            }

            if (service.differentSourceCodeDir) {
                sh "cp -r ${service.dockerDir}. ${service.sourceCodeDir}"
            }

            catchError(
                buildResult: "SUCCESS",
                stageResult: "UNSTABLE",
                message: "${service.name} context files for ${PROFILE_NAME} profile not found. Don't worry it's not scary. Continue build..."
            ) {
                sh "cp -r ${service.sourceCodeDir}context/${PROFILE_NAME}/. ${service.sourceCodeDir}"
                sh "rm -rf ${service.sourceCodeDir}context/"
            }
        }
    }
}

def generateBuildImageStage(service) {
    return {
        stage(service.name) {
            if (!service.build) {
                Utils.markStageSkippedForConditional(service.name)
                println("Skip build image step for service: ${service.name}")
                return;
            }

            def imageName = generateImageName(service)

            println("Build image for ${service.name}. Image: ${imageName}")

            sh "docker build ${NO_CACHE_OPTION} --build-arg ENVIRONMENT=${PROFILE_NAME} -t ${imageName} ${service.sourceCodeDir}."
        }
    }
}

def generatePushImageStage(service) {
    return {
        stage(service.name) {
            if (!service.build) {
                Utils.markStageSkippedForConditional(service.name)
                println("Skip push image step for service: ${service.name}")
                return
            }

            def imageName = generateImageName(service)

            println("Push image for ${service.name}. Image: ${imageName}. Tag: ${IMAGE_TAG}")

            def humanLatestTag = "${!IS_PRODUCTION.toBoolean() ? 'dev-' : ''}latest"

            sh "docker tag ${imageName} ${NEXUS_REPOSITORY_URL}${imageName}:${humanLatestTag}"
            sh "docker push ${NEXUS_REPOSITORY_URL}${imageName}:${humanLatestTag}"

            sh "docker tag ${imageName} ${NEXUS_REPOSITORY_URL}${imageName}:${IMAGE_TAG}"
            sh "docker push ${NEXUS_REPOSITORY_URL}${imageName}:${IMAGE_TAG}"
        }
    }
}

def pritTasks() {
    try {
        def interval = ""
        def message = ""

        if (env.BRANCH_NAME == 'master') {
            message = "Tasks included in the release"
            interval = "${LAST_RELEASE_TAG}^..${LAST_RELEASE_TAG}"
        } else if (env.BRANCH_NAME == 'develop') {
            message = "Tasks that will be included in the next release"
            interval = "${LAST_RELEASE_TAG}..HEAD"
        }

        def logs = sh(script: "git log ${interval} --oneline --pretty=format:%s", returnStdout: true)

        def taskIds = logs.tokenize('\n')
                            .collect{ it.tokenize('-') }
                            .findAll{ it.size() == 2 }
                            .collect{ it[0].tokenize(' ') }
                            .findAll{ it.size() == 3 }
                            .collect{ it[0].replace("#", "").trim() }
                            .findAll{ it =~ /^[0-9]{1,}$/ }
                            .collect{ it.toInteger() }
                            .unique()
                            .sort()
                            .collect{ "https://tasks.msocialproduction.com/issues/${it}" }
                            .join('\n')

        print "=================================="
        print message
        print ""
        print "${taskIds}"
        print ""
        print "=================================="
    } catch (e) {
        print "Error extract tasks ids from logs. ${e.toString()}"
    }
}

def checkPublishOverSshResult(message) {
    if ('FAILURE' == currentBuild.result || 'UNSTABLE' == currentBuild.result) {
        catchError(
            buildResult: "FAILURE",
            stageResult: "FAILURE",
            message: message
        ) {
            sh "exit 1"
        }
        return false;
    } else {
        return true;
    }
}

def generateFilesTransfer(target, remoteDir) {
    return sshTransfer(
        remoteDirectory: remoteDir,
        removePrefix: target,
        sourceFiles: "${target}*",
        execCommand: "echo \"${target} files copied\""
    )
}

def generateImageName(service) {
    return "${PROJECT_NAME}-${service.plainName}"
}

def generateDeployedServicesEnv(services) {
    return services.findAll{ it.build }
            .collect{ "${it.plainName.toUpperCase().replaceAll('[\\s-]', '_')}_IMAGE_TAG=${IMAGE_TAG}" }
            .join(' ')
}

def projectName() {
    def jobName = env.JOB_NAME;
    return jobName.substring(0, jobName.lastIndexOf("/"));
}

boolean isProduction() {
    return env.BRANCH_NAME == 'master';
}

def profileName() {
    return isProduction() ? 'production' : 'test';
}

def prepareDeploymentRunSh() {
    if (!fileExists("${DEPLOYMENT_PREPARE_FILES_DIR}${DEPLOYMENT_SERVER_RUN_SCRIPT_NAME}")) {
        print "Custom [${DEPLOYMENT_SERVER_RUN_SCRIPT_NAME}] file not found. Use default"

        sh "mkdir -p ${DEPLOYMENT_PREPARE_FILES_DIR}"
        sh "cp ${DEPLOYMENT_GIT_DEFAULT_SCRIPTS_CLONE_INTO}/deployment/strategy/docker/default/run.sh ${DEPLOYMENT_PREPARE_FILES_DIR}${DEPLOYMENT_SERVER_RUN_SCRIPT_NAME}"
    } else {
        print "Found custom [${DEPLOYMENT_SERVER_RUN_SCRIPT_NAME}] file. Use it"
    }
}

def prepareDeploymentScriptsFromRepo() {
    sh "rm -rf ${DEPLOYMENT_GIT_DEFAULT_SCRIPTS_CLONE_INTO}"
    sh 'git clone --depth 1 https://$GIT_LAB_READ_CREDENTIALS_USR:$GIT_LAB_READ_CREDENTIALS_PSW@$cicdScriptsRepository $DEPLOYMENT_GIT_DEFAULT_SCRIPTS_CLONE_INTO'

    prepareDeploymentRunSh()
}

def changesetContains(changeSets, pattern) {
    boolean found = false;

    for (int i = 0; i < changeSets.size(); i++) {
        def current = changeSets.get(i);

        current.each{ changeSet ->

            changeSet.getAffectedPaths().each{ path ->
                def matcher = path =~ pattern;

                if (matcher.find()) {
                    found = true;
                    return;
                }
            }

            if (found) {
                return;
            }
        }

        if (found) {
            break;
        }
    }

    return found;
}

@NonCPS
static sortByField(list, fieldName) {
    list.sort{ it[fieldName] }
}
