import React , {Component, useState} from 'react';
import {  StyleSheet,
          Text, 
          View,
          Button,
          SafeAreaView,
          TouchableOpacity,
          Dimensions,
          Image,  } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function register2(props) {
  const [button1Color ,setButton1Color] = useState('#5d81f6')
  const [button2Color ,setButton2Color] = useState('#f453ff')
  const [background1Color ,setBackground1Color] = useState('white')
  const [background2Color ,setBackground2Color] = useState('white')
  const [opacity1,setOpacity1] = useState(0.5)
  const [opacity2,setOpacity2] = useState(0.5)

  const chooseMale=()=>{
    setButton1Color('white')
    setButton2Color('#f453ff')
    setBackground1Color('#0303b4')
    setBackground2Color('white')
    setOpacity1(1)
    setOpacity2(0.5)
  }

  const chooseFemale=()=>{
    setButton1Color('#5d81f6')
    setButton2Color('white')
    setBackground1Color('white')
    setBackground2Color('#f453ff')
    setOpacity1(0.5)
    setOpacity2(1)
  }
  const styles = StyleSheet.create({
    header:{
      flex:1,
      backgroundColor:'#fff',
      flexDirection:'row',
      alignItems:'center',
    },
    headerTitle:{
      fontSize:25,
      fontWeight:'bold',
      color:'black',
      marginLeft: (Dimensions.get('window').width - 240)/2,
    },
    container: {
      flex: 12,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    textinput:{
      height:40,
      width:300,
      borderBottomWidth:1,  
      borderBottomColor:'silver',
    },
    blank:{
      height:10,
    },
    genderPicture1:{
      width:(Dimensions.get('window').width - 150)/2,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      margin:25,
    },
    genderPicture2:{
      width:(Dimensions.get('window').width - 150)/2,
      height:50,
      justifyContent:'center',
      alignItems:'center',
    },
    nextButton:{
      width:300,
      height:40,
      backgroundColor:'#ffb725',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50,
    },
    container1Style: {
      flexDirection:'row',
      borderWidth:1,
      borderRadius:20,
      backgroundColor: background1Color,
      borderColor: button1Color,
      width:(Dimensions.get('window').width - 150)/2,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      marginRight:25,
    },
    container2Style: {
      flexDirection:'row',
      borderWidth:1,
      borderRadius:20,
      backgroundColor: background2Color,
      borderColor: button2Color,
      width:(Dimensions.get('window').width - 150)/2,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      marginLeft:25,
    },
    text1Style:{
      fontWeight:'bold',
      fontSize:30,
      color:button1Color,
    },
    text2Style:{
      fontWeight:'bold',
      fontSize:30,
      color:button2Color,
    },
    opacity1Style:{
      opacity:opacity1,
    },
    opacity2Style:{
      opacity:opacity2,
    },
  });
 

    
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.header}>
          <View style={{justifyContent:'flex-start',marginLeft:10}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                  <AntDesign name="left" color={'black'} size={30} />
              </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center'}}>
              <Text style={styles.headerTitle}>填寫基本資料</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={{margin:30,fontSize:25}}>你是男性還女性?</Text>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',}}>
            <TouchableOpacity style={styles.container1Style} onPress={chooseMale}>
              <Text style={styles.text1Style}>男性</Text>
              <Foundation name="male-symbol" color={button1Color} size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container2Style} onPress={chooseFemale}>
              <Text style={styles.text2Style}>女性</Text>
              <Foundation name="female-symbol" color={button2Color} size={30} />
            </TouchableOpacity>
          </View>
          <View style={{height:50}}></View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',}}>
            <View style={styles.genderPicture1}>
              <Image style={styles.opacity1Style} source={require('../assets/img/male.png')}></Image>
            </View>
            <View style={styles.genderPicture1}>
              <Image style={styles.opacity2Style} source={require('../assets/img/female.png')}></Image>
            </View>
          </View>
          <TouchableOpacity onPress={()=>{props.navigation.push('register3')}} activeOpacity = {0.8} style={styles.nextButton}>
            <Text style={{color:'white',fontSize: 20,}}>下一步</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
}


 /*
  constructor(props) {
    super(props);
    this.state = {
      button1Color:'#5d81f6',
      button2Color:'#f453ff',
      background1Color: "white",
      background2Color: "white",
      opacity1: 0.5,
      opacity2: 0.5,
    };
  }
  
    
  chooseMale = () =>{
    this.setState({
      background1Color: "#5d81f6",
      background2Color: "white",
      button1Color:'white',
      button2Color:'#f453ff',
      opacity1: 1,
      opacity2: 0.5,
    });
  }

  chooseFemale = () =>{
    this.setState({
      background1Color: "white",
      background2Color: "#f453ff",
      button1Color:'#5d81f6',
      button2Color:'white',
      opacity1: 0.5,
      opacity2: 1,
    });
  }
  
    const styles = {
      container1Style: {
        flexDirection:'row',
        borderWidth:1,
        borderRadius:20,
        backgroundColor: this.state.background1Color,
        borderColor: this.state.button1Color,
        width:(Dimensions.get('window').width - 150)/2,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginRight:25,
      },
      container2Style: {
        flexDirection:'row',
        borderWidth:1,
        borderRadius:20,
        backgroundColor: this.state.background2Color,
        borderColor: this.state.button2Color,
        width:(Dimensions.get('window').width - 150)/2,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:25,
      },
      text1Style:{
        fontWeight:'bold',
        fontSize:30,
        color:this.state.button1Color,
      },
      text2Style:{
        fontWeight:'bold',
        fontSize:30,
        color:this.state.button2Color,
      },
      opacity1Style:{
        opacity:this.state.opacity1,
      },
      opacity2Style:{
        opacity:this.state.opacity2,
      },
    }
    const { container1Style } = styles;
    const { container2Style } = styles;
    const { text1Style } = styles;
    const { text2Style } = styles;
    const { opacity1Style } = styles;
    const { opacity2Style } = styles;
    */