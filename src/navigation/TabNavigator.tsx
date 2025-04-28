import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DiagnoseScreen from '../screens/DiagnoseScreen';
import MyGardenScreen from '../screens/MyGardenScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {TabParamList} from '../types/navigation';
import HomeIcon from '../assets/icons/HomeIcon';
import DiagnoseIcon from '../assets/icons/DiagnoseIcon';
import MyGardenIcon from '../assets/icons/MyGardenIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import ScanIcon from '../assets/icons/ScanIcon';

const Tab = createBottomTabNavigator<TabParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
        },
        tabBarStyle: {
          width: '100%',
          height: 60,
          paddingBottom: 10,
          position: 'relative',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({color}) => <DiagnoseIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={DiagnoseScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View style={styles.scanButtonContainer}>
              <ScanIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Garden"
        component={MyGardenScreen}
        options={{
          tabBarIcon: ({color}) => <MyGardenIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  scanButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#28AF6E',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -30,
    left: '50%',
    marginLeft: -30,
    zIndex: 1,
    borderWidth: 5,
    borderColor: '#2CCC80',
  },
});

export default TabsNavigator;
