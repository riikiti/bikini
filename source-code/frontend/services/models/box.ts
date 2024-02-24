export interface IBoxVideoItem {
  video: number
  id: number
}
export interface IBoxPhotoItem {
  image: number
  id: number
}

export interface IBoxPostItem {
  id: number
  created_at: string
  description?: string
  user_id: number
  price: number
  isPaid: boolean
  videos?: IBoxVideoItem[]
  photos?: IBoxPhotoItem[]
}
