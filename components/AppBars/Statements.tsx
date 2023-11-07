import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Icon } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const ToolBar = () => {
	const [current, setCurrent] = useState(2);
	const router = useRouter();

	const months = ['September', 'October', 'November'];

	useEffect(() => {
		router.setParams({ month: months[current] });
	}, [current]);

	const toggleCurrent = (val: number) => {
		setCurrent(val);
	};

	return (
		<View style={[styles.row, styles.spaceAround]}>
			<Pressable
				style={[styles.normal, current === 0 && styles.box]}
				onPress={() => toggleCurrent(0)}>
				<Text style={current === 0 && styles.whiteText}>September</Text>
			</Pressable>

			<Pressable
				style={[styles.normal, current === 1 && styles.box]}
				onPress={() => toggleCurrent(1)}>
				<Text style={current === 1 && styles.whiteText}>October</Text>
			</Pressable>
			<Pressable
				style={[styles.normal, current === 2 && styles.box]}
				onPress={() => toggleCurrent(2)}>
				<Text style={current === 2 && styles.whiteText}>November</Text>
			</Pressable>
		</View>
	);
};

const StatementsAppBar = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.column}>
			<View style={[styles.row, styles.spaceBetween]}>
				<Pressable onPress={() => router.replace('/')}>
					<Icon source='arrow-left' size={30} />
				</Pressable>
				<Text style={styles.titleText}>M-PESA Statements</Text>
				<Icon source='magnify' size={30} />
			</View>
			<ToolBar />
		</SafeAreaView>
	);
};

export default StatementsAppBar;

const styles = StyleSheet.create({
	column: {
		flexDirection: 'column',
	},

	row: {
		flexDirection: 'row',

		padding: 10,
	},

	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	spaceBetween: {
		justifyContent: 'space-between',
	},

	spaceAround: {
		justifyContent: 'space-around',
	},

	titleText: {
		textTransform: 'uppercase',
	},

	normal: {
		paddingHorizontal: 20,
		borderRadius: 20,
		paddingVertical: 10,
	},

	box: {
		backgroundColor: '#46c272',
	},

	whiteText: {
		color: '#FFF',
	},
});
