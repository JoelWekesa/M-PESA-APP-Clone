import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import Card from './shared/Card';
import BlurredText from './BlurredText';
import { BlurView } from 'expo-blur';
import { LatoLight, LatoRegular, ThinText100 } from './CustomText';

const Balance = () => {
	const [show, setShow] = useState(true);
	const toggleShow = () => {
		setShow((show) => !show);
	};
	return (
		<View style={styles.container}>
			<Card>
				<View style={styles.column}>
					<LatoLight>Balance</LatoLight>

					<View style={styles.row}>
						<Text
							variant='displaySmall'
							style={[show ? styles.balanceText : styles.hide]}>
							Ksh. 13,438.53
						</Text>
						<Pressable onPress={toggleShow}>
							<Avatar.Icon
								icon={show ? 'eye-outline' : 'eye-off-outline'}
								style={styles.clearAvatar}
								size={40}
							/>
						</Pressable>
					</View>
					<Text
						variant='bodyLarge'
						style={[show ? styles.fulizaText : styles.hide]}>
						Available FULIZA: KSH 5900.00
					</Text>
				</View>
			</Card>
		</View>
	);
};

export default Balance;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginHorizontal: 5,
		marginTop: 20,
	},
	column: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	row: {
		flexDirection: 'row',
	},

	clearAvatar: {
		backgroundColor: '#fff',
	},

	balanceText: {
		fontWeight: '200',
	},

	fulizaText: {
		color: 'blue',
		fontWeight: '200',
	},

	hide: {
		opacity: 0,
		shadowOpacity: 0.3,
	},

	blurContainer: {
		flex: 1,
		padding: 20,
		margin: 16,
		textAlign: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		borderRadius: 20,
	},

	text: {
		fontSize: 24,
		fontWeight: '600',
	},
});
