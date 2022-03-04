import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { CustomDrawerContent, LogoTitle } from "../components";
import { Home, Ajustes, Cart } from "../pages";

const Drawer = createDrawerNavigator();
export function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          options={{
            headerTitle: () => <LogoTitle />,
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen name="Ajustes" component={Ajustes} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
