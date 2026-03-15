import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaleProductsScreen from "../screens/MaleProductsScreen";
import FemaleProductsScreen from "../screens/FemaleProductsScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#6200ee",
      }}
    >
      <Tab.Screen
        name="Masculino"
        component={MaleProductsScreen}
        options={{ title: "Masculino" }}
      />
      <Tab.Screen
        name="Feminino"
        component={FemaleProductsScreen}
        options={{ title: "Feminino" }}
      />
    </Tab.Navigator>
  );
}