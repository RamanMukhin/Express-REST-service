interface IPayload {
  id: string;
  login: string;
  issued?: number;
  expires?: number;
}

export { IPayload }