import React , { Component } from "react";
import {StyleSheet , View ,Text , Image , TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import chartRoute from './chart'
import MoreRoute from './more'
import HomeRoute from './home'
import noticeRoute from './notice'

function MyTabs() {
  return (
    <Tab.Navigator 
     tabBarOptions={{
       showLabel: false,
       style:{
         position:'absolute',
         bottom:25,
         left:20,
         right:20,
         elevation:0,
         backgroundColor:'#fff',
         borderRadius:15,
         height:90,
         ...styles.shadow
       }
     }}>
      <Tab.Screen name="Home" component={HomeRoute} 
        options={{
          tabBarIcon: (focused) => (
            <View style={{alignItems:'center',justifyContent:'center',top:10}}>
              <Image
              source={require('../assets/img/homeIcon.png')}
              resizeMode='contain'
              style={{
                width:30,
                height:30,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94',}}>
                首頁
              </Text>
            </View>
          ),
        }}/>
      <Tab.Screen name="chart" component={chartRoute} 
        options={{
          tabBarIcon: (focused) => (
            <View style={{alignItems:'center',justifyContent:'center',top:10}}>
              <Image
              source={require('../assets/img/chartIcon.png')}
              resizeMode='contain'
              style={{
                width:30,
                height:30,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94',}}>
                分析
              </Text>
            </View>
          ),
        }} />
      <Tab.Screen name="notice" component={noticeRoute}  
        options={{
          tabBarIcon: (focused) => (
            <View style={{alignItems:'center',justifyContent:'center',top:10}}>
              <Image
              source={require('../assets/img/noticeIcon.png')}
              resizeMode='contain'
              style={{
                width:30,
                height:30,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94',}}>
                通知
              </Text>
            </View>
          ),
        }} />
      <Tab.Screen name="more" component={MoreRoute}  
        options={{
          tabBarIcon: (focused) => (
            <View style={{alignItems:'center',justifyContent:'center',top:10}}>
              <Image
              source={require('../assets/img/moreIcon.png')}
              resizeMode='contain'
              style={{
                width:30,
                height:30,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94',}}>
                更多
              </Text>
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
}




export default class main extends Component{
  render(){
    return(  
        <MyTabs />
    )
  }
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation:5,
  }
});