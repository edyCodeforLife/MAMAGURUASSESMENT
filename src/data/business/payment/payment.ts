
import { IResponseSuccess, HandleError } from '../../services/error/response';
import { IPaymentServiceData, PaymentServiceData } from '../../services/payment/payment-service';

export interface IPaymentService {
	paymentInfo(user_id: string, handler: IResponseSuccess): void;
}

export class PaymentService implements IPaymentService {
	private _service: IPaymentServiceData;

	constructor() {
		this._service = new PaymentServiceData();
	}

	async paymentInfo(user_id: string, handler: IResponseSuccess) {
		try {
			const response = await this._service.paymentInfo(user_id);
			return await handler.Success<any>(response.data);
		}
		catch (e) {
			return HandleError(e, handler);
		}
	}
}