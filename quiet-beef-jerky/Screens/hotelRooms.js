import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { firebase } from '../config/firebase';

import { Card } from 'react-native-paper';

function hotelRooms({ navigation, route }) {
  const hotel = route.params;
  const img = require('../assets/Images/hotel.jpg');
  const img1 = require('../assets/Images/wi-fi.png');
  const img2 = require('../assets/Images/car.png');
  const img3 = require('../assets/Images/tv1.png');
  const img4 = require('../assets/Images/spa.png');
  const img5 = require('../assets/Images/left.png');
  const img6 = require('../assets/Images/menu.png');

  useEffect(() => {
    console.log(route.params);
  });

  return (
    <View style={styles.body}>
      <View>
        <Image
          source={{ uri: hotel.image }}
          style={{
            width: 310,
            height: 305,
            justifyContent: 'center',
            marginTop: 2,
            borderWidth: 1,
            borderRadius: 40,
            border:'none',
          }}
        />
        
         

       
        
      </View>
      <Text style={styles.text}></Text>
      <Text style={{ fontWeight: 'bold',  marginTop: -20 }}>
        {route.params.name}
      </Text>

      <View style={styles.container}>
        <Text style={styles.text2}>Discriptions</Text>
        
       <Text style={{fontWeight:'relative',fontSize:12,color:'gray'}}> {route.params.Discriptions }</Text>
        <View style={styles.boders}>
          <View style={styles.border}>
            <View style={styles.head}></View>
            <View>
              {route.params.wifi ? (
                <Image source={img1} style={styles.image} />
              ) : (
                <View> </View>
              )}

              <View>
                <Text style={{marginTop:19}}>prices from 1200</Text>
               
              </View>
            </View>
          </View>
       
          <View style={styles.border}>
             <Text>Wifi</Text>
            <View>
              <Image source={img2} style={styles.image} />
            </View>
            <Text style={styles.sad}>Parking</Text>
          </View>
          <View style={styles.border}>
            <View>
              <Image source={img3} style={styles.image} />
            </View>
            <Text style={styles.crying}>Tv</Text>
          </View>
          <View style={styles.border}>
            <View>
              <Image source={img4} style={styles.image} />
            </View>
            <Text style={styles.crying}>Spa</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.paragraph}>
          <Text
            style={styles.Text4}
            onPress={() => {
              navigation.navigate('Bookings');
            }}>
            Book now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    paddingTop: 30,
    marginLeft: 60,
    
  },
  text2: {
    
 
    marginTop: 120,
  },
  border: {
    width: 100,
    height: 100,
    marginRight: -30,
    marginTop: 40,
    marginLeft: 12,
  },
  boders: {
    flexDirection: 'row',
    marginTop: -30,
  },

  body: {
    backgroundColor: 'white',
    height: '200vh',
    width: '100%vh',
  },
  image: {
    border: 'none',
    borderRadius: '5px',
    borderHeight: 25,
    marginLeft:-12,
    width: 25,
    height: 29,
  },
 

  paragraph: {
    marginTop: 57,
    fontSize: 15,
    marginLeft: 30,
    borderRadius: 40,
    borderWidth: 1,
    alignSelf: 'center',
   border:'none',
    width: 200,
    height: 38,
    backgroundColor: '#85C88A',
  },
  Text4: {
    marginLeft: 55,
    color: 'white',
    marginTop: 7,
  },
 
  container: {
    marginTop: -105,
  },
});

export default hotelRooms;
