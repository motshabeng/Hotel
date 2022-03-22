import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

const ForgotPassword = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');
   

   
  return (
    <View style={styles.container}>
      <View>
      <View><Text style={{alignSelf:'center',fontSize:17}}>Reset Password</Text></View>
        <TextInput
          placeholder="Email"
          style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.btn}>
    < TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={{alignSelf:'center',marginTop:15}}>Reset Password</ Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
   TextInput: {
    marginTop: 30,
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
  btn: {
   
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
})

