export interface IUserRequest{
    name:string;
    email:string;
    jti:number;
}

export interface IUserTokenRequest{
    user_token:string;
}