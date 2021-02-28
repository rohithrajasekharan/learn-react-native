import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableNativeFeedback style={styles.container} onPress={onPress}>
        <View style={styles.item}>
      {icon && <AntDesign name={icon} size={20} color={color} />}
      <Text style={{ color }}>{tab.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  item: {
      width:80,
      alignItems: "center"
  }
});

export default Tab;