import React,{Component} from 'react';
import { SafeAreaView,Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';




export default class home extends Component{
  render(){
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems:'center'}}>
          <View style={styles.container}>      
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate('bloodSugarRecord')}}>
              <Image source={require('../assets/img/bloodSugar.png')} style={{height:100,width:100,...styles.shadow}}></Image>
              <Text style={styles.boxText}>血糖紀錄</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate('weightRecord')}}>
              <Image source={require('../assets/img/weight.png')} style={{height:100,width:100,...styles.shadow}}></Image>
              <Text style={styles.boxText}>體重紀錄</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate('bloodPressureRecord')}}>
              <Image source={require('../assets/img/bloodPressure.png')} style={{height:100,width:100,...styles.shadow}}></Image>
              <Text style={styles.boxText}>血壓紀錄</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate('bodyfatRecord')}}>
              <Image source={require('../assets/img/bodyFat.png')} style={{height:100,width:100,...styles.shadow}}></Image>
              <Text style={styles.boxText}>體脂紀錄</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fcbbc',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
    marginTop:150,
  },
  box:{
    height:(Dimensions.get('window').width - 60)/2,
    width:(Dimensions.get('window').width - 60)/2,
    borderRadius:20,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
  },
  boxText:{
    color:'black',
    fontSize:30,
    fontWeight:'bold',
    marginTop:10,
  },
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
  }
});