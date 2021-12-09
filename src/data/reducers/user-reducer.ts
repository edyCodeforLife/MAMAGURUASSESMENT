
export const USER_ACTIONS = {
	CHANGE_USER: 'CHANGE_USER',
	CHANGE_ROUTE: 'CHANGE_ROUTE'
};

export interface IUserState {
	user: any;
	route: any
}

export interface IUserAction {
	type: 'CHANGE_USER' | 'CHANGE_ROUTE';
	data: IUserState;
}

export const userReducer = (state: IUserState, action: IUserAction): IUserState => {
	switch (action.type) {
		case USER_ACTIONS.CHANGE_USER:
			return {
				...state,
				user: action.data.user
			};
		case USER_ACTIONS.CHANGE_ROUTE:
			return {
				...state,
				route: action.data.route
			};
		default:
			return state;
	}
};
