import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Home from './screens/Home';


export default function App() {
  
  const {Screen, Navigator} = createNativeStackNavigator();

  return (
   <NavigationContainer>
     <Navigator screenOptions={{headerTitleAlign:'center'}}>
        {/* <Route path='/home' element={Home}/>  */}
        <Screen name='Welcome' component={Welcome} />
        
        <Screen name='Login' component={Login} />
        <Screen name='Home' component={Home} />
     </Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
