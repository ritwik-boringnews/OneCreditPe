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
import images from '../../Constants/images';
import Header from '../../Components/Header';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import metrics from '../../Constants/metrics';

const Loan = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.getLoan}>
          <Image style={styles.image} source={images.loanSvg} />
          <Text style={{ color: '#464555', marginBottom: 10, fontSize: 18, fontWeight: "700", textAlign: 'center' }}>Get loan up to ₹10,00,00</Text>
          <Text style={{ color: '#828282', fontSize: 14, paddingHorizontal: 25, fontWeight: "500", textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.</Text>
        </View>

        <View style={styles.cards}>
          <View style={styles.box} >
            <Image source={images.pay} style={styles.icons} />
            <Text style={styles.iconText} >Pay Daily Installments</Text>
          </View>
          <View style={styles.box} >
            <Image source={images.interest} style={styles.icons} />
            <Text style={styles.iconText} >Pay Daily Installments</Text>
          </View>
          <View style={styles.box} >
            <Image source={images.note} style={styles.icons} />
            <Text style={styles.iconText} >Pay Daily Installments</Text>
          </View>
        </View>

        <View style={styles.docs}>
          <Text style= {{color: '#20409A', fontFamily: 'Poppins', fontSize: 22, fontWeight: '700'}}>Loan details</Text>
          <View style={{marginTop: metrics.verticalScale(14)}}>
            <View>
              <Text style={styles.cost}>Ammount</Text>
              <Text style={styles.subCost}>10,000-10,00,000</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Loan;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: metrics.horizontalScale(15),
    height: '100%',
    backgroundColor: '#E8EEFF'
  },
  getLoan: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: metrics.horizontalScale(10),
    paddingVertical: metrics.verticalScale(15),
    borderRadius: 6,
    marginTop: metrics.verticalScale(20)
  },
  image: {
    marginBottom: 15,
    marginTop: 10
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: metrics.verticalScale(20)
  }
  ,
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C6C6C6'
  },
  iconText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: "#333",
    textAlign: 'center'
  },
  cost: {
    color: '#464555',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700'
  },
  subCost:{
    color: '#828282',
    fontSize: 16,
    fontWeight: '700'
  }
});
