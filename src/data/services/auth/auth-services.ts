import { AxiosPromise } from 'axios';
import {
	IRequestLogin,
	IResponseLogin

} from './auth-interface';
import { DataService } from '../config';

export interface IAuthServiceData {
	Login(req: IRequestLogin): AxiosPromise<IResponseLogin>;
}

export class AuthService implements IAuthServiceData {
	Login(req: IRequestLogin): AxiosPromise<IResponseLogin> {
		return DataService.post<IResponseLogin>('/auth/auth', req);
	}
}