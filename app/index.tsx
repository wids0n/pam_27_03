import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const name = "widson"

    const [count, setcount] = useState(0);
    const [nome, setNome] = useState(name);

    return (                   
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text>bem-vindo ao meu app!{nome}</Text>
            <Text>Contador:{count}</Text>
                        
                <Button title="diminuir" onPress={() => {setcount(count - 1)}}/>
                <Button title="aumentar" onPress={() => {setcount(count + 1)}}/>
                <Button title="reiniciar" onPress={() => {setcount(0)}}/>

                    <TextInput placeholder="Digite algo" onChangeText={setNome}/>

               <CustomButton title="Botão vermelho" onPress={() => (setNome('widson'+ count))}/>
                
        </View>
    );
}