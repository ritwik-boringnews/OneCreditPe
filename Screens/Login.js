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
import metrics from '../Constants/metrics';

const Login = () => {
  return (
    <View style={{paddingHorizontal: 15,width: windowWidth, height: windowHeight, backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center', marginTop: metrics.verticalScale(30)}}>
        <Image source={images.CreditPeLogo3} />
      </View>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#20409A'
          }}>
          Hey Welcome,
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#828282', marginTop: 10}}>
          Please enter Email Id & Password to login
        </Text>
      </View>

      <View>
        <SafeAreaView style={{alignItems: 'center', marginTop: metrics.verticalScale(20)}}>
          <TextInput
            style={styles.input}
            // value={number}
            placeholder="Email Id"
            keyboardType="text"
            placeholderTextColor="#938EA6"
            
          />
          <TextInput
            style={styles.input}
            // value={number}
            placeholder="Password"
            placeholderTextColor="#938EA6"
            keyboardType="text"
          />
        </SafeAreaView>
        <View>
          <Text
            style={{color: '#828282'}}>
            <Text style={{fontWeight: 'bold', color: '#828282'}}>New user?</Text> Signup Now
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'flex-end'
        }}>
        <TouchableWithoutFeedback style={{flex: 1, justifyContent: 'flex-end'}} onPress={() => alert('Pressed!')}>
          <View
            style={{
              backgroundColor: '#349EFF',
              paddingVertical: metrics.verticalScale(5),
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              flexDirection:'row',
              position: 'absolute',
              bottom: '5%'
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
    paddingVertical: metrics.verticalScale(15),
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: '#E8EEFF',
    borderColor: '#CACACA',
    paddingHorizontal: 20,
    borderRadius: 7,
    fontWeight: '600',
    color: '#938EA6'
  },
});
