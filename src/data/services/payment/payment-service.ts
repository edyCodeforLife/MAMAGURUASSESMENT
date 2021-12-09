import { AxiosPromise } from 'axios';
import { DataService } from '../config';

export interface IPaymentServiceData {
	paymentInfo(user_id: string): AxiosPromise<any>;
}

export class PaymentServiceData implements IPaymentServiceData {
	paymentInfo(user_id: string): AxiosPromise<any> {
		return DataService.get<any>(`/payments/get_payments?user_id=${user_id}`);
	}
}