import React from 'react';
import { View, Text } from 'react-native';
import { BlurView } from 'expo-blur';

const BlurredText = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<BlurView
				style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
				intensity={10} // Adjust the blur intensity
			/>
			<Text style={{ fontSize: 24, color: 'white' }}>Blurred Text</Text>
		</View>
	);
};

export default BlurredText;
