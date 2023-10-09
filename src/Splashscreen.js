import { Image, StyleSheet, Text, View } from 'react-native'
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
      <View >
      <Animatable.Image 
      animation='zoomInDown'
      duration={3000}
      style={styles.images}
      source={{uri:'https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png'}} />
      
      </View>
      
      <Animatable.Text 
       animation='zoomInUp'
       duration={3000}
      style={styles.fonts}>News-App</Animatable.Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    main:{flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'

    },
    images:{
      height:140,
      width:130
    },
    fonts:{

        fontSize:34,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'black',
        marginTop:30
        

    }
})