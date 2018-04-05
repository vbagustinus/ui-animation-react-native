import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Row } from '../../components';
import translateAndOpacity from '../../animations/translateAndOpacity';

class Toolbar extends PureComponent {
  render() {
    const { onBackPress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TouchableWithoutFeedback onPress={onBackPress}>
          <View>
            <Row style={styles.toolbarContainer}>
              <Row style={styles.backContainer}>
                <Icon name="ios-arrow-back" size={24} color="white" />
                <Text style={styles.titleBackText}>Back</Text>
              </Row>
              <View style={styles.menuIconContainer}>
              <Icon name="ios-arrow-back" size={24} color="white" />
              </View>
            </Row>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  toolbarContainer: {
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statusBar: {
    height: 24,
    backgroundColor: 'white',
  },
  titleBackText: {
    color: 'white',
    marginLeft: 8,
  },
  backContainer: {
    flex: 1,
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default translateAndOpacity(Toolbar);
