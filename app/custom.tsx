import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {

  
    const [mensagem, setNome] = useState(men);

    return (         
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>   
    <Text>bem-vindo ao meu app!{men}</Text>

       <Button title="exibir" onPress={() => {setNome}}/>
     <TextInput placeholder="Digite algo" onChangeText={setNome}/>
     <CustomButton title="Botão vermelho" onPress={() => (setNome('widson'+ mensagem))}/>

        <Form title ="mensagem" />
             


     </View>      
    )
    }