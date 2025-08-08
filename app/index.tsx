import { Redirect } from 'expo-router'
import React from 'react'
// import { Platform, Text, View } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

const App = () => {
  // const insets = useSafeAreaInsets()

  return (
   //Redirect to products screen
  //  <Redirect href='/tabs/home' />
  //  <Redirect href='/drawer/tabs/(stack)/home' />
   <Redirect href='/home' />
   
  
    // <View className='flex-1 pr-4 pl-4' style={{ paddingTop: insets.top }}>
    //   {/* Debug info */}
    //   <Text className='text-primary text-sm mb-4'>
    //     Platform: {Platform.OS}
    //   </Text>
      
    //   {/* Método 1: usando style directamente */}
    //   <Text className='text-secondary text-2xl mb-4 '
    //     style={{ fontFamily: 'WorkSans-Black' }}
    //   >
    //     Hello World (Style)
    //   </Text>
      
    //   {/* Método 2: usando clase de Tailwind */}
    //   <Text className='text-secondary-100 text-2xl font-work-black mb-4'>
    //     Hello World (Tailwind)
    //   </Text>
      
    //   {/* Método 3: Sistema por defecto para comparar */}
    //   <Text className='text-secondary-200 text-2xl font-bold mb-4'>
    //     Hello World (Default Bold)
    //   </Text>
      
    //   {/* Probando otras fuentes */}
    //   <Text className='text-tertiary text-xl font-work-medium mb-2'>
    //     WorkSans Medium
    //   </Text>
    //   <Text className='text-purple-500 text-xl font-work-light mb-2'>
    //     WorkSans Light
    //   </Text>

    //   <Link href='/products' className='text-primary text-2xl mb-4'>
    //     Products
    //   </Link>
    // </View>
  )
}

export default App