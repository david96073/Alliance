import React from 'react';
import {    SafeAreaView, 
            StyleSheet, 
            TouchableOpacity, 
            View,
            Dimensions, 
            ScrollView,
            Text,} from 'react-native';

const OPTIONS = ['30天','60天','90天','半年',];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) =>{

    const onPressItem = (option) =>{
        props.changeModalVisiblity(false);
        props.setOption(option)
    }

    const option = OPTIONS.map((item,index) =>{
        return(
            <TouchableOpacity
                style={style2.option}
                key={index}
                onPress={() => onPressItem(item)}>
                <Text style={style2.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity 
            onPress={() => props.changeModalVisiblity(false)}
            style={style2.container}>
            <View style={style2.modal}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const style2 = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:150,
    },
    modal:{
        backgroundColor:'white',
        borderRadius:18,
        width:WIDTH -60,
        height:HEIGHT/3,
        borderWidth:1,
        borderColor:'#8fcbbc'
    },
    option:{
        alignItems:'flex-start',
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold',
    },
})

export {ModalPicker}