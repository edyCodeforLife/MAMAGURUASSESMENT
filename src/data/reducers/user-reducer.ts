
export const USER_ACTIONS = {
	CHANGE_USER: 'CHANGE_USER',
};

export interface IUserState {
	user: any;
}

export interface IUserAction {
	type: 'CHANGE_USER';
	data: IUserState;
}

export const userReducer = (state: IUserState, action: IUserAction): IUserState => {
	switch (action.type) {
		case USER_ACTIONS.CHANGE_USER:
			return {
				...state,
				user: action.data.user
			};
		default:
			return state;
	}
};
