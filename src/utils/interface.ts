export interface IStock {
  name: string;
  ticker: string;
}

export interface IStockResponse {
  next_url: string;
  results: IStock[];
}
