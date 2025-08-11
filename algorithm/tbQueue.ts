import type { tbQueue } from "./index.d.ts";

export class TbQueue<T> implements tbQueue<T> {
  private q: T[]; 
  private _tt: number; 
  private _hh: number; 
  private _MAX_LENGTH = Math.floor(1e8); 
  private _MAX_LENGTH_DEFAULT = Math.floor(1e8 + 7231);
  readonly queue: T[];

  constructor(ml: number) {
    if(ml === undefined) {
      throw new Error("Queue size is undefined")
    }
    this._tt = 0; 
    this._hh = 0; 
    this._MAX_LENGTH = ml; 
    this.q = new Array<T>(ml)  
    this.queue = this.q; 
  }

  push(...v: T[]) {
    if(this._MAX_LENGTH < this._tt + v.length) {
      throw new Error(`Queue size exceeds maximum limit, ${this._MAX_LENGTH}`)
    }
    for(const i of v) this.q[this._tt ++] = i 
  }

  pop() {
    if(this._hh === this._tt) return false 
    this._hh ++ 
    return true 
  }

  front() {
    if(this._hh === this._tt) return undefined 
    return this.q[this._hh]
  }

  isEmpty() {
    return this._hh === this._tt 
  }

  size() {
    return this._tt - this._hh 
  }

  clear() {
    this._hh = 0 
    this._tt = 0 
  }
}