
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Card = ({ item, navigation }) => {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri: item.urlToImage
              ? item.urlToImage
              : 'data:image/png;base64,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',
          }}
          style={styles.newsImage}
        />
        <View style={styles.titlee}>
          {/* text title  */}
          <Text style={{ fontSize: 15, color: 'black' }}>{item.title} </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              marginHorizontal: 5,
              color: 'gray',
            }}>
            {/* {item.description} */}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <Animatable.Text
          style={{
            color: 'white',
            borderRadius: 10,
            padding: 5,
            backgroundColor: '#26ae60',
            // marginLeft: 13,
          }}>
          {item.publishedAt.toLocaleString('en-IN', { timeZone: 'IST' })}
        </Animatable.Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 5,
            borderRadius: 6,
            justifyContent: 'space-between',
          }}
          onPress={() =>
            navigation.navigate('NewsViewer', {
              url: item.url,
            })
          }>
          <Animatable.Text
            style={{ color: 'white', fontSize: 17 }}
            animation='bounceInLeft'
            duration={3000}>
            Read More➡️
          </Animatable.Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 14,
          marginLeft: 14,
          position: 'absolute',
          left: 0, // Align to the right
          margin:100
        }}>
        <Animatable.Text
          animation='bounceInLeft'
          duration={2000}
          style={{
            color: 'white',
            borderRadius: 10,
            padding: 5,
            backgroundColor: 'black',
            fontStyle: 'italic',
            marginBottom:100

          }}>
          {item.source.name}
        </Animatable.Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginVertical: 14,
  },
  newsImage: {
    height: 100,
    width: '40%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  titlee: {
    flex: 1, // Use flex to make the title take up the remaining space
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

