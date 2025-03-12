import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from '../axios/axios'

export default function Cadastro({ navigation }){
    const [user, setUser] = useState ({ 
        cpf: "",
        email:"",
        password: "",
        name:"",
        data_nascimento:""
    });

    async function handleCadastro(){
        await api.postUser(user).then(
            (response)=>{
                Alert.alert('OK',response.data.message)
            },(error)=>{
                Alert.alert('Erro',error.response.data.error)
            }
        )
    }
        
    return(
        <View style={styles.container}>
        <Text style={styles.title}> Faça Cadastro</Text>
        <TextInput 
        style={styles.input}
        placeholder="cpf"
        value={user.cpf}
        onChangeText={(value)=> {
            setUser({...user, cpf: value});
        }}
        />
        <TextInput
        style={styles.input}
        placeholder="email"
        value={user.email}
        onChangeText={(value)=> {
            setUser({...user, email: value});
        }}
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        value={user.password}
        onChangeText={(value)=> {
            setUser({...user, password: value});
        }}
        />
        <TextInput
        style={styles.input}
        placeholder="nome"
        value={user.name}
        onChangeText={(value)=> {
            setUser({...user, name: value});
        }}
        />
        <TextInput
        style={styles.input}
        placeholder="data de nascimento"
        value={user.data_nascimento}
        onChangeText={(value)=> {
            setUser({...user, data_nascimento: value});
        }}
        />
        <TouchableOpacity onPress={handleCadastro} style={styles.button}>
            <Text>cadastrar</Text>
        </TouchableOpacity>
        <Button title="Voltar para login" onPress={()=> navigation.navigate("Login")}/>
        </View>
    );
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        title:{
            fontSize:28,
            fontWeight:'bold'
    },
    input:{
        width: '100%',
        height:40,
        borderBottomWidth:1,
        marginBottom:20,
        paddingHorizontal:10
    },
    button:{
        backgroundColor: 'red',
        padding:10,
        borderRadius:5
    }
});


    
