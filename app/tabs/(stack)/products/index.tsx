import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1 pr-4 pl-4' > 
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <View className='flex flex-col gap-4 mb-8'>
          <Text className='text-lg font-work-black'>{item.title}</Text>
          <Text className='text-sm text-gray-500'>{item.description}</Text>
          <View className='flex flex-row gap-2 justify-between'>
            <Text className='text-sm text-gray-500'>{item.price}</Text>
            <Link href={`/tabs/(stack)/products/${item.id}`} className='text-sm text-primary'>
              Details
            </Link>
          </View>
        </View>}
      />
    </View>
  )
}

export default ProductsScreen