import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Picker,
} from 'react-native';
// import all the components we are going to use
import {
  BookingCalendar
} from 'react-native';
//import DatePicker from the package we installed
import getDirections from 'react-native-google-maps-directions'
import { Calendar,  Agenda,Date } from 'react-native-calendars';
import {firebase} from '../config/firebase'
import { collection, getDocs } from "firebase/firestore"; 


function Bookings({ navigation }) {
  const [bookingCalendar,setBookindCalendar ] = useState('')

  const img = require('../assets/Images/calendar.png');
  const img2 = require('../assets/Images/menu.png');
  const img3 = require('../assets/Images/left.png');
  const img4 = require('../assets/Images/right.png');
  const img5 = require('../assets/Images/arrow.png');
  const img6 = require('../assets/Images/arrow.png');
  const [selectedValue, setSelectedValue] = useState('java');
    const handleGetDirections = () => {
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493
        }
      ]
    }
 
    getDirections(data)
  }  
  const LogIn = () => {
      var db = firebase.firestore();
        db.collection("Bookings").set({
          

      })
      .then(() => {
      }).catch((error) => {
        alert(error)})
            
  }
 
  return (
    <View style={styles.body1}>
      <View style={styles.body}>
        <TouchableOpacity>
          <Image
            source={img2}
            style={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              marginTop: 10,
              alignSelf: 'center',
              marginLeft: 280,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.hearder}>Bookings</Text>
        
        <Image
          source={img4}
          style={{ width: 20, height: 20, marginTop: -20, marginLeft: 280 }}
        />
        <Image
          source={img3}
          style={{ width: 20, height: 20, marginTop: -20, marginLeft: 5 }}
        />
      
        <SafeAreaView style={styles.container}>
          <View>
            <Calendar
              style={{ width: 260, marginTop: -27, marginLeft:30 }}
          onDayPress={(day) => {console.log('day pressed')}}
            />
          
          </View>
        </SafeAreaView>
        <View style={styles.head2}>
          <Text>Guests</Text>
        </View>
        <View style={styles.texter}>
          <View style={styles.container}>
            <View>
                <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="Adult" value="java" />
                <Picker.Item label="1" value="js" />
                <Picker.Item label="2" value="js2" />
                  <Picker.Item label="3" value="js3" />
              </Picker>
            </View>
            <View>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="Children" value="java" />
                <Picker.Item label="1" value="js" />
                <Picker.Item label="2" value="js4" />
                 <Picker.Item label="3" value="js5" />
              </Picker>
            </View>
          </View>
        </View>

        <Text
          style={{ marginTop: 30, alignSelf: 'center', fontWeight: 'bold' }}>
          Rooms
        </Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedValue}
            style={{
              marginTop: 30,
              height: 50,
              width: 250,
              alignSelf: 'center',
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="1 room with kitchen" value="2" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="2" />
          </Picker>
        </View>

        <View style={styles.button}>
                <TouchableOpacity
          style={styles.paragraph}
          onPress={handleGetDirections} title="Get Directions">
         <Text style={{alignSelf:'center',marginTop:17,fontSize:16,fontWeight:'bold',color:'white'}}> Directions</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignSelf: 'center',
    border: '1px solid black',
    borderBottomLeftRadius: '60px',
    borderBottomRightRadius: '60px',
    height: 200,
    width: 330,
    backgroundColor: 'blue',
    marginTop:40
  },
  body1: {
    backgroundColor: 'white',
    height: '100%vh',
    width: '100%vh',
  },
  hearder: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  
  head2: {
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingTop: 35,
    marginTop: -30,
  },
  texter: {
    flexDirection: 'row',
  },

  picker: {},
  button: {
    border: 1,
    borderWidth: 2,
    borderRadius: 60,
    width: 200,
    height: 50,
    marginTop: 24,
    marginLeft: 70,
    backgroundColor: 'blue',
  },
  btn: {
    marginLeft: 50,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
    borderColor: 'white',
  },
  container: {
    flexDirection: 'row',
    paddingTop: 40,

  },

});

export default Bookings;
