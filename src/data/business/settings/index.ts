
import { IResponseSuccess, HandleError } from '../../services/error/response';
import { ISettingsResponse } from '../../services/settings/settings-interface';
import { ISettingServiceData, SettingServiceData } from '../../services/settings/settings-service';

export interface ISettingService {
	userInfomation(user_id: string, handler: IResponseSuccess): void;
}

export class SettingService implements ISettingService {
	private _service: ISettingServiceData;

	constructor() {
		this._service = new SettingServiceData();
	}

	async userInfomation(user_id: string, handler: IResponseSuccess) {
		try {
			const response = await this._service.userInfomation(user_id);
			return await handler.Success<ISettingsResponse>(response.data);
		}
		catch (e) {
			return HandleError(e, handler);
		}
	}
}