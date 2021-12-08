import {
	IRequestLogin,
	IResponseLogin
} from '../../services/auth/auth-interface';
import { IResponseSuccess, HandleError } from '../../services/error/response';
import { IAuthServiceData, AuthService } from '../../services/auth/auth-services';

export interface IAuthServiceMama {
	LoginService(req: IRequestLogin, handler: IResponseSuccess): void;
}

export class AuthServiceMama implements IAuthServiceMama {
	private _service: IAuthServiceData;

	constructor() {
		this._service = new AuthService();
	}

	async LoginService(req: IRequestLogin, handler: IResponseSuccess) {
		try {
			const response = await this._service.Login(req);
			return await handler.Success<IResponseLogin>(response.data);
		}
		catch (e) {
			return HandleError(e, handler);
		}
	}
}