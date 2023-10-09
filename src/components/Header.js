import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import * as Animatable from 'react-native-animatable';


const Header = ({navigation}) => {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 14,
        // shadowOpacity: 1,
        backgroundColor: 'white',
      }}>
      <Animatable.Text style={{fontSize: 15, fontWeight: 'bold', color: 'white',backgroundColor:'black',padding:5,borderWidth:2,borderColor:'pink', borderRadius:5, }}
        animation='zoomInDown'
        duration={2000}
        iterationCount={1}
        
      >
        News-App
      </Animatable.Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
        <MagnifyingGlassIcon color="black" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
