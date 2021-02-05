import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import SplashScene from './src/SplashScene';
import MobileNumberScene from './src/MobileNumberScene';

export default class App extends Component {
  state = {showSplash: true};

  componentDidMount() {
    setTimeout(() => {
      this.setState({showSplash: false});
    }, 3000);
  }

  render() {
    const {showSplash} = this.state;
    return (
      <View style={styles.container}>
        {showSplash ? <SplashScene /> : <MobileNumberScene />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
