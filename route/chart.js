import React, { useState } from 'react';
import {  SafeAreaView, 
          StyleSheet, 
          Text, 
          TouchableOpacity, 
          View,
          Image,
          Modal,
          Dimensions} from 'react-native';
import {ModalPicker} from './components/ModalPicker'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LineChart} from "react-native-chart-kit";

export default function chart() {
  const [chooseOption, setchooseOption] = useState('30天')
  const [isModalVisible,setisModalVisible] = useState(false)
  
  const changeModalVisiblity = (bool) =>{
    setisModalVisible(bool)
  }

  const setOption = (option) =>{
    setchooseOption(option)
  }

  const data = {
    labels: ["2021/07/21", "2021/07/22", "2021/07/23", "2021/07/24", "2021/07/25"],
    datasets: [
      {
        data:[90,85,105,95,90],
        color: (opacity = 1) => `rgba(255, 255, 255)`,
        strokeWidth: 3,
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 5,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <View style={styles.container}>
        <TouchableOpacity 
            style={{marginTop:20,justifyContent:'center',alignItems:'center',
                    backgroundColor:'#8fcbbc',width:Dimensions.get('window').width-120,
                    height:80,borderRadius:10,marginBottom:50}} 
            onPress={()=> changeModalVisiblity(true)}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>{chooseOption}</Text>
            <AntDesign style={{marginTop:5}} name="down" color={'white'} size={30} />
          </View>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisiblity(false)}
        >
          <ModalPicker 
            changeModalVisiblity={changeModalVisiblity}
            setOption={setOption}>
          </ModalPicker>
        </Modal>

          <LineChart
            data = {data}
            width = {Dimensions.get("window").width}
            height = {220}
            chartConfig = {chartConfig}
          />

          <View style={{width:330,height:200,backgroundColor:'#8fcbbc',alignItems:'flex-start',justifyContent:'center',borderRadius:40,marginTop:100}}>
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
  },
});