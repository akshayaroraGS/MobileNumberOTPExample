import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class Header extends Component {
  render() {
    const {style, title, showBackButton, onPressOnBack} = this.props;
    return (
      <View style={[styles.container, style]}>
        {title && (
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {title}
          </Text>
        )}
        {showBackButton && (
          <TouchableOpacity
            style={{position: 'absolute', right: 10, padding: 10}}
            onPress={onPressOnBack}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>
              X
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,180,255,1)',
  },
});
