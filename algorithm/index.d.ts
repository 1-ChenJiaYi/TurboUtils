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
  readonly queue: T[]
  isEmpty: () => boolean
  pop: () => boolean
  push: (...v: T[]) => void
  front: () => T | undefined
  size: () => number
  clear: () => void
}

