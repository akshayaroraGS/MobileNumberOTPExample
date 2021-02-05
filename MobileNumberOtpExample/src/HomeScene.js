import React, {Component} from 'react';
import {
  Alert,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import AppImages from 'images';
import AppStrings from 'strings';
import Header from './component/Header';

export default class HomeScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otpText: '',
      showError: false,
      enableButton: false,
    };
  }

  buttonPress = () => {
    Alert.alert('', 'Are you sure want to logout?', [
      {text: 'Yes', onPress: () => {}, style: 'destructive'},
      {text: 'No', onPress: () => {}},
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={AppStrings.HOME_TITLE} />
        <View style={styles.viewContaoner}>
          <Image style={styles.image} source={AppImages.splash_logo} />

          <TouchableOpacity style={styles.button} onPress={this.buttonPress}>
            <Text style={styles.buttonText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  viewContaoner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 130, width: 100, resizeMode: 'center'},
  button: {
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 40,
  },
  buttonText: {fontWeight: 'bold', color: 'white', fontSize: 16},
});
