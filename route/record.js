import React from 'react';
import { SafeAreaView,Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,FlatList, } from 'react-native';
             


export default function notice(props) {

  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#8fcbbc',}}>
        <View style={styles.container}>
            <Text>12345</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
  },
});