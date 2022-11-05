import React from 'react';
import {View, Button, Alert} from 'react-native';
import * as SMS from 'expo-sms';
function App() {
  const IsSMSAvailable = SMS.isAvailableAsync();
  function handleCheck() {
    if (IsSMSAvailable) {
      return Alert.alert('SMS Availables');
    } else {
      return Alert.alert('SMS Not Available');
    }
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
      <Button title="IsSMSAvailable" onPress={handleCheck} />
      <Button title="Send SMS" />
    </View>
  );
}

export default App;
