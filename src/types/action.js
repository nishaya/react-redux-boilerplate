/* eslint-disable */

export type Action<P = Object, M = any> = {|
  type: string;
  payload?: P;
  error?: M;
  meta?: any;
|}
