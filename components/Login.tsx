import Checkbox from 'expo-checkbox';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from 'react-native';
import { Button, Text as PaperText, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, useAuth } from '../providers/auth';

const customTheme = {
	roundness: 15,
};

const LoginComponent = () => {
	const { isAuthenticated, signIn } = useAuth();

	const { height } = useWindowDimensions();

	const [isKeyboardVisible, setKeyboardVisible] = useState(false);

	const [see, setSee] = useState(false);

	const secureTextEntry = useMemo(() => !see, [see]);

	const [username, setUserName] = useState('');

	const [password, setPassword] = useState('');

	const toggleSee = useCallback(() => {
		setSee((see) => !see);
	}, [see]);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			() => {
				setKeyboardVisible(true);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				setKeyboardVisible(false);
			}
		);

		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, [isKeyboardVisible]);

	useFocusEffect(() => {
		if (isAuthenticated) {
			router.replace('/');
		}
	});

	const [checked, setChecked] = useState(false);

	const toggleCheck = () => {
		setChecked(!checked);
	};

	const handleUsername = (text: string) => {
		setUserName(text);
	};

	const handlePassword = (text: string) => {
		setPassword(text);
	};

	const handleSubmit = () => {
		const user: User = {
			username,
			password,
		};

		signIn(user);
	};

	return (
		<SafeAreaView style={[{ height }, styles.container]}>
			<KeyboardAvoidingView behavior='position'>
				<View style={styles.spacer}>
					<View style={[{ height: height * 0.5 }, styles.imageContainer]}>
						<Image
							source={require('../assets/images/logo.jpeg')}
							style={[styles.image, isKeyboardVisible ? styles.hidden : null]}
						/>
					</View>
					<View style={[{ height: height * 0.4 }, styles.form]}>
						<View style={styles.column}>
							<View style={styles.item}>
								<TextInput
									dense
									label='Username'
									mode='outlined'
									theme={customTheme}
									style={styles.textInput}
									defaultValue=''
									textContentType='oneTimeCode'
									onChangeText={handleUsername}
								/>
							</View>
							<View style={styles.item}>
								<TextInput
									label='Password'
									mode='outlined'
									dense
									theme={customTheme}
									style={styles.textInput}
									secureTextEntry={secureTextEntry}
									textContentType='oneTimeCode'
									defaultValue=''
									onChangeText={handlePassword}
									right={
										<TextInput.Icon
											icon={see ? 'eye-off-outline' : 'eye-outline'}
											onPress={() => toggleSee()}
										/>
									}
								/>
							</View>
							<View style={[styles.item, styles.bottomSpace]}>
								<View style={styles.row}>
									<View style={[styles.row, styles.rowItem]}>
										<Checkbox value={checked} onValueChange={toggleCheck} />
										<Text>Remember Me</Text>
									</View>
									<View style={styles.rowItem}>
										<Text>Forgot Password</Text>
									</View>
								</View>
							</View>
							<View style={[styles.item, styles.bottomSpace]}>
								<View style={styles.column}>
									<Button
										mode='contained'
										style={[styles.button, styles.blackButton]}
										onPress={handleSubmit}>
										Login
									</Button>
									<Button mode='outlined' style={[styles.button]}>
										<Text style={styles.blackText}>Sign Up</Text>
									</Button>
								</View>
							</View>
						</View>
					</View>
					<View style={[{ height: height * 0.05 }, styles.end]}>
						<View style={[styles.row]}>
							<PaperText variant='labelSmall' style={{ marginRight: 2 }}>
								Terms And Conditions.
							</PaperText>
							<PaperText variant='labelSmall' style={{ marginLeft: 2 }}>
								Privacy Policy
							</PaperText>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default LoginComponent;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
	},

	imageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	form: {
		marginTop: 'auto',
		justifyContent: 'center',
	},

	column: {
		flexDirection: 'column',
	},

	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	rowItem: {
		height: 30,
		justifyContent: 'center',
		gap: 10,
	},

	item: {
		paddingLeft: 15,
		paddingRight: 15,
	},

	bottomSpace: {
		marginTop: 25,
	},

	textInput: {
		backgroundColor: '#FFF',
	},

	image: {
		width: '70%',
		height: '100%',
		marginTop: 20,
		resizeMode: 'cover',
	},

	button: {
		marginLeft: 15,
		marginRight: 15,
		borderRadius: 5,
		marginBottom: 10,
	},

	whiteText: {
		color: '#FFFFFF',
	},

	blackText: {
		color: '#000000',
	},

	blackButton: {
		backgroundColor: '#000000',
	},

	end: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	bottomItem: {
		alignSelf: 'flex-end',
	},

	spacer: {
		justifyContent: 'space-between',
	},

	hidden: {
		opacity: 0.1,
	},
});
