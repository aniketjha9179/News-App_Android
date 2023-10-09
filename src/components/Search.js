import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import Card from './Card';

const Search = ({ navigation }) => {
  const [SearchText, setSearchText] = useState('');
  const [Data, setData] = useState([]);
  const searchNews = async (text) => {
    setSearchText(text);
    if (text.length >3) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=0d14a3366538438196e93f019274b02a&q=${text}`
      );

      const data = await response.json();
      setData(data.articles);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#192A56', flexDirection: 'row', alignItems: 'center',  }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} size={28} />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter your query.."
          value={SearchText}
          style={{color:'white',fontStyle:'italic'}}
          placeholderTextColor={'white'}
          keyboardAppearance='dark'
          onChangeText={(text) => {
            searchNews(text);
          }} 
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={({ item, index }) => {
            return <Card item={item} navigation={navigation} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
