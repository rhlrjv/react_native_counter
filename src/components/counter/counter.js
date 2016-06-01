import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';
import Button from '../button/button';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  _increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log(styles.button);
    return (
      <View style={styles.container}>
        <Text style={styles.count}> {this.state.count} </Text>
        <Button
          onClick={this._increment.bind(this)}
          label={'Increment'}/>
      </View>
    );
  }
}

