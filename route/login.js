import React , {Component, useState} from 'react';
import {SafeAreaView, 
        StyleSheet, 
        Text, 
        View, 
        Image, 
        TouchableOpacity,
        TextInput,
        KeyboardAvoidingView,} from 'react-native';

export default function login(props) {

  const [validCode,setValidCode] = useState('')
  const [checkText,setcheckText] = useState('')
  const checkpassword=()=>{
    // if (validCode === '123456'){
      return props.navigation.push('main')
    // }else{
    //   return setcheckText('密碼錯誤'),
    //     setValidCode('')
    // }
  }

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding"style={styles.container}>
      <Image source={require('../assets/img/logo.jpg')}></Image>  
      <View style={{height:30}}></View>
      <TextInput style={styles.textinput} placeholder="請輸入帳號" keyboardType="email-address"></TextInput>
      <View style={styles.blank}></View>
      <TextInput style={styles.textinput} onChangeText={(password) => setValidCode(password)} value={validCode} placeholder="請輸入密碼" secureTextEntry={true} ></TextInput>
      <Text style={{marginTop:10,fontSize:15,color:'red'}}>{checkText}</Text>
      <View style={{height:20}}></View>
      <TouchableOpacity activeOpacity = {0.8} style={styles.button1} onPress={()=> checkpassword()}>
        <Text style={styles.buttonText}>登入</Text>
      </TouchableOpacity>  
      <View style={styles.blank}></View>
      <TouchableOpacity activeOpacity = {0.8} style={styles.button1} onPress={()=>props.navigation.push('register')}>
        <Text style={styles.buttonText}>註冊</Text>
      </TouchableOpacity>
      <View style={styles.blank}></View>
      <TouchableOpacity activeOpacity = {0.8} style={styles.button2} onPress={() =>console.log('')}>
        <Text style={styles.buttonText}>連結Google</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blank:{
    height:15,
  },
  textinput:{
    height:40,
    width:300,
    borderBottomWidth:1,
    borderBottomColor:'silver',
  },
  button1:{
    width:300,
    height:40,
    backgroundColor:'#ffb725',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2:{
    width:200,
    height:40,
    backgroundColor:'#409FFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color:'white',
    fontSize: 20,
  },
});