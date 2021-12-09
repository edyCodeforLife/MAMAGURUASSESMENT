export interface ISettingsResponse {
	email: string;
	first_name: string;
	kids: IKids[]
	last_name: string;
	password: string;
	phone_number: string;
	role: string
	status: string
	user_id: string
	user_name: string
}

export interface IKids {
	dob: string | Date
	first_name: string
	kids_id: string;
	last_name: string
	milestones: any
	status: string
	user_id: string;
}