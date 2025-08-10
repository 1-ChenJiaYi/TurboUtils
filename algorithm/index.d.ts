export interface tbStack<T> {
  queue: T[]
  isEmpty: () => boolean
  pop: () => boolean
  push: (value: T) => void
  top: () => T | undefined
  size: () => number
}

export interface tbQueue<T> {
  pop: () => boolean
  push: (value: T) => boolean
  q: Array<T>
  size: number
  front: T | undefined
  isEmpty: () => boolean
}

