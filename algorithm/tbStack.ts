import type { tbStack } from "./index.d.ts";

export class TbStack<T> implements tbStack<T> {
  private q: T[];
  private _tt: number;
  private _qLength: number; 
  private _MAX_LENGTH = Math.floor(1e8); 
  readonly queue: T[];

  constructor() {
    this._qLength = 2
    this._tt = 0  
    this.q = new Array<T>(2) 
    this.queue = this.q 
  }

  private resize(l: number) {
    this._qLength = l 
    this.q.push(...new Array<T>(l - this.q.length))
  }
  
  private pushList(...v: T[]) {
    while(this._qLength < this._tt + v.length) this.resize(this._qLength * 2)
    for(let i = 0; i < v.length; i ++) this.q[this._tt ++] = v[i]
  }

  push(...v: T[]) {
    if(v.length > 1) {
      this.pushList(...v)
      return 
    }
    this.q[this._tt ++] = v[0]  
  }

  pop() {
    if(this._tt === 0) return false 
    this._tt -- 
    return true 
  }

  top() {
    if(this._tt === 0) return undefined 
    return this.q[this._tt - 1]
  }

  isEmpty() {
    return this._tt === 0 
  }

  size() {
    return this._tt 
  }
  
  clear() {
    this._tt = 0 
    this._qLength = 2 
    this.q = new Array<T>(2) 
  }
}


