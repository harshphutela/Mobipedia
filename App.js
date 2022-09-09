import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './source/Main'
import Instruction1 from './source/Instruction1'
import Instruction2 from './source/Instruction2'
import Instruction3 from './source/Instruction3'
import OS from './source/OS'
import AndroidRange from './source/AndroidRange'
import Under10k from './source/10000'
import tento20k from './source/10-20k'
import twentyto30k from './source/20-30k'
import Above30k from './source/Above30k'
import IosFront from "./source/iosfront"
import SE from "./source/SE"
import ip12 from "./source/12"
import ip13 from "./source/13"
import ip13pro from "./source/13pro"



const App = () => {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
    
    <Stack.Navigator screenOptions={{headerShown: false}}>

      {/* <Stack.Screen name="Calculator" component={Calculator} /> */}

      <Stack.Screen name="Home" component={Main} />

      <Stack.Screen name="Inst1" component={Instruction1} />

      <Stack.Screen name="Inst2" component={Instruction2} />

      <Stack.Screen name="Inst3" component={Instruction3} />

      <Stack.Screen name="MainHome" component={OS} />

      <Stack.Screen name="AndroidRange" component={AndroidRange} />

      <Stack.Screen name="Under10k" component={Under10k} />

      <Stack.Screen name="10-20k" component={tento20k} />
 
      <Stack.Screen name="20-30k" component={twentyto30k} />

      <Stack.Screen name="Above30k" component={Above30k} />

      <Stack.Screen name="iosFront" component={IosFront} />

      <Stack.Screen name="SE" component={SE} />
      <Stack.Screen name="12" component={ip12} />
      <Stack.Screen name="13" component={ip13} />
      <Stack.Screen name="13pro" component={ip13pro} />

    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default App
