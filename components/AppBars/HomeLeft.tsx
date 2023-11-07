import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Avatar } from 'react-native-paper';

const HomeLeft: FC<{ username: string }> = ({ username }) => {
	const now = new Date();
	const currentHour = now.getHours();
	const [greet, setGreet] = useState('');
	useEffect(() => {
		if (currentHour >= 6 && currentHour < 12) {
			setGreet('Good Morning');
		} else if (currentHour >= 12 && currentHour < 18) {
			setGreet('Good Afternoon');
		} else {
			setGreet('Good Evening');
		}
	}, []);

	return (
		<View style={styles.row}>
			<Avatar.Icon icon='account' size={40} />
			<View style={styles.column}>
				<Text>{greet}</Text>
				<Text>{username} 👋</Text>
			</View>
		</View>
	);
};

export default HomeLeft;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},

	column: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 5,
	},
});
