import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthRoutes from "./AuthRoutes";
import MainTabs from "./MainTabs";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <AuthRoutes />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: "Detalhes do Produto" }}
      />
    </Stack.Navigator>
  );
}