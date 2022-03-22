import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { firebase } from '../config/firebase';

function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const image = {
    uri: 'https://c4.wallpaperflare.com/wallpaper/132/777/256/vacation-costa-adeje-gran-hotel-best-hotels-of-2017-resort-wallpaper-preview.jpg',
  };
  const Register = () => {
    if (password == confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert('Sign up successfully');
          {
            navigation.navigate('Login');
          }
          var db = firebase.firestore();
          db.collection('users')
            .doc(email)
            .set({
              firstName: firstName,
              confirmPassword: confirmPassword,
            })
            .then(() => {})
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('password not matching');
    }
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
              <TextInput
                placeholder="Confirm Password"
                style={styles.TextInput3}
                onChangeText={(ConfirmPassword) =>
                  setConfirmPassword(ConfirmPassword)
                }
              />
            </View>
            <TouchableOpacity style={styles. btnSignup}>
              <Text
                style={styles.Text2}
                onPress={Register}>
                 Sign Up
              </Text>
            </TouchableOpacity>

             <Text style={{alignSelf:'center',color:'white'}} onPress= {()  => navigation.navigate('LogIn')}> Have an account  : Sign  </Text>
        
        </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
  
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:"#6FB2D2",
    height:'100%'


  } ,
  image: {
    height: 600,
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
    border: 'none',
    marginTop: 10,
    paddingLeft: 9,
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
   btnSignup: {
   
    fontSize: 15,
    marginLeft: 20,
    borderRadius: 40,
    borderWidth: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
    width: 200,
    height: 50,
    color: 'white',
   backgroundColor: '#85C88A',
    borderColor: 'white',
    border:'none',
  },
  Text2: {
    alignSelf: 'center',
    marginTop: 10,
    color: 'white',
  },
});

export default SignUp;
