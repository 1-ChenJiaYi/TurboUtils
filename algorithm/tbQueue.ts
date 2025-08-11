import type { tbQueue } from "./index.d.ts";

//implements tbQueue<T>
export class TbQueue<T> {
  private q: T[]; 
  private _tt: number; 
  private _hh: number; 
  private _MAX_LENGTH = Math.floor(1e8); 
  private _MAX_LENGTH_DEFAULT = Math.floor(1e8 + 7231);
  readonly queue: T[];

  constructor(ml: number) {
    this._tt = 0; 
    this._hh = 0; 
    this._MAX_LENGTH = ml; 
    if(ml !== this._MAX_LENGTH_DEFAULT) {
      this.q = new Array<T>(ml); 
    }
    else this.q = new Array<T>(2); 
    this.queue = this.q; 
  }

  push(...v: T[]) {
    
  }
}