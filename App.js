import React , {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import {config} from './firebase_config';
*/
import chartRoute from './route/chart'
import moreRoute from './route/more'
import contactusRoute from './route/contactus'
import mainRoute from './route/main'
import HomeRoute from './route/home'
import loginRoute from './route/login'
import registerRoute from './route/register'
import register2Route from './route/register2'
import register3Route from './route/register3'
import profileRoute from './route/profile'
import pdfReportRoute from './route/pdfReport'
import healthPassbookRoute from './route/healthPassbook'
import bloodPressureRecordRoute from './route/bloodPressureRecord'
import bloodSugarRecordRoute from './route/bloodSugarRecord'
import weightRecordRoute from './route/weightRecord'
import noticeRoute from './route/notice'
import noticeDetailRoute from './route/noticeDetail'


//const db = firebase.firestore();
const Stack = createStackNavigator()

export default class App extends Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='login' component={loginRoute}></Stack.Screen>
        <Stack.Screen name='register' component={registerRoute}></Stack.Screen>
        <Stack.Screen name='register2' component={register2Route}></Stack.Screen>
        <Stack.Screen name='register3' component={register3Route}></Stack.Screen>
        <Stack.Screen name='main' component={mainRoute}></Stack.Screen>
        <Stack.Screen name='home' component={HomeRoute}></Stack.Screen>
        <Stack.Screen name='chart' component={chartRoute}></Stack.Screen>
        <Stack.Screen name='more' component={moreRoute}></Stack.Screen>
        <Stack.Screen name='contactus' component={contactusRoute}></Stack.Screen>
        <Stack.Screen name='profile' component={profileRoute}></Stack.Screen>
        <Stack.Screen name='pdfReport' component={pdfReportRoute}></Stack.Screen>
        <Stack.Screen name='healthPassbook' component={healthPassbookRoute}></Stack.Screen>
        <Stack.Screen name='bloodPressureRecord' component={bloodPressureRecordRoute}></Stack.Screen>
        <Stack.Screen name='bloodSugarRecord' component={bloodSugarRecordRoute}></Stack.Screen>
        <Stack.Screen name='weightRecord' component={weightRecordRoute}></Stack.Screen>
        <Stack.Screen name='notice' component={noticeRoute}></Stack.Screen>
        <Stack.Screen name='noticeDetail' component={noticeDetailRoute}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

