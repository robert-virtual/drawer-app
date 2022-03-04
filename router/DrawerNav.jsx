import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Ajustes } from "../pages";
const Drawer = createDrawerNavigator();

export function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Ajustes" component={Ajustes} />
    </Drawer.Navigator>
  );
}
