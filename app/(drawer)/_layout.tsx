import CustomDrawer from '@/components/custom-drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer
      
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        drawerActiveTintColor: 'indigo',
        drawerContentStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: false,
        drawerItemStyle: {
          borderRadius: 0,
        },
        
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'User',
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="person-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule',
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="calendar-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="grid-outline" color={color} />
          ),
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout