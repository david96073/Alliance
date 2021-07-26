import React,{useState , useRef} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ActionSheet from 'react-native-actionsheet';

export default function pdf(props) {
  let actionFormatSheet = useRef();
  let FormatOptionArray = [
    'PDF','EXCEL','cancel' 
  ];


  const showFormatSheet = () =>{
    actionFormatSheet.current.show();
  }

  const [format,setFormat] = useState(' PDF')
  const [formatIcon,setFormatIcon] = useState('file-pdf')
  

  const chooseFormat = (index) => {
    if (FormatOptionArray[index] === 'PDF') {
      setFormat(' PDF');
      setFormatIcon('file-pdf')
    } else if (FormatOptionArray[index] === 'EXCEL') {
      setFormat('EXCEL');
      setFormatIcon('file-excel')
    };
  };

  let actionDataSheet = useRef();
  let DataOptionArray = [
    '全部','血糖','血壓','體重','體脂','cancel' ,
  ];


  const showDataSheet = () =>{
    actionDataSheet.current.show();
  }

  const [Data,setData] = useState('全部')
  const [DataIcon,setDataIcon] = useState('file-alt')

  const chooseData = (index) => {
    if (DataOptionArray[index] === '全部') {
      setData('全部');
      setDataIcon('file-alt')
    } else if (DataOptionArray[index] === '血糖') {
      setData('血糖');
      setDataIcon('vial')
    }else if (DataOptionArray[index] === '血壓') {
      setData('血壓');
      setDataIcon('wave-square')
    }else if (DataOptionArray[index] === '體重') {
      setData('體重');
      setDataIcon('weight')
    }else if (DataOptionArray[index] === '體脂') {
      setData('體脂');
      setDataIcon('child')
    };
  };

  let actionTimeSheet = useRef();
  let TimeOptionArray = [
    '最近兩星期','最近一個月','最近兩個月','最近三個月','cancel' ,
  ];


  const showTimeSheet = () =>{
    actionTimeSheet.current.show();
  }

  const [Time,setTime] = useState('最近一個月')

  const chooseTime = (index) => {
    if (TimeOptionArray[index] === '最近兩星期') {
      setTime('最近兩星期');
    } else if (TimeOptionArray[index] === '最近一個月') {
      setTime('最近一個月');
    }else if (TimeOptionArray[index] === '最近兩個月') {
      setTime('最近兩個月');
    }else if (TimeOptionArray[index] === '最近三個月') {
      setTime('最近三個月');
    }
  };

  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <View style={styles.header}>
        <View style={{justifyContent:'flex-start',marginLeft:10}}>
            <TouchableOpacity onPress={()=>{props.navigation.pop()}}>
                <AntDesign name="left" color={'black'} size={30} />
            </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center'}}>
            <Text style={styles.headerTitle}>PDF報告</Text>
        </View>
      </View>
      <View style={styles.container} >
        <View style={{height:30}}></View>
        <TouchableOpacity style={styles.action} onPress={showFormatSheet}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:30,color:'#666666'}}>格式</Text>
            <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
          </View>
          <View style={{marginRight:20,flexDirection:'row'}}>
            <FontAwesome5 style={{marginRight:10}} name={formatIcon} color={'#FF6347'} size={30} />
            <Text style={{fontSize:30,color:'black'}}>{format}</Text>
          </View>
          <ActionSheet 
          ref={actionFormatSheet}
          title ={'資料格式'}
          options ={FormatOptionArray}
          cancelButtonIndex ={2}
          destructiveButtonIndex ={3}
          
          onPress ={(index) =>{
            chooseFormat(index);
          }}
            
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={showDataSheet}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:30,color:'#666666'}}>資料</Text>
            <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
          </View>
          <View style={{marginRight:20,flexDirection:'row'}}>
            <FontAwesome5 style={{marginRight:10}} name={DataIcon} color={'#FF6347'} size={30} />
            <Text style={{fontSize:30,color:'black'}}>{Data}</Text>
          </View>
          <ActionSheet 
          ref={actionDataSheet}
          title ={'選擇資料'}
          options ={DataOptionArray}
          cancelButtonIndex ={5}
          destructiveButtonIndex ={6}
          onPress ={(index) =>{
            chooseData(index);
          }}
            
        />
        </TouchableOpacity>
        <View style={{alignItems:'flex-start'}}>
          <Text style={{fontSize:20,marginTop:20,marginBottom:20,marginLeft:10,color:'#666666'}}>選擇時間</Text>
        </View>
        <TouchableOpacity style={styles.action} onPress={showTimeSheet}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:30,color:'#666666'}}>期間</Text>
            <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
          </View>
          <View style={{marginRight:20,flexDirection:'row'}}>
            <FontAwesome style={{marginRight:10}} name='calendar' color={'#FF6347'} size={30} />
            <Text style={{fontSize:20,color:'black',marginTop:10}}>{Time}</Text>
          </View>
          <ActionSheet 
          ref={actionTimeSheet}
          title ={'選擇期間長度'}
          options ={TimeOptionArray}
          cancelButtonIndex ={4}
          destructiveButtonIndex ={5}
          onPress ={(index) =>{
            chooseTime(index);
          }}
            
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:30,color:'#666666'}}>開始日期</Text>
            <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
          </View>
          <View style={{marginRight:20,flexDirection:'row'}}>
            <Text style={{fontSize:20,color:'black',marginTop:10}}>2021/06/18</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={{marginLeft:20,flexDirection:'row'}}>
            <Text style={{fontSize:30,color:'#666666'}}>結束日期</Text>
            <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
          </View>
          <View style={{marginRight:20,flexDirection:'row'}}>
            <Text style={{fontSize:20,color:'black',marginTop:10}}>2021/07/18</Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:60,flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity style={styles.button1}>
            <Text style={{fontSize:25,color:'#8fcbbc',fontWeight:'bold'}}>預覽</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>下載</Text>
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
  button1:{
    backgroundColor:'white',
    width:(Dimensions.get('window').width - 90)/2,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    borderWidth:1,
    borderColor:'#8fcbbc',
  },
  button2:{
    backgroundColor:'#8fcbbc',
    width:(Dimensions.get('window').width - 90)/2,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
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
});