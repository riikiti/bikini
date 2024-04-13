export default class Application {
  favouritesCount = null
  moderatorId = null

  constructor(data) {
    console.log(data)
    this.favouritesCount = data?.favourites_count ?? null
    this.moderatorId = data?.moderator_id ?? null
  }
}
