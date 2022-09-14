import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import React from 'react';
import Login from './Screens/Login';
import Loan from './Screens/loanSection/Loan';

const App = () => {
  return (
    <SafeAreaView>
      <Loan/>
      {/* <Login/>  */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
