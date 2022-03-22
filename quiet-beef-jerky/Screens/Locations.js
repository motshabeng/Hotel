import React, {useState} from 'react'
import {
  StyleSheet,
  View,Text,Image,
} from 'react-native';
import { firebase } from '../config/firebase';
import * as Calendar from 'expo-calendar';
function Location({ navigation }) {
 const img = require('../assets/Images/location.png')
  const img1 = require('../assets/Images/map.png')
   const img2 = require('../assets/Images/map.png')
   
            
return(
  <View style={{backgroundColor:'blue'}}>
  <View style={styles.border}>
  <Text style={styles.header}>Mossel-Bay Hotel</Text>
     <Text style={styles.icon}>
   <Image source={img} style={{width:20,height:20,color:'white'}}/>
    <Text style={{color:'white',}}>Location</Text>
  </Text>
  </View>
  
   <Image source={img1} style={{width:355,height:510,border:'1solid',borderWidth:1,borderRadius:59,alignSelf:'center',borderColor:'white'}}/>
  
  </View>
)
}
const styles= StyleSheet.create({
  icon:{
    alignSelf:'center',
    marginTop:40,
    fontWeight:'bold',
    color:'blue',
    fontSize:20,
    borderColor:'blue'
  },
  header:{
   alignSelf:'center',
   fontWeight:'bold',
   fontSize:20,
   marginTop:10,
   color:'white'
  },
  
  

  
  
})
export default Location;
