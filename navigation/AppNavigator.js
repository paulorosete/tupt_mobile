import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ExploreScreen from '../screens/ExploreScreen'; // Import ExploreScreen
import AboutUsScreen from '../screens/AboutUsScreen'; // Import AboutUsScreen
import { useAuth } from '../contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import ITBuildingScreen from '../screens/ITBuildingScreen';
import AdminBuildingScreen from '../screens/AdminBuildingScreen';
import BASDBuildingScreen from '../screens/BASDBuildingScreen';
import CanteenScreen from '../screens/CanteenScreen';
import CivilBuildingScreen from '../screens/CivilBuildingScreen';
import GymnasiumScreen from '../screens/GymnasiumScreen';
import ItalianBuildingScreen from '../screens/ItalianBuildingScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MechanicalBuildingScreen from '../screens/MechanicalBuildingScreen';
import MultiPurposeHallScreen from '../screens/MultiPurposeHallScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {user ? (
        // User is signed in
        <>
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="ExploreScreen" 
            component={ExploreScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="AboutUsScreen" 
            component={AboutUsScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="ITBuildingScreen" 
            component={ITBuildingScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="AdminBuildingScreen" 
            component={AdminBuildingScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="BASDBuildingScreen" 
            component={BASDBuildingScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="CanteenScreen" 
            component={CanteenScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="CivilBuildingScreen" 
            component={CivilBuildingScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="GymnasiumScreen" 
            component={GymnasiumScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="ItalianBuildingScreen" 
            component={ItalianBuildingScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="LibraryScreen" 
            component={LibraryScreen} 
            options={{ headerShown: false }}
          />
           <Stack.Screen 
            name="MechanicalBuildingScreen" 
            component={MechanicalBuildingScreen} 
            options={{ headerShown: false }}
          />    
           <Stack.Screen 
            name="MultiPurposeHallScreen" 
            component={MultiPurposeHallScreen} 
            options={{ headerShown: false }}
          />
        </>
      ) : (
        // User is not signed in
        <>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;