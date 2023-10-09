
// import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
// import Card from './components/Card';

// const Homescreen = ({ navigation }) => {
//   const [Data, setData] = useState([]);
//   const [Category, setCategory] = useState([
//     {
//       id: 1,
//       name: 'Top Headlines',
//       category: 'general',
//     },
//     {
//       id: 5,
//       name: 'Sports',
//       category: 'sports',
//     },
//     {
//       id: 2,
//       name: 'Business',
//       category: 'business',
//     },
//     {
//       id: 3,
//       name: 'Entertainment',
//       category: 'entertainment',
//     },
//     {
//       id: 4,
//       name: 'Health',
//       category: 'health',
//     },
//     {
//       id: 6,
//       name: 'Science',
//       category: 'science',
//     },
//     {
//       id: 7,
//       name: 'Technology',
//       category: 'technology',
//     },
//   ]);


//   const getData = async () => {
//     try {
//       const response = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=in&apiKey=0d14a3366538438196e93f019274b02a`
//       );

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setData(data.articles);
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <View style={{ display:'flex' }}>
//       <Header navigation={navigation} />
      
//     <View>
//     <FlatList data={Category}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       renderItem={(item, index)=>{
//         return(
//           <TouchableOpacity>
//             <Text style={{color:'black'}}>
//               {item.name}
//             </Text>
//           </TouchableOpacity>
//         )
//       }}
//       />
      
       
//     </View>


//       <View>
//         <FlatList
//           data={Data}
//           renderItem={({ item, index }) => {
//             return <Card item={item} />;
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Homescreen;

// const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from  './components/Card';

const HomeScreen = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [Select, setSelect] = useState(0);
  const [Laoding, setLaoding] = useState(false);
  const [Category, setCategory] = useState([
    {
      id: 1,
      name: 'Headlines',
      category: 'general',
    },
    {
      id: 5,
      name: 'Sports',
      category: 'sports',
    },
    {
      id: 2,
      name: 'Business',
      category: 'business',
    },
    {
      id: 3,
      name: 'Entertainment',
      category: 'entertainment',
    },
    {
      id: 4,
      name: 'Health',
      category: 'health',
    },
    {
      id: 6,
      name: 'Science',
      category: 'science',
    },
    {
      id: 7,
      name: 'Technology',
      category: 'technology',
    },
  ]);

  const getData = async () => {
    setLaoding(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0d14a3366538438196e93f019274b02a&category=${Category[Select].category}`
    );

    const data = await response.json();
    // console.log(data);
    setData(data.articles);
    setLaoding(false);
  };

  const getData2 = async (category) => {
    setLaoding(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0d14a3366538438196e93f019274b02a&category=${category}`
    );

    const data = await response.json();
    setData(data.articles);
    setLaoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {Laoding ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color={'#0C2D48'} size={35} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Header navigation={navigation} />

          <View style={{ paddingHorizontal: 10, paddingVertical: 2 }}>
            <FlatList
              data={Category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 2,
                      marginRight: 3,
                      borderRadius: 4,
                      backgroundColor: index === Select ? '#0C2D48' : '#e0e0e0',
                    }}
                    onPress={() => {
                      setSelect(index);
                      getData2(Category[index].category);
                    }} 
                  >
                    <Text
                      style={{fontSize:17,
                         
                        color: index === Select ? 'white' : '#666',
                        fontFamily: 'Regular',
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={{ marginBottom: 16 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Data}
              renderItem={({ item, index }) => {
                return <Card item={item} navigation={navigation} index={index} />;
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

