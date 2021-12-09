import { IAppState } from './reducers/app-reducer';
import { IUserState } from './reducers/user-reducer';

export const initialState: {
	user: IUserState;
	application: IAppState;
} = {
	user: {
		user: {},
		route: 0
	},
	application: {
		token: "",
		isMounted: false,
		connection: null,
		newEmail: "",
		newPhone: ""
	},
};