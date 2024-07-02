export type PostListData = {
  cover: string
  date: string
  friendly_title: string
  post_public_idtext: string
  title: string
  type: string
}
export type PostList = PostListData[]

export type Post = {
  cover: string
  date: string
  friendly_title: string
  owner_public_idtext: string
  post_public_idtext: string
  site_public_idtext: string
  source: string
  text: string
  title: string
  type: string
}
