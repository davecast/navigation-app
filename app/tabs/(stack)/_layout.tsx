import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen 
        name='home/index' 
        options={{ 
          title: "Home", 
        }} 
      />
      <Stack.Screen 
        name='products/index' 
        options={{ 
          title: "Products", 
        }} 
      />
      <Stack.Screen 
        name='products/[id]/index' 
        options={{ 
          title: "Product Details",
          // El título se puede sobrescribir desde el componente individual
        }} 
      />
      <Stack.Screen 
        name='profile/index' 
        options={{ 
          title: "Profile", 
        }} 
      />
      <Stack.Screen 
        name='settings/index' 
        options={{ 
          title: "Settings", 
        }} 
      />
    </Stack>
  )
}

export default StackLayout