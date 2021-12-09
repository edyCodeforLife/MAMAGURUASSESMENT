export interface IResponseReports {
	milestone: IMilestone;
	reports: IReports[];
	teaching_partners: ITeachingPartners[];
	terms: ITerms[];
}

export interface IMilestone {
	cognitive: Iresults;
	language: Iresults;
	motor: Iresults;
	sensory: Iresults;
	social_emotion: Iresults;
}

export interface Iresults {
	completed: object;
	need_to_try: object;
	not_completed: object
}

export interface IReports {
	activity_id: string;
	comments: string;
	created_on: string | Date;
	image_id: string;
	kids_id: string;
	learning_scopes: ILearningScopes;
	modified_by: string;
	modified_on: string | Date;
	next_activity: string;
	rating: number;
	report_id: string;
	session_date: string | Date;
	subtopic: string;
	summary: string;
	teaching_partner: string;
	teaching_partner_id: string;
	term_no: string;
	topic: string;
	_session_no: number;
}

export interface ILearningScopes {
	char_social_culture: [];
	cognitive_flexibility: [];
	communication_literacy: [];
	family_bonding: [];
	physical_well_being: [];
}

export interface ITeachingPartners {
	label: string;
	value: string;
}

export interface ITerms {
	label: string;
	value: string;
}

export interface IResponseChildInfo {
	dob: string;
	first_name: string;
	kids_id: string;
	label: string;
	last_name: string;
	milestones: any;
	user_id: string;
	value: string;
}