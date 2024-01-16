export interface ChatHistoryModalProps {}
export interface ChatHistoryModalRef {
  open: () => void
  close: () => void
}

export interface IChatHistory {
  _id: string
  title: string
  text: string
  date: Date | number | string
}
