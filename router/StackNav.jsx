import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from "../pages";
import { DrawerNav } from "./DrawerNav";

const Stack = createNativeStackNavigator();

export function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={DrawerNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
