import { useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
	FlatList,
	NativeScrollEvent,
	NativeSyntheticEvent,
	StyleSheet,
	View,
} from 'react-native';
import { AnimatedFAB } from 'react-native-paper';
import { getStatements } from '../../data/statements';
import DetailedStatement from './DetailedStatement';

const DetailedStatements = ({ animateFrom }: any) => {
	const params = useGlobalSearchParams();

	const [isExtended, setIsExtended] = useState(true);

	// const isIOS = Platform.OS === 'ios';

	const onScroll = ({
		nativeEvent,
	}: NativeSyntheticEvent<NativeScrollEvent>) => {
		const currentScrollPosition =
			Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

		setIsExtended(currentScrollPosition <= 0);
	};

	const fabStyle = { [animateFrom]: 16 };

	return (
		<View style={styles.container}>
			<FlatList
				data={getStatements(params?.month! as string)}
				renderItem={({ item }) => <DetailedStatement statement={item} />}
				keyExtractor={(item) => item.date}
				onScroll={onScroll}
			/>
			<AnimatedFAB
				icon={'note-text-outline'}
				label={'EXPORT STATEMENTS'}
				extended={isExtended}
				onPress={() => console.log('Pressed')}
				animateFrom={'right'}
				style={[styles.fabStyle, fabStyle]}
				color='#46c272'
			/>
		</View>
	);
};

export default DetailedStatements;

const styles = StyleSheet.create({
	container: {
		marginTop: -20,
		marginHorizontal: 5,
	},

	fabStyle: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 40,
		backgroundColor: '#FFF',
	},
});
