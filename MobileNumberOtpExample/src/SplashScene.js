import React, {Component} from 'react';
import {ActivityIndicator, Image, View, StyleSheet, Text} from 'react-native';

import AppImages from 'images';

export default class SplashScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={AppImages.splash_logo} />
        <ActivityIndicator
          style={styles.activityIndicator}
          color={'rgba(0,180,255,1)'}
          size={'large'}
        />
        <Text style={styles.text}>v1.0.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', paddingBottom: 20},
  image: {flex: 1, resizeMode: 'center'},
  text: {color: 'rgba(0,180,255,1)'},
});
