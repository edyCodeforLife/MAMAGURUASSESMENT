import { AxiosPromise } from 'axios';
import { DataService } from '../config';
import { IResponseChildInfo, IResponseReports } from './reports-interface';

export interface IReportsServiceData {
	ChildInfo(user_id: string): AxiosPromise<IResponseChildInfo>;
	FetchReports(kids_id: string): AxiosPromise<IResponseReports>;
}

export class ReportsServiceData implements IReportsServiceData {
	ChildInfo(user_id: string): AxiosPromise<IResponseChildInfo> {
		return DataService.get<IResponseChildInfo>(`/portal/child_info?user_id=${user_id}`);
	}
	FetchReports(kids_id: string): AxiosPromise<IResponseReports> {
		return DataService.get<IResponseReports>(`/reports/fetch_reports?kids_id=${kids_id}`);
	}
}