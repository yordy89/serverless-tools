export interface IAuth {
  accessToken: string;
  accessTokenExpiresAt: string;
  client: { id: string };
  refreshToken: string;
  refreshTokenExpiresAt: string;
  scope: string;
  user: {
    companyId: string;
    id: string;
  };
}

export interface IAttachment {
  checksum: string;
  company: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  key: string;
  name: string;
  sizeKb: number;
  user: string;
}

export interface IUser {
  companyId: string;
  user: {
    id: string;
  };
}
