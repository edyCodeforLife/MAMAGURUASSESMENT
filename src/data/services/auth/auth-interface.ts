

export interface IRequestLogin {
	user_name: string;
	password: string;
}

export interface IResponseLogin {
	success: boolean;
	user_type: string;
	user_id: string;
	display_name: string;
}