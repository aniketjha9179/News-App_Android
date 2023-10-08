import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'react-native-svg'
import * as Animatable from 'react-native-animatable';


const Splashscreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
             navigation.navigate('Home')
        },2000)
    },[])
  return (
    <View style={styles.main}>
      <Animatable.Text 
       animation='zoomInDown'
       duration={2000}
      style={styles.fonts}>News-App</Animatable.Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    main:{flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF'

    },
    fonts:{
        fontSize:24,
        fontWeight:'bold',
        fontStyle:'italic'
    }
})