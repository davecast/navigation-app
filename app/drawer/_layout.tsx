import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'User',
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule',
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout