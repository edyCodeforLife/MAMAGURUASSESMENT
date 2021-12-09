import { AxiosPromise } from 'axios';
import { DataService } from '../config';
import { ISettingsResponse } from './settings-interface';

export interface ISettingServiceData {
	userInfomation(user_id: string): AxiosPromise<ISettingsResponse>;
}

export class SettingServiceData implements ISettingServiceData {
	userInfomation(user_id: string): AxiosPromise<ISettingsResponse> {
		return DataService.get<ISettingsResponse>(`/admin/get_user_details?user_id=${user_id}`);
	}
}