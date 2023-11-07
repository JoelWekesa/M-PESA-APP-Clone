import { Redirect, Stack } from 'expo-router';
import React from 'react';
import HomeLeft from '../../components/AppBars/HomeLeft';
import HomeRight from '../../components/AppBars/HomeRight';
import StatementsAppBar from '../../components/AppBars/Statements';
import { useAuth } from '../../providers/auth';

const AppLayout = () => {
	const { isAuthenticated, user } = useAuth();

	if (!isAuthenticated) return <Redirect href='/login' />;

	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerLeft: (_props) => <HomeLeft username={user?.username!} />,
					title: '',
					headerRight: () => <HomeRight />,
				}}
			/>
			<Stack.Screen
				name='statements'
				options={{
					header: () => <StatementsAppBar />,
				}}
			/>
		</Stack>
	);
};

export default AppLayout;
