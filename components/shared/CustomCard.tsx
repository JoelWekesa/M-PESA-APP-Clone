import { StyleSheet, Text, View } from 'react-native';
import React, { FC, ReactNode } from 'react';

const CustomCard: FC<{ children: ReactNode }> = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

export default CustomCard;

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 16,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
		width: '100%',
		height: 'auto',
	},
});
