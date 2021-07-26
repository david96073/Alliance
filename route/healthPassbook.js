import React,{Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function healthPassbook(props) {
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <View style={styles.header}>
        <View style={{justifyContent:'flex-start',marginLeft:10}}>
            <TouchableOpacity onPress={()=>{props.navigation.pop()}}>
                <AntDesign name="left" color={'black'} size={30} />
            </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center'}}>
            <Text style={styles.headerTitle}>健康存摺</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.insidecontainer1}>
          <View style={{alignItems:'center'}}>
          <Text style={{fontSize:35,fontWeight:'bold',margin:20}}>歡迎匯入健康存摺</Text>
          </View>
          <Text style={{flexWrap:'wrap',fontSize:25,margin:20}}>登入健保署的健康存摺，可以下載近三年的就醫紀錄，點選匯入資料表示你同意利用你匯入資料提供更個人化的服務</Text>
        </View>
        <View style={styles.insidecontainer2}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>匯入資料</Text>
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
    marginLeft: (Dimensions.get('window').width - 180)/2,
  },
  insidecontainer1:{
    flex:4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insidecontainer2:{
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#8fcbbc',
    width:(Dimensions.get('window').width - 120),
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
  },
});