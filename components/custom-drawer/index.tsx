import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = ( props : DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      {...props}
    >
      <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
        <View className='flex justify-center items-center bg-white rounded-full w-24 h-24'>
          <Text className='text-2xl font-bold'>DC</Text>
        </View>
      </View>

      <DrawerItemList
        {...props}
      />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer