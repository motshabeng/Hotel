import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { firebase } from '../config/firebase';
import { RatingStar } from 'rating-star';

function hotelSearch({ navigation }) {
  const img = require('../assets/Images/search.png');
  const img2 = require('../assets/Images/hotel1.jpg');
  const img3 = require('../assets/Images/hotel3.jpg');
  const img4 = require('../assets/Images/hotel4.jpg');
  const img5 = require('../assets/Images/hotel5.jpg');
  const img6 = require('../assets/Images/star.png');
  const [rating, setRating] = React.useState(30);

  const onRatingChange = (score) => {
    setRating(score);
  };

  const [hotels, setHotels] = useState([]);

  const getHotels = () => {
    firebase
      .firestore()
      .collection('hotels')

      .onSnapshot((snapshot) => {
        const dis = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(dis);

        setHotels(dis);
      });
  };

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <View style={styles.body1}>
      <View style={styles.body}>
        <Text style={styles.text}>hotel search</Text>

        <View>
          <TouchableOpacity>
            <TextInput placeholder="Your search..." style={styles.head} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={img}
              style={{ width: 17, height: 15, marginTop: -22, marginLeft: 235 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.hearder}>Recommended</Text>
        <View>
       
          <View></View>
        </View>
        <View style={{ marginTop: -23 }}>
          {hotels.map((hotel) => (
            <View>
              <Image
                source={hotel.image}
                style={{ width: 80, height: 100, marginTop: 50, marginLeft: 5 }}
              />
              <Text
                style={{
                  marginLeft: 105,
                  marginTop: -100,
                  fontWeight: 'bold',
                }}>
                {hotel.name}

                <Text style={{ marginLeft: 17 }}> {hotel.price}</Text>
              </Text>
              <Text style={{ marginLeft: 102, color: 'blue' }}>
                {' '}
                {hotel.place}
              </Text>

              <Text style={{ marginLeft: 105, marginTop: 2 }}>
                beach front with spa
              </Text>
              <Text
                style={{
                  marginLeft: 285,
                  marginTop: 2,
                  fontWeight: 'bold',
                }}></Text>
              <View style={{ flexDirection: 'row', marginLeft: 100 }}>
                <RatingStar
                  clickable
                  maxScore={100}
                  id="123"
                  rating={rating}
                  onRatingChange={onRatingChange}
                  size="13"
                  style={{ marginLeft: 60 }}
                />
                <Text style={{ marginLeft: -5, padding: 5 }}>Reviews</Text>

                <Text onPress={() => navigation.push('HotelRooms',hotel)}>
                  View{' '}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
    color: 'white',
  },
  body: {
    alignSelf: 'center',
    border: '1px solid black',
    borderBottomLeftRadius: '60px',
    borderBottomRightRadius: '60px',
    height: 200,
    width: 330,
    backgroundColor: 'blue',
  },
  head: {
    border: 'solid 1px ',
    width: 210,
    height: 36,
    marginTop: 65,
    backgroundColor: 'white',
    marginLeft: 72,
    borderRadius: 40,
    paddingLeft: 15,
  },
  body1: {
    height: '100%vh',
    width: '100%vh',
    backgroundColor: 'white',
  },
  hearder: {
    marginTop: 48,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
export default hotelSearch;
