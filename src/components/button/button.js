import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.onClick}>

          <Text>{this.props.label}</Text>

        </TouchableHighlight>
      </View>
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired
};
