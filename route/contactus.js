import React,{Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,Dimensions,Linking } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function contactUs(props) {
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <View style={styles.header}>
        <View style={{justifyContent:'flex-start',marginLeft:10}}>
            <TouchableOpacity onPress={()=>{props.navigation.pop()}}>
                <AntDesign name="left" color={'black'} size={30} />
            </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center'}}>
            <Text style={styles.headerTitle}>聯絡我們</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/img/map.jpg')}></Image>
        <View style={{flexDirection:'row',marginTop:10}}>
          <MaterialCommunityIcons name="home-circle" color={'#23ce56'} size={30} />
          <Text style={styles.mapsDetail}>亞蘭斯國際股份有限公司</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
          <Entypo name="location-pin" color={'red'} size={30}/>
          <Text style={styles.mapsDetail}>地址:239鶯歌區鶯桃路54號</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
          <AntDesign name="phone" color={'#0303b4'} size={30} />
          <Text style={styles.mapsDetail}>電話:+886286780720</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <AntDesign name="chrome" color={'orange'} size={30} />
          <Text style={styles.mapsDetail}>官網:</Text>
        </View>
        <Text style={styles.link} onPress={() => Linking.openURL('http://www.alliance-intl.com.tw/zh/')}>http://www.alliance-intl.com.tw/zh/</Text>
        
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
    marginLeft: (Dimensions.get('window').width - 180)/2,
  },
  mapsDetail:{
    fontSize:20,
    marginTop:5,
  },
  link:{
    fontSize:20,
    color:'#0303b4',
  },
});