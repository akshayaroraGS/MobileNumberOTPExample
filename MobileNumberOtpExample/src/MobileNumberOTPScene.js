import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

import AppImages from 'images';
import AppStrings from 'strings';
import Header from './component/Header';

export default class MobileNumberOTPScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otpText: '',
      showError: false,
      enableButton: false,
    };
  }

  handleTextChange = (text) => {
    const {showError} = this.state;
    this.setState({
      otpText: text,
      showError: showError ? text.length === 4 : false,
      enableButton: text.length == 4,
    });
  };

  resendClick = () => {
    alert(AppStrings.RESEND_SUCCESS_MSG);
  };

  buttonPress = () => {
    const {otpText, enableButton} = this.state;
    if (enableButton) {
      if (otpText === '1234') {
        alert(AppStrings.MOBILE_NUMBER_REGISTED_SUCCESS);
        Keyboard.dismiss();
      } else {
        this.setState({showError: true});
      }
    }
  };

  render() {
    const {showError, enableButton, otpText} = this.state;
    const {mobileNumber, onBack} = this.props;
    return (
      <View style={styles.container}>
        <Header
          title={AppStrings.OTP_SCENE_TITLE_NAVIGATION}
          showBackButton
          onPressOnBack={onBack}
        />
        <View style={styles.viewContainer}>
          <Image style={styles.image} source={AppImages.splash_logo} />
          <Text style={styles.title}>{AppStrings.OTP_SCREEN_TITLE}</Text>
          <Text style={{fontSize: 15, marginTop: 5}}>
            {AppStrings.OTP_SCREEN_SUB_TITLE}
            {mobileNumber.substring(6)}
          </Text>
          <OTPTextInput
            ref={(e) => (this.otpInput = e)}
            tintColor={'rgba(0,180,255,1)'}
            containerStyle={styles.otpInput}
            textInputStyle={{borderWidth: 1, borderRadius: 5}}
            textInputProps={{placehoolder: '*'}}
            handleTextChange={this.handleTextChange}
          />
          {showError && (
            <Text style={styles.errMsg}>Invalid OTP. Please retry</Text>
          )}
          <Text style={styles.didNotReceiveMsg}>
            {AppStrings.DID_NOT_RECEIVE}
            <Text onPress={this.resendClick} style={styles.resendText}>
              {AppStrings.RESEND}
            </Text>
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: enableButton ? 'red' : 'rgba(255,0,0,0.4)'},
            ]}
            activeOpacity={enableButton ? 0.5 : 1}
            onPress={this.buttonPress}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  viewContainer: {paddingHorizontal: 25},
  image: {height: 130, width: 100, resizeMode: 'center'},
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  otpInput: {marginTop: 20, width: '80%'},
  errMsg: {color: 'red', marginLeft: 8},
  didNotReceiveMsg: {
    fontSize: 17,
    marginTop: 3,
    color: 'black',
    marginTop: 20,
    marginLeft: 5,
  },
  resendText: {color: 'orange', fontWeight: 'bold'},
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
