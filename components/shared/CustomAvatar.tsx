import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Avatar } from 'react-native-paper';

export interface CustomizedAvatar {
	color: string;
	style: StyleProp<ViewStyle>;
	label: string;
	size: number;
}

const CustomAvatar: FC<{ avatar: CustomizedAvatar }> = ({
	avatar: { color, style, label, size },
}) => {
	return <Avatar.Text label={label} color={color} style={style} size={size} />;
};

export default CustomAvatar;
