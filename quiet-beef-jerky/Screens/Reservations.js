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
  TextInput,
} from 'react-native';
import {firebase} from '../config/firebase'
import {
  BookingCalendar
} from 'react-native';
function Reservations({ navigation }) {
 const [selectedValue, setSelectedValue] = useState('java');
      

            

  return (
    <View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        Reservations Details
      </Text>
  
      <View
        style={{ flexDirection: 'row', marginTop: 40, alignSelf: 'center' }}>
        <View style={{ marginLeft: -10, padding: 10 }}>
          <TextInput style={styles.input} placeholder="First Name" />
        </View>
        <View>
          <TextInput style={styles.input2} placeholder="Last Name" />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <View style={{ marginLeft: -10, padding: 10 }}>
          <TextInput style={styles.input} placeholder="E-mail" />
        </View>
        <View>
          <TextInput style={styles.input2} placeholder="Adress" />
        </View>
      </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <View style={{ marginLeft: -10, padding: 10 }}>
          <TextInput style={styles.input} placeholder="check-in" />
        </View>
        <View >
          <TextInput style={styles.input2} placeholder="check-out" />
        </View>
        </View>
        
      <View
        style={{ flexDirection: 'row', marginTop: 40, alignSelf: 'center' }}>
        
        <View style={{ marginLeft: -10, padding: 10,marginTop:-30 }}>
          <TextInput style={styles.input} placeholder="City" />
          </View>
          <View style={{marginTop:-30}}>
            <TextInput style={styles.input2} placeholder="Phone number" />
        </View>
      </View>
         <View style={{flexDirection:'row',padding:20}}>
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
          <View> 
              <TouchableOpacity   style={{marginTop: "15%"}}>
                <Text
                  style={styles.text3}
                  onPress={() => {
                    navigation.navigate('LogIn');
                  }}>
                 Next
                </Text>
              </TouchableOpacity>


             </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 170,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    marginLeft: 7,
    backgroundColor: 'white',
  },
  input2: {
    height: 40,
    width: 160,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  
});

export default Reservations;
