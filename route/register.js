import React , {Component} from 'react';
import {  StyleSheet,
          Text, 
          View,
          Button,
          SafeAreaView,
          TextInput,
          TouchableOpacity,
          Dimensions,
          ImageBackground,} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function register(props) {

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.header}>
          <View style={{justifyContent:'flex-start',marginLeft:10}}>
              <TouchableOpacity onPress={()=>{props.navigation.pop()}}>
                  <AntDesign name="left" color={'black'} size={30} />
              </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center'}}>
              <Text style={styles.headerTitle}>填寫基本資料</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={{marginTop:20}}>
          <TouchableOpacity>
            <View style={{alignItems: 'center',}}>
              <ImageBackground imageStyle={{borderRadius:70,}} style={styles.userPicture} source={require('../assets/img/person.png')}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Ionicons style={{opacity:0.8,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#fff',borderRadius:10}} name="camera" color={'#fff'} size={30} />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <View style={styles.action}>
              <FontAwesome style={{marginLeft:30,marginRight:20}} name="user" color={'#FF6347'} size={30} />
              <TextInput style={{fontSize:20}}
                placeholder="姓名" 
                placeholderTextColor='#666666'
                autoCorrect={false}
              ></TextInput>
            </View>
            <View style={styles.action}>
              <MaterialIcons style={{marginLeft:30,marginRight:10}} name="email" color={'#FF6347'} size={30} />
              <TextInput style={{fontSize:20}}
                placeholder="電子郵箱" 
                keyboardType="email-address"
                placeholderTextColor='#666666'
                autoCorrect={false}
              ></TextInput>
            </View>
            <View style={styles.action}>
              <Entypo style={{marginLeft:30,marginRight:10}} name="lock" color={'#FF6347'} size={30} />
              <TextInput style={{fontSize:20}}
                placeholder="密碼" 
                secureTextEntry={true}
                placeholderTextColor='#666666'
                autoCorrect={false}
              ></TextInput>
            </View>
            <View style={styles.action}>
              <Entypo style={{marginLeft:30,marginRight:10}} name="lock" color={'#FF6347'} size={30} />
              <TextInput style={{fontSize:20}}
                placeholder="確認密碼" 
                secureTextEntry={true}
                placeholderTextColor='#666666'
                autoCorrect={false}
              ></TextInput>
            </View>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{props.navigation.push('register2')}} activeOpacity = {0.8} style={styles.nextButton}>
              <Text style={{color:'white',fontSize: 20,}}>下一步</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 11,
    backgroundColor: '#fff',
  },
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
  userPicture:{
    width:140,
    height:140,
    margin:20,
    marginTop:10,
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
  action:{
    flexDirection:'row',
    marginTop:25,
    marginBottom:10,
    borderBottomWidth:1,
    borderColor:'#f2f2f2'
  }
});