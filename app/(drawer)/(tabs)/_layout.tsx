import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShadowVisible: false, tabBarActiveTintColor: 'indigo-100' }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="list-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout