import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent, LogoTitle } from "../components";
import { Home, Ajustes } from "../pages";
const Drawer = createDrawerNavigator();
export function DrawerNav() {
  return (
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
    </Drawer.Navigator>
  );
}
