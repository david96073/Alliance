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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function register3(props) {
  
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
          <View style={styles.action}>
          <MaterialCommunityIcons style={{marginLeft:30,marginRight:10}} name="human-male-height-variant" color={'#FF6347'} size={30} />
          <TextInput style={{fontSize:20}}
            placeholder='身高'
            placeholderTextColor='#666666'
            autoCorrect={false}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome5 style={{marginLeft:30,marginRight:10}} name="weight" color={'#FF6347'} size={30} />
          <TextInput style={{fontSize:20}}
            placeholder='體重'
            placeholderTextColor='#666666'
            autoCorrect={false}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome5 style={{marginLeft:30,marginRight:10}} name="id-card" color={'#FF6347'} size={30} />
          <TextInput style={{fontSize:20}}
            placeholder='年齡'
            placeholderTextColor='#666666'
            autoCorrect={false}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome5 style={{marginLeft:30,marginRight:10}} name="disease" color={'#FF6347'} size={30} />
          <TextInput style={{fontSize:20}}
            placeholder='慢性病'
            placeholderTextColor='#666666'
            autoCorrect={false}
          ></TextInput>
        </View>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{props.navigation.push('login')}} activeOpacity = {0.8} style={styles.nextButton}>
              <Text style={{color:'white',fontSize: 20,}}>完成</Text>
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