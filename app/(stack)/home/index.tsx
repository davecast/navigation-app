import CustomButton from '@/components/custom-button'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
  return (
    <View className='flex-1 p-4 gap-4' >
      
      {/* NOTE: This is the way to use the Link component with a custom button */}
      {/* <Link href='/products' className='text-primary text-2xl mb-4' asChild>
        <CustomButton 
          color='primary'
        >
          Products
        </CustomButton>
      </Link> */}

      <CustomButton 
        color='primary'
        onPress={() => router.push('/products')}
      >
        Products
      </CustomButton>

      <CustomButton 
        color='secondary'
        onPress={() => router.push('/profile')}
      >
        Profile
      </CustomButton>

      <CustomButton 
        color='tertiary'
        onPress={() => router.push('/settings')}
      >
        Settings
      </CustomButton>
{/* 
      <CustomButton 
        color='primary'
        onPress={() => router.push('/products')}
        variant='text-only'
      >
        Products
      </CustomButton> */}

      {/* <Link href='/products' className='text-primary text-2xl mb-4'>
        Products
      </Link>

      <Link href='/profile' className='text-primary text-2xl mb-4'>
        Profile
      </Link>

      <Link href='/settings' className='text-primary text-2xl mb-4'>
        Settings
      </Link> */}
    </View>
  )
}

export default HomeScreen