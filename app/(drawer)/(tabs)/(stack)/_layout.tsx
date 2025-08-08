import Ionicons from '@expo/vector-icons/Ionicons'
import { DrawerActions } from '@react-navigation/native'
import { Stack, useNavigation, useRouter } from 'expo-router'
import React from 'react'

const StackLayout = () => {

  const navigation = useNavigation()
  const router = useRouter()

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack && navigation.canGoBack()) {
      router.back()
      return;
    } 
    
    navigation.dispatch(DrawerActions.toggleDrawer())
    
  }

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons 
          className="mr-5" 
          name={canGoBack ? "arrow-back-outline" : "menu-outline"} 
          size={20} 
          color={tintColor} 
          onPress={() => onHeaderLeftClick(canGoBack)} 
          />
        ),
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