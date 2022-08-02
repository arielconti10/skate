import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="signin" component={SignIn} />
    </Stack.Navigator>
  );
}