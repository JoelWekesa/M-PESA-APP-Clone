import { StyleSheet, Text, View } from 'react-native';
import React, { FC, ReactNode } from 'react';

const Card: FC<{ children: ReactNode }> = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		borderRadius: 15,
		padding: 16,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 6,
		elevation: 14,
		width: '100%',
		height: 'auto',
	},
});
