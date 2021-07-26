import React,{ useState , useEffect} from 'react';
import { SafeAreaView,Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList, } from 'react-native';
             

var MOCKED_DATA=[
    {
        id:'0',
        note:'您的會員身分認證，已經審核通過!',
        data:'2021/7/20 16:42'
    },
    {
        id:'1',
        note:'記得記錄今天的體重喔',
        data:'2021/7/21 12:00'
    },
    {
        id:'2',
        note:'記得記錄今天的血糖喔',
        data:'2021/7/21 12:01'
    },
    {
        id:'3',
        note:'最近血糖不太穩定喔',
        data:'2021/7/21 15:00'
    },
    {
        id:'4',
        note:'醫生已給出最近體重建議',
        data:'2021/7/21 16:00'
    },
    {
        id:'5',
        note:'記得記錄今天的體重喔',
        data:'2021/7/22 12:00'
    },
    {
        id:'6',
        note:'記得記錄今天的血糖喔',
        data:'2021/7/22 12:01'
    },
    {
        id:'7',
        note:'溫馨提醒:最近BMI過高，記得少吃多運動喔',
        data:'2021/7/22 12:01'
    },
]

export default function notice(props) {
    

    const [dataSource,setDataSource] = useState([])

    useEffect(()=>{
        var book = MOCKED_DATA
        setDataSource(book)
    })

    const showNoticeDetail=(cases)=>{
        props.navigation.push('noticeDetail',{noticeDetail:cases})
    }

    const noticesData=(cases)=>{
        return(
            <TouchableOpacity onPress={()=>showNoticeDetail(cases)}>
                <View>
                    <View style={styles.MainView}>
                        {/* <Image></Image> */}
                        <View style={{flex:1}}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black',fontSize:15,marginTop:8}}>
                                {cases.note}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{marginTop:8,fontSize:12,marginBottom:8}}>
                                {cases.data}
                            </Text>
                        </View>
                        <Image source={require('../assets/img/rightarrow.png')} style={styles.rightArrow}></Image>
                    </View>
                    <View style={styles.seperator}></View>
                </View>
            </TouchableOpacity>
        )
    }

  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
      <View style =  {{flex:1,backgroundColor: '#8fcbbc', justifyContent: 'flex-start'}}>
          <Text style = {{fontSize: 36, marginLeft : 10,color:'white',fontWeight:'bold',marginTop:5}}>最新通知</Text>
      </View>
      <View style={styles.container}>
        <FlatList
            data={dataSource}
            renderItem={cases => noticesData(cases.item)}
            keyExtractor={cases => cases.id}
            style={{backgroundColor:'white'}}
        >
        </FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 13,
    backgroundColor: '#8fcbbc',
    justifyContent:'center',
    alignItems:'center',
  },
  head:{
    
  },
  MainView:{
    height:80,
    width:Dimensions.get('window').width ,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:8,
  },
  seperator:{
      height:1,
      backgroundColor:'#dddddd'
  },
  rightArrow:{
      height:40,
      width:20,
      tintColor:'lightgray',
  },
});