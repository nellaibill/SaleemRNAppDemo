import { TailwindProvider } from "tailwindcss-react-native";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BasketScreen from "./screens/BasketScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavouritiesScreen from "./screens/FavouritiesScreen";
import UserAccountScreen from "./screens/UserAccountScreen";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          if (routeName === "Home") {
            iconName = "home-outline";
          }
          if (routeName === "Basket") {
            iconName = "shopping-outline";
          }
          if (routeName === "Favourities") {
            iconName = "cards-heart-outline";
          }
          if (routeName === "UserAccount") {
            iconName = "account-box-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarStyle: { backgroundColor: "#ffffff", height: 60 },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: CustomTabButton,
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          presentation: "modal",
          headerShown: false,
          tabBarButton: CustomTabButton,
        }}
      />
      <Tab.Screen
        name="Favourities"
        component={FavouritiesScreen}
        options={{
          tabBarButton: CustomTabButton,
        }}
      />
      <Tab.Screen
        name="UserAccount"
        component={UserAccountScreen}
        options={{
          tabBarButton: CustomTabButton,
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

const CustomTabButton = (props) => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, { borderTopColor: "blue", borderTopWidth: 1 }]
        : props.style
    }
  />
);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="MyTabs"
              options={{ headerShown: false }}
              component={MyTabs}
            />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen
              name="productDetails"
              component={ProductDetailsScreen}
            />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
