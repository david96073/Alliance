import React,{useRef, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,Dimensions, TextInput, ImageBackground, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import { color } from 'react-native-reanimated';
import ModalDropdown from 'react-native-modal-dropdown';
export default function profile(props){
  let actionSheet = useRef();
  let action2Sheet = useRef();
  let genderOptionArray = [
    '男性','女性','cancel' 
  ];
  let pictureOptionArray = [
    '選擇手機圖庫照片','cancel'
  ];


  const showActionSheet = () =>{
    actionSheet.current.show();
  }
  const showPictureSheet = () =>{
    action2Sheet.current.show();
  }

  const [gender,setGender] = useState('女性')
  const [genderIcon,setGenderIcon] = useState('mars')
  const [UsermodalVisible,setUserModalvisible] = useState(false)
  const [HeightmodalVisible,setHeightModalvisible] = useState(false)
  const [WeightmodalVisible,setWeightModalvisible] = useState(false)
  const [username,setUsername] = useState('辛睿恩')
  const [height,setHeight] = useState('190')
  const [weight,setWeight] = useState('50')

  const chooseGender = (index) => {
    if (genderOptionArray[index] === '男性') {
      setGender('男性');
      setGenderIcon('venus')
    } else {
      setGender('女性');
      setGenderIcon('mars')
    }
  } 
  
  const changeUserModalVisible = () => {
    setUserModalvisible(true)
  }

  const chooseUserModalVisible = () => {
    setUserModalvisible({UsermodalVisible:false})
  }

  const changeHeightModalVisible = () => {
    setHeightModalvisible(true)
  }

  const chooseHeightModalVisible = () => {
    setHeightModalvisible({HeightmodalVisible:false})
  }

  const changeWeightModalVisible = () => {
    setWeightModalvisible(true)
  }

  const chooseWeightModalVisible = () => {
    setWeightModalvisible({WeightmodalVisible:false})
  }

  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <View style={styles.header}>
        <View style={{justifyContent:'flex-start',marginLeft:10}}>
            <TouchableOpacity onPress={()=>{props.navigation.pop()}}>
                <AntDesign name="left" color={'black'} size={30} />
            </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center'}}>
            <Text style={styles.headerTitle}>修改資料</Text>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={showPictureSheet}>
          <View style={{alignItems: 'center',}}>
            <ImageBackground imageStyle={{borderRadius:30,}} style={styles.userPicture} source={require('../assets/img/userPicture.jpg')}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Ionicons style={{opacity:0.8,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#fff',borderRadius:10}} name="camera" color={'#fff'} size={30} />
              </View>
            </ImageBackground>
          </View>
          <ActionSheet 
          ref={action2Sheet}
          title ={'選擇照片'}
          options ={pictureOptionArray}
          cancelButtonIndex ={1}
          destructiveButtonIndex ={0}
          onPress ={(index) =>{
            alert(index)
          }}
            
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={changeUserModalVisible}>
          <FontAwesome style={{marginLeft:30,marginRight:10}} name="user-o" color={'#FF6347'} size={30} />
          <Text style={{fontSize:20,color:'#666666',marginTop:5}}>{username}</Text>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={UsermodalVisible}>
              <View style={styles.modal}>
                <View style={styles.modalContainer}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#666666',marginTop:5,marginBottom:15}}>修改姓名</Text>
                  <View style={styles.modalTextInput}>
                    <TextInput style={{height:30}} onChangeText={(text)=>setUsername(text)} placeholder='輸入姓名' placeholderTextColor='gray'></TextInput>
                  </View>
                  <View style={styles.modalButton}>
                    <View style={{borderWidth:'3',borderColor:'#fff',borderRadius: 10,backgroundColor:'#fff'}}>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,width:80}} onPress={chooseUserModalVisible}>
                      <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'bold',color:'#8fcbbc'}}>取消</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{borderWidth:'3',borderColor:'#fff',borderRadius: 10,backgroundColor:'#fff'}}>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,width:80}} onPress={chooseUserModalVisible}>
                    <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'bold',color:'#8fcbbc'}}>完成</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
          </Modal>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={showActionSheet}>
          <FontAwesome style={{marginLeft:30,marginRight:10}} name={genderIcon} color={'#FF6347'} size={30} />
          <Text style={{fontSize:20,color:'#666666',marginTop:5}}>{gender}</Text>
          <ActionSheet 
          ref={actionSheet}
          title ={'選擇性別'}
          options ={genderOptionArray}
          cancelButtonIndex ={2}
          destructiveButtonIndex ={1}
          onPress ={(index) =>{
            chooseGender(index);
          }}
            
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={changeHeightModalVisible}>
          <MaterialCommunityIcons style={{marginLeft:30,marginRight:10}} name="human-male-height-variant" color={'#FF6347'} size={30} />
          <Text style={{fontSize:20,color:'#666666',marginTop:5}}>{height}cm</Text>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={HeightmodalVisible}>
              <View style={styles.modal}>
                <View style={styles.modalContainer}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#666666',marginTop:5,marginBottom:15}}>修改身高</Text>
                  <View style={styles.modalTextInput}>
                    <TextInput style={{height:30}} onChangeText={(text)=>setHeight(text)} keyboardType='numeric' placeholder='輸入身高' placeholderTextColor='gray'></TextInput>
                  </View>
                  <View style={styles.modalButton}>
                    <View style={{borderWidth:'3',borderColor:'#fff',borderRadius: 10,backgroundColor:'#fff'}}>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,width:80}} onPress={chooseHeightModalVisible}>
                      <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'bold',color:'#8fcbbc'}}>取消</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{borderWidth:'3',borderColor:'#fff',borderRadius: 10,backgroundColor:'#fff'}}>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,width:80}} onPress={chooseHeightModalVisible}>
                    <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'bold',color:'#8fcbbc'}}>完成</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
          </Modal>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={changeWeightModalVisible}>
          <FontAwesome5 style={{marginLeft:30,marginRight:10}} name="weight" color={'#FF6347'} size={30} />
          <Text style={{fontSize:20,color:'#666666',marginTop:5}}>{weight}kg</Text>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={WeightmodalVisible}>
              <View style={styles.modal}>
                <View style={styles.modalContainer}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#666666',marginTop:5,marginBottom:15}}>修改體重</Text>
                  <View style={styles.modalTextInput}>
                    <TextInput style={{height:30}} onChangeText={(text)=>setWeight(text)} keyboardType='numeric' placeholder='輸入體重' placeholderTextColor='gray'></TextInput>
                  </View>
                  <View style={styles.modalButton}>
                    <View style={{borderWidth:'3',borderColor:'#fff',borderRadius: 10,backgroundColor:'#fff'}}>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,width:80}} onPress={chooseWeightModalVisible}>
                      <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'bold',color:'#8fcbbc'}}>取消</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{borderWidth:'3',borderColor:'#fff',borderRadius: 10,backgroundColor:'#fff'}}>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,width:80}} onPress={chooseWeightModalVisible}>
                    <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'bold',color:'#8fcbbc'}}>完成</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
          </Modal>
        </TouchableOpacity>
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
            <ModalDropdown           
          textStyle={styles.dropdown_2_text} 
          dropdownStyle={styles.dropdown_2_dropdown} 
          options={['糖尿病','高血壓','愛滋病','延遲射精']}
          ><Text style={{fontSize:20,color:'#666666'}} >慢性病</Text>
          <TouchableOpacity style={styles.action}>
          </TouchableOpacity>
          </ModalDropdown>

        </View>

        <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
          <TouchableOpacity style={styles.button1} onPress={()=>{props.navigation.pop()}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>完成</Text>
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
  userPicture:{
    width:140,
    height:140,
    margin:20,
    marginTop:10,
  },
  action:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    borderBottomWidth:1,
    borderColor:'#f2f2f2'
  },
  button1:{
    width:Dimensions.get('window').width -80,
    height:40,
    backgroundColor:'#FF6347',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer:{
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#8fcbbc',
    padding: 20,
  },
  modalTextInput:{
    fontSize:20,
    width:Dimensions.get('window').width -120,
    borderWidth: 3,
    borderColor:'#ffffff',
    borderRadius: 10,
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modalButton:{
    width:Dimensions.get('window').width -80,
    justifyContent: 'space-around',
    marginTop:20,
    borderTopWidth: 1,
    borderTopColor:'#777',
    alignItems: 'center',
    flexDirection: 'row',
    padding:10,
  },
  dropdown_2_dropdown: {
    width: 150,
    height: -150,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 0,
  },
 
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

});