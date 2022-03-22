import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Card } from 'react-native-paper';
import { firebase } from '../config/firebase';

function LogIn({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const image = {
    uri: 'https://c4.wallpaperflare.com/wallpaper/132/777/256/vacation-costa-adeje-gran-hotel-best-hotels-of-2017-resort-wallpaper-preview.jpg',
  };
  const LogIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Sign In successfully');
        {
          navigation.navigate('HotelSearch');
        }
      })
      .catch(function (error) {
        //Handle errors here.

        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          alert('the password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
      navigation.navigate('HotelSearch')
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.heading}>Mossel-Bay Hotel</Text>
        <View style={styles.Inputs}>
          <TextInput
            placeholder="Email"
            style={styles.TextInput2}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            placeholder="Password"
            style={styles.TextInput3}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ alignSelf: 'center', color: 'white' }}>
            Forgot password ?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLogin}>
          <Text
            style={styles.Text2}
            onPress={LogIn}>
            LogIn
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: '15%', position:'relative' ,textAlign:'center' }}>
          <Text
            style={styles.text3}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Dont have account? SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#6FB2D2',
    height: '100%',
  },

  heading: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'ariel',
    color: 'white',
    paddingTop: 10,
  },
  TextInput: {
    marginTop: 130,
    alignSelf: 'center',
    borderWidth: '1px',
    width: '270px',
    height: '40px',
    marginBottom: '10px',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    borderRadius: 40,
    backgroundColor: 'white',
    border: 'none',
    paddingLeft: 9,
  },
  TextInput2: {
    alignSelf: 'center',
    borderWidth: '1px',
    width: '270px',
    height: '40px',
    marginBottom: '10px',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    borderRadius: 40,
    backgroundColor: 'white',
    marginTop: 10,
    paddingLeft: 9,

    border: 'none',
  },
  TextInput3: {
    alignSelf: 'center',
    borderWidth: '1px',
    width: '270px',
    height: '40px',
    marginBottom: '10px',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    borderRadius: 40,
    backgroundColor: 'white',
    border: 'none',
    marginTop: 10,
    paddingLeft: 9,
  },
  btnLogin: {
    fontSize: 15,
    borderRadius: 40,
    borderWidth: 1,
    border: 'none',
    alignSelf: 'center',
    fontWeight: 'bold',
    width: 200,
    height: 40,
    backgroundColor: '#85C88A',
    color: 'white',
    borderColor: 'white',
    top:10,
  },
  Text2: {
    alignSelf: 'center',
    marginTop: 10,
    color: 'white',
  },
  text3: {
    color: 'white',
  },
});

export default LogIn;
