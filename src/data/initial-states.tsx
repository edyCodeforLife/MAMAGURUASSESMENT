import { IAppState } from './reducers/app-reducer';
import { IUserState } from './reducers/user-reducer';

export const initialState: {
	user: IUserState;
	application: IAppState;
} = {
	user: {
		user: {},
	},
	application: {
		token: "",
		isMounted: false,
		connection: null,
		newEmail: "",
		newPhone: ""
	},
};