import { StyleSheet, Text, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
	Lato_100Thin,
	Lato_400Regular,
	Lato_300Light,
} from '@expo-google-fonts/lato';
import { TextProps } from './Themed';

export const ThinText100: FC<{ children: ReactNode }> = ({ children }) => {
	let [fontsLoaded, fontError] = useFonts({
		Lato_100Thin,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return <Text style={{ fontFamily: 'Lato_100Thin' }}>{children}</Text>;
};

export const LatoLight: FC<{ children: ReactNode }> = ({ children }) => {
	let [fontsLoaded, fontError] = useFonts({
		Lato_300Light,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return <Text style={{ fontFamily: 'Lato_300Light' }}>{children}</Text>;
};

export const LatoRegular: FC<{ children: ReactNode }> = ({ children }) => {
	let [fontsLoaded, fontError] = useFonts({
		Lato_400Regular,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<Text style={{ fontFamily: 'Lato_400Regular', fontSize: 16 }}>
			{children}
		</Text>
	);
};

const CustomText: FC<{ children: ReactNode }> = ({ children }) => {
	let [fontsLoaded, fontError] = useFonts({
		Inter_900Black,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>
			{children}
		</Text>
	);
};

export default CustomText;

export const LatoText = (props: TextProps) => {
	let [fontsLoaded, fontError] = useFonts({
		Lato_300Light,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}
	return (
		<Text {...props} style={[props.style, { fontFamily: 'Lato_300Light' }]} />
	);
};

const styles = StyleSheet.create({});
