export class RESPONSE{
  code: number;
  message: string;
  object: object;
}

export class constant{
   static API = 'http://10.0.115.71:9002/';
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
