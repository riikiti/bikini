export default class Messenger {
  receiverUser = null
  senderUser = null
  messages = []

  constructor(data) {
    console.log(data)
    this.receiverUser = this.#createChatUser(data?.receiver_user) ?? null
    this.senderUser = this.#createChatUser(data?.sender_user) ?? null
    this.messages = this.#createMessagesList(data?.sent_messages ?? [])
  }

  #createChatUser(data) {
    return {
      id: data?.id ?? null,
      name: data?.name ?? '',
      avatar: data?.avatar ?? null
    }
  }
  #createMessagesList(messages) {
    return messages.map(message => ({
      id: message.id,
      senderId: message?.sender_id ?? null,
      receiverId: message?.receiver_id ?? null,
      content: message?.content ?? null,
      createdAt: message?.created_at ?? null,
      updatedAt: message?.updated_at ?? null
    }))
  }
}
