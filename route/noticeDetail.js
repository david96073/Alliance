import React,{ useState , useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView,Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList, } from 'react-native';


export default function noticeDetail(props) {

    const noticeDetail = props.route.params.noticeDetail || '未收到值'

    return (
        <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={()=>{props.navigation.pop()}}>
              <AntDesign name="left" color={'black'} size={30} />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.headerTitle}>通知內容</Text>
          </View> 
        </View>
        <View style={styles.container}>
            <Text>{noticeDetail.data}</Text>
            <Text>{noticeDetail.note}</Text>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  MainView:{
    height:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:8,
  },
  header:{
    flex:1,
    backgroundColor:'#8fcbbc',
    flexDirection:'row',
    alignItems:'center',
  },
  headerTitle:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    marginLeft: (Dimensions.get('window').width - 180)/2,
  },
  seperator:{
      height:1,
      backgroundColor:'#dddddd'
  }
});