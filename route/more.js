import React,{Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image, Dimensions,ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function more(props) {
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <ScrollView style={{flex: 1,backgroundColor: '#fff',}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image style={styles.userPicture} source={require('../assets/img/userPicture.jpg')}></Image>
            <View style={styles.user}>
              <Text style={{fontSize:25,fontWeight:'bold'}}>辛睿恩</Text>
              <Text style={{fontSize:20,color:'#B8B7B7'}}>23歲</Text>
              <Text style={{fontSize:18,color:'#B8B7B7'}}>女性</Text>
              <Text style={{fontSize:18,color:'#B8B7B7'}}>168cm/50kg</Text>
              <Text style={{fontSize:18,color:'#B8B7B7'}}>慢性病:無</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.optionBox} onPress={()=>{props.navigation.push('profile')}}>
            <View style={{flexDirection:'row',marginLeft:60,}}>
              <AntDesign name="solution1" color={'#FF6347'} size={30} />
              <Text style={styles.optionText}>修改資料</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox} onPress={()=>{props.navigation.push('healthPassbook')}}>
            <View style={{flexDirection:'row',marginLeft:60,}}>
              <AntDesign name="paperclip" color={'#FF6347'} size={30} />
              <Text style={styles.optionText}>健康存摺</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox} onPress={()=>{props.navigation.push('pdfReport')}}>
            <View style={{flexDirection:'row',marginLeft:60,}}>
              <AntDesign name="pdffile1" color={'#FF6347'} size={30} />
              <Text style={styles.optionText}>PDF報告</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox} onPress={()=>{props.navigation.push('contactus')}}>
            <View style={{flexDirection:'row',marginLeft:60,}}>
              <AntDesign name="message1" color={'#FF6347'} size={30} />
              <Text style={styles.optionText}>聯絡我們</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox} onPress={()=>{props.navigation.push('login')}}>
            <View style={{flexDirection:'row',marginLeft:60,}}>
              <AntDesign name="logout" color={'#FF6347'} size={30} />
              <Text style={styles.optionText}>登出</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
   );
  }

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPicture:{
    width:(Dimensions.get('window').width - 120)/2,
    height:(Dimensions.get('window').width - 120)/2,
    borderRadius:(Dimensions.get('window').width - 60)/4,
    marginBottom:10,
    marginTop:60,
  },
  user:{
    width:(Dimensions.get('window').width - 60)/2,
    height:(Dimensions.get('window').width - 120)/2,
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:60,
    marginLeft:30,
  },
  optionBox:{
    justifyContent:'center',
    borderRadius:10,
    width:Dimensions.get('window').width,
    height:80,
  },
  optionText:{
    fontSize:30,
    fontWeight:'bold',
    marginLeft:20,
  },
});