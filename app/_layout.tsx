import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import "./global.css"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  })

  useEffect(() => {
    if (error) {
      console.error('Font loading error:', error);
      throw error;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1' edges={['left', 'right']}>
        <View className='flex-1 bg-gray-200'>
          <Slot />
          {/* <Stack /> */}
          <StatusBar style="dark" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default RootLayout