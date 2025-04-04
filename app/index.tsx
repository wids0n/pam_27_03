import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
    const [cont, setcount] = useState(0);

    return (                                    
        <View>
            <Text>bem-vindo ao meu app!</Text>
            <Text>Contador:{cont}</Text>
            <Button title="diminuir" onPress={() => {setcount(cont - 1)}}/>
                <Button title="aumentar" onPress={() => {setcount(cont + 1)}}/>
                <Button title="reiniciar" onPress={() => {setcount(0)}}/>
                    <CustomButton title = "Name"/>
        </View>
    );
}