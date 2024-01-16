export interface IOperating {
  id: string
  title: string
  description: string
  date: Date
  time: string
}

export interface OperatingList {
  title: string
  data: IOperating[]
}
