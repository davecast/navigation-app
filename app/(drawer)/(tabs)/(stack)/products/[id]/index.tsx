import { products } from '@/store/products.store'
import { Redirect, Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProductDetailsScreen = () => {

  const { id } = useLocalSearchParams()
  const product = products.find((product) => product.id === id)
  

  if (!product) {
    return <Redirect href="/" />
  }

  return (
    <>
      {/* Configurar el título del Stack dinámicamente */}
      <Stack.Screen 
        options={{ 
          title: product.title,
          headerBackTitle: "Products"
        }} 
      />
      
      <View className='flex flex-1 pr-4 pl-4 gap-4'>
        {/* <Text className='text-2xl font-work-black'>{product?.title}</Text> */}
        <Text className='text-sm text-gray-500'>{product?.description}</Text>
        <Text className='text-lg font-work-medium text-green-600'>${product?.price}</Text>
      </View>
    </>
  )
}

export default ProductDetailsScreen