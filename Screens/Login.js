import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import images from '../Constants/images';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = () => {
  return (
    <View style={{width: windowWidth, height: windowHeight}}>
      <View style={{alignItems: 'center'}}>
        <Image source={images.CreditPeLogo3} />
      </View>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Hey Welcome,
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular'}}>
          Please enter Email Id & Password to login
        </Text>
      </View>

      <View>
        <SafeAreaView style={{alignItems: 'center', marginTop: 20}}>
          <TextInput
            style={styles.input}
            // value={number}
            placeholder="Email Id"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            // value={number}
            placeholder="Password"
            keyboardType="text"
          />
        </SafeAreaView>
        <View>
          <Text
            style={{paddingLeft: (windowWidth - (windowWidth * 5) / 6) / 2}}>
            <Text style={{fontWeight: 'bold'}}>New user?</Text> Signup Now
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',

          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: windowWidth - (windowWidth * 5) / 6,
        }}>
        <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
          <View
            style={{
              backgroundColor: '#349EFF',
              height: 60,
              width: (windowWidth * 5) / 6,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              flexDirection:'row'
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FFFFFF',
                margin:10
              }}>
              Login Now
            </Text>
            <AntDesign
            name="arrowright"
            color="white"
            size={30}
          />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: (windowWidth * 5) / 6,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#E8EEFF',
    borderColor: '#CACACA',
    // padding: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    fontWeight: '600',
  },
});
