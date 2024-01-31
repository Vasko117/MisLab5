import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import * as Notifications from 'expo-notifications';
import * as Location from 'expo-location';

const App = () => {
	const initializePushNotifications = async () => {
		try {
			await Notifications.requestPermissionsAsync();
			const token = (await Notifications.getExpoPushTokenAsync()).data;
			console.log('Expo Push Token:', token);
		} catch (error) {
			console.error('Error initializing push notifications:', error);
		}
	};

	const initializeLocation = async () => {
		try {
			await Location.requestForegroundPermissionsAsync();
			const location = await Location.getCurrentPositionAsync({});
			console.log('Current location:', location);
		} catch (error) {
			console.error('Error initializing location services:', error);
		}
	};

	useEffect(() => {
		initializePushNotifications();
		initializeLocation();
	}, []);

	return <AppNavigator />;
};

export default App;
