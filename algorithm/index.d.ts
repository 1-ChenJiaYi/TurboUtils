export interface tbStack<T> {
  readonly stack: T[]
  isEmpty: () => boolean
  pop: () => boolean
  push: (...v: T[]) => void
  top: () => T | undefined
  size: () => number
  clear: () => void
}

export interface tbQueue<T> {
  pop: () => boolean
  push: (value: T) => boolean
  q: Array<T>
  size: number
  front: T | undefined
  isEmpty: () => boolean
}

