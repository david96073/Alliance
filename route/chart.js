import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function chart() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <View style={styles.container}>
        <TouchableOpacity style={{width:280,height:60,backgroundColor:'#707070',alignItems:'center',justifyContent:'center',borderRadius:40}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>  體重變化</Text>
            <AntDesign style={{marginTop:3}} name="down" color={'white'} size={30}></AntDesign>
          </View>
        </TouchableOpacity>
        <Image style={{margin:20}} source={require('../assets/img/chart.jpg')}></Image>
        <View style={{width:330,height:200,backgroundColor:'#707070',alignItems:'flex-start',justifyContent:'center',borderRadius:40,marginTop:20}}>
          <Text style={{fontSize:35,fontWeight:'bold',marginLeft:10,color:'white'}}>醫生建議:</Text>
          <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10,color:'white'}}>BMI最近穩定但還是過高,建議多運動，多吃蔬果喔</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});