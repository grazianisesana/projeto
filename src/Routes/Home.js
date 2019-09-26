import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard, TextInput
} from 'react-native';

import { Header } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Login extends Component {

    state = {
        usuario: '',
        senha: ''
    };

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <TouchableWithoutFeedback onPressIn={Keyboard.dismiss}>
                <View style={styles.container}>
                    <KeyboardAvoidingView keyboardVerticalOffset={Header.HEIGHT} behavior="position">

                        <View style={styles.login}>


                            <Image style={styles.imglogo} source={require('../../imagens/logo.png')} />

                            <TextInput
                                blurOnSubmit={true}
                                style={styles.Texto}
                                onChangeText={(usuario) => this.setState({ usuario })}
                                value={this.state.usuario}
                                placeholder="E-mail"
                                keyboardType='default'
                                returnKeyType="next"

                            />

                            <TextInput
                                blurOnSubmit={true}
                                style={styles.Texto}
                                onChangeText={(senha) => this.setState({ senha })}
                                value={this.state.senha}
                                placeholder="Senha"
                                secureTextEntry={true}

                            />


                            {/* <TextInput style={styles.Texto}
                                label='Email'
                                value={this.state.text}
                                //  placeholder="E-mail"
                                keyboardType='email-address'
                                keyboardAppareance='dark'
                                onChangeText={text => this.setState({text})} />



                            <TextInput style={styles.Texto}
                                label='Senha'
                                value={this.state.text}
                                // placeholder="Senha"
                                secureTextEntry
                                // autoCorrect={true} 
                                onChangeText={text => this.setState({text})} />
 */}


                        </View>



                        <View style={styles.viewbtnlogin}>
                            <TouchableOpacity style={styles.btnlogin} onPress={() => this.props.navigation.navigate('Escolha')}>

                                <Text style={styles.btnlogintext}> <Icon name="home" size={30} color="#FFFFFF" />  Login</Text>

                            </TouchableOpacity>
                        </View>






                    </KeyboardAvoidingView>



                </View>

            </TouchableWithoutFeedback>

        );

    }

}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'#005EC7',
        // marginTop: 5,


    },


    btnlogin: {
        backgroundColor: '#005EC7',
        paddingVertical: 10,
        //  paddingHorizontal: 50,
        borderRadius: 5,


    },

    btnlogintext: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        //marginTop: 10,
        // fontWeight:'bold'

    },

    viewbtnlogin: {

        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        //  backgroundColor: '#FFFFFF',
        // marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 50,


    },


    toolbar: {
        backgroundColor: '#005EC7',
        justifyContent: 'space-between'

    },


    login: {
        marginTop: 30,
        paddingVertical: 5,
        paddingHorizontal: 50
    },

    Texto: {
        fontSize: 15,
        borderColor: 'blue',
        borderWidth: 0.2,
        marginTop: 5

    }
    ,

    buttonHeader: {
        marginLeft: 10
    },

    btmenu: {
        marginLeft: 10,
    },

    imglogo: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // resizeMode: 'stretch',
        height: '40%',
        width: '100%',
        marginBottom: 30,

    }



});

