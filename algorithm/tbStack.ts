import type { tbStack } from "./index.d.ts";

export class TbStack<T> implements tbStack<T> {
  private q: T[];
  private _tt: number;
  private _qLength: number; 
  private _MAX_LENGTH = Math.floor(1e8); 
  private _MAX_LENGTH_DEFAULT = Math.floor(1e8 + 7231); 
  readonly stack: T[];

  constructor(ml: number = this._MAX_LENGTH_DEFAULT) {
    this._qLength = 2
    this._tt = 0  
    this._MAX_LENGTH = ml 
    if(ml !== this._MAX_LENGTH_DEFAULT) {
      this.q = new Array<T>(ml)
    }
    else this.q = new Array<T>(2) 
    this.stack = this.q 
  }

  private resize(l: number) {
    this._qLength = Math.min(l, this._MAX_LENGTH) 
    this.q.length = this._qLength 
  }
  
  private pushList(...v: T[]) {
    while(this._qLength !== this._MAX_LENGTH && 
      this._qLength < this._tt + v.length) this.resize(this._qLength * 2)
    for(let i = 0; i < v.length; i ++) this.q[this._tt ++] = v[i]
  }

  push(...v: T[]) {
    if(this._MAX_LENGTH < this._tt + v.length) {
      throw new Error("Stack size exceeds maximum limit")
    }
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


