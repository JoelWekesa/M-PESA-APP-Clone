import React, {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useReducer,
} from 'react';

import * as secureStore from 'expo-secure-store';

enum Actions {
	SignIn = 'SignIn',
	SignOut = 'SignOut',
}

export interface User {
	username: string;
	password: string;
}

interface Action {
	type: string;
	payload?: User;
}

interface Auth {
	isAuthenticated: boolean;
	isLoading: boolean;
	user?: User;
}

export interface AuthActions extends Auth {
	signIn: (user: User) => void;
	signOut: () => void;
}

const reducer = (state: Auth, { type, payload }: Action): Auth => {
	switch (type) {
		case Actions.SignIn:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: payload,
			};

		case Actions.SignOut:
			return {
				...state,
				isAuthenticated: false,
				isLoading: false,
				user: undefined,
			};

		default:
			return state;
	}
};

const AuthContext = createContext<AuthActions>({
	isAuthenticated: false,
	isLoading: false,
	signIn: (_user: User) => {},
	signOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const initialState = {
		isLoading: false,
		isAuthenticated: false,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const signIn = async (user: User) => {
		await secureStore.setItemAsync('username', user.username);
		await secureStore.setItemAsync('password', user.password);
		dispatch({ type: Actions.SignIn, payload: user });
	};

	const signOut = async () => {
		await secureStore.deleteItemAsync('username');
		await secureStore.deleteItemAsync('password');
		dispatch({ type: Actions.SignOut });
	};

	useEffect(() => {
		const loadUserName = async () => {
			const token = await secureStore
				.getItemAsync('username')
				.then((data) => data);

			return token;
		};

		const loadPassword = async () => {
			const token = await secureStore
				.getItemAsync('password')
				.then((data) => data);
			return token;
		};
		const loadToken = async () => {
			const [username, password] = await Promise.all([
				loadUserName(),
				loadPassword(),
			]);

			console.log({
				username,
				password,
			});

			if (username && password) {
				dispatch({ type: Actions.SignIn, payload: { username, password } });
			} else {
				dispatch({ type: Actions.SignOut });
			}
		};

		loadToken();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				...state,
				signIn,
				signOut,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
