import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { routes } = state;
  const renderColor = currentTab => (currentTab === selected ? theme.colors.secondary : theme.colors.black);

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    bottom:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width,
    elevation: 2,
  },
});

export default TabBar;