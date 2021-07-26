import React,{useState,useRef} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,Dimensions, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function bloodPressureRecords(props) {
const [data ,setdata] = useState('0')  
const ref_inputText = useRef();
const recordSave = () =>{
  if (data != 0){
    return <View style={{justifyContent:'center',alignItems:'center',marginBottom:80,}}>
      <TouchableOpacity style={{backgroundColor:'#8fcbbc',width:80,height:40,borderRadius:15,alignItems:'center',justifyContent:'center'}}
      onPress={saveButton}>
        <Text style={{color:'white',fontSize:20}}>儲存</Text>
      </TouchableOpacity>
    </View>
  }
}
const saveButton = () =>{
  props.navigation.pop()
}
return (
    <SafeAreaView style={{flex:1}}>

      <View style={styles.header}>
        <View style={{justifyContent:'flex-start',marginLeft:10}}>
            <TouchableOpacity onPress={()=>{props.navigation.pop()}}>
                <AntDesign name="left" color={'white'} size={30} />
            </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center'}}>
            <Text style={styles.headerTitle}>血壓紀錄</Text>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.action}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:30,color:'#5d81f6'}}>型號</Text>
            <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
          </View>
          <View style={{marginRight:20,flexDirection:'row'}}>
            <FontAwesome5 style={{marginRight:10,marginTop:5,}} name='mobile-alt' color={'#5d81f6'} size={30} />
            <Text style={{fontSize:30,color:'black'}}></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:30,color:'#5d81f6'}}>port </Text>
            <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
          </View>
          <View style={{marginRight:20,flexDirection:'row'}}>
            {/* <FontAwesome5 style={{marginRight:10,marginTop:5,}} name='mobile-alt' color={'#5d81f6'} size={30} /> */}
            <Text style={{fontSize:30,color:'black'}}></Text>
          </View>
        </TouchableOpacity>
        <View style={{flex:2,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:70,fontWeight:'bold',color:'#626266'}}
          editable={true}
          keyboardType = "default">{data} mg/dl</Text>
          <View style={{display:'none'}}>
          <TextInput
          maxLength={3}
          ref = {ref_inputText}
          keyboardType ='numeric'
          returnKeyTyp='next'
          onChangeText ={(val) => setdata(val)}/></View>
          {recordSave()}
        </View>
        


        <View style={{flex:1,alignItems: 'center',justifyContent: 'center',flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity style={styles.InputButton}>
            <Image source={require('../assets/img/bluetooth.png')}></Image>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#0303b4'}}>藍芽</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.InputButton} onPress ={()=> ref_inputText.current.focus()}>
            <Image source={require('../assets/img/keyboard.png')}></Image>
            <Text style={{fontSize:30,fontWeight:'bold'}}>手寫</Text>
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
    backgroundColor:'#8fcbbc',
    flexDirection:'row',
    alignItems:'center',
  },
  headerTitle:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    marginLeft: (Dimensions.get('window').width - 200)/2,
  },
  ChooseButton1:{
    marginLeft:30,
    marginRight:30,
    width:Dimensions.get('window').width-90,
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:1,
  },
  ChooseButton2:{
    marginLeft:30,
    marginRight:30,
    width:Dimensions.get('window').width-90,
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:1,
    borderTopWidth:0,
  },
  TextLeft:{
    fontSize:25,
    marginLeft:20,
    color:'#0303b4',
    fontWeight:'bold',
  },
  TextRight:{
    fontSize:25,
    marginRight:20,
    color:'#0303b4',
    fontWeight:'bold',
  },
  InputButton:{
    width:(Dimensions.get('window').width-90)/2,
    height:(Dimensions.get('window').width-90)/2,
    borderRadius:(Dimensions.get('window').width-90)/4,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },
  action:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    borderBottomWidth:1,
    borderColor:'#f2f2f2',
    width:Dimensions.get('window').width,
    alignItems:'center',
    justifyContent:'space-between'
  },
  rightArrow:{
    height:30,
    width:30,
    tintColor:'lightgray',
  },
});