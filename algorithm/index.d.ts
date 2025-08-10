export interface tbStack<T> {
  public q: Array<T>
  private _qLength: number
  private _tt: number 
  private _MAX_LENGTH: number 
  public isEmpty: () => boolean
  public pop: () => boolean
  public push: (value: T) => void
  public top: () => T | undefined  
  public size: () => number 
}

export interface tbQueue<T> {
  pop: () => boolean
  push: (value: T) => boolean
  q: Array<T>
  size: number
  front: T | undefined
  isEmpty: () => boolean
}

