import { Slot } from 'expo-router';
import React from 'react';
import AuthProvider from '../providers/auth';

const RootLayout = () => {
	return (
		<AuthProvider>
			<Slot />
		</AuthProvider>
	);
};

export default RootLayout;
