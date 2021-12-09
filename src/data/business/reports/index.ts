
import { IResponseSuccess, HandleError } from '../../services/error/response';
import { IReportsServiceData, ReportsServiceData } from '../../services/reports/reports-service';
import { IResponseReports, IResponseChildInfo } from '../../services/reports/reports-interface';

export interface IReportsServiceUser {
	ChildInfo(user_id: string, handler: IResponseSuccess): void;
	FetchReports(kids_id: string, handler: IResponseSuccess): void;
}

export class ReportServiceUser implements IReportsServiceUser {
	private _service: IReportsServiceData;

	constructor() {
		this._service = new ReportsServiceData();
	}

	async ChildInfo(user_id: string, handler: IResponseSuccess) {
		try {
			const response = await this._service.ChildInfo(user_id);
			return await handler.Success<IResponseChildInfo>(response.data);
		}
		catch (e) {
			return HandleError(e, handler);
		}
	}

	async FetchReports(kids_id: string, handler: IResponseSuccess) {
		try {
			const response = await this._service.FetchReports(kids_id);
			return await handler.Success<IResponseReports>(response.data);
		}
		catch (e) {
			return HandleError(e, handler); ``
		}
	}
}