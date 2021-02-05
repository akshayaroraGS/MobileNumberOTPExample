import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AppImages from 'images';
import AppStrings from 'strings';
import MobileNumberOTPScene from './MobileNumberOTPScene';

export default class MobileNumberScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonEnable: false,
      OTPSceneShow: false,
      mobileNumber: '',
    };
  }

  handleTextChange = (text) => {
    this.setState({
      mobileNumber: text,
      buttonEnable: text.length === 10,
    });
  };

  buttonPress = () => {
    this.state.buttonEnable && this.setState({OTPSceneShow: true});
  };

  backPress = () => {
    this.setState({OTPSceneShow: false});
  };

  render() {
    const {buttonEnable, OTPSceneShow, mobileNumber} = this.state;
    return OTPSceneShow ? (
      <MobileNumberOTPScene
        onBack={this.backPress}
        mobileNumber={mobileNumber}
      />
    ) : (
      <View style={styles.container}>
        <View style={{paddingHorizontal: 25, paddingTop: '15%'}}>
          <Image
            style={{height: 130, width: 100, resizeMode: 'center'}}
            source={AppImages.splash_logo}
          />
          <Text style={styles.title}>
            {AppStrings.MOBILE_NUMBER_SCREEN_TITLE}
          </Text>
          <Text style={styles.subTitle}>
            {AppStrings.MOBILE_NUMBER_SCREEN_SUB_TITLE}
          </Text>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              value={mobileNumber}
              keyboardType={'phone-pad'}
              selectionColor={'rgba(0,180,255,1)'}
              dataDetectorTypes={'phoneNumber'}
              multiline={false}
              onChangeText={this.handleTextChange}
              returnKeyLabel={'Done'}
              returnKeyType={'done'}
              maxLength={10}
              placeholder={AppStrings.MOBILE_NUMBER_PLACEHOLDER}
            />
            <TouchableOpacity
              style={[
                styles.nextButton,
                {
                  backgroundColor: buttonEnable
                    ? 'rgba(0,180,255,1)'
                    : 'rgba(0,180,255,0.4)',
                },
              ]}
              activeOpacity={buttonEnable ? 0.5 : 1}
              onPress={this.buttonPress}>
              <Text style={styles.nextButtonText}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.otpMsg}>{AppStrings.OTP_send_msg}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subTitle: {fontSize: 15, marginTop: 5},
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
    width: '100%',
    borderColor: 'rgba(0,180,255,1)',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -45,
  },
  nextButtonText: {color: 'white', fontSize: 24, marginTop: -5},
  otpMsg: {fontSize: 14, marginTop: 3, color: 'rgba(0,0,0,0.4)'},
});
