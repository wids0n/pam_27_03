import React, { PropsWithChildren } from "react";
import { Text, Touchable, TouchableOpacity } from "react-native";
interface Props {
    title: string;
}

export default function CustomButton({title}: Props) {
    return (
        <TouchableOpacity>
            <Text>{title}</Text>
            </TouchableOpacity>
    );
}