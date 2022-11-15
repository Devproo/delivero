import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icons from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <SafeAreaView className='bg-white pt-5 '>
      {/* header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 rounded-full bg-gray-200'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
          <Text className='font-bold text-xl'>
            Current Location <Icons.ChevronDownIcon color='#00CC88' />
          </Text>
        </View>
        <Icons.UserIcon size={35} color='#00CC88' />
      </View>
      {/* search */}

      <View className='flex-row items-center space-x-2  pb-2 mx-4 px-5'>
        <View className='flex-row space-x-2 flex-1 bg-gray-300 p-3'>
          <Icons.MagnifyingGlassIcon color='gray' />
          <TextInput
            placeholder='Restaurants and Casinos'
            keyboardType='default'
          />
        </View>
        <Icons.AdjustmentsHorizontalIcon color='#00CC88' size={20} />
      </View>
      {/* content */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {/* featured rows */}
        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placement from our partner'
         
        />
        <FeaturedRow
          id='456'
          title='Tsty Discount'
          description='Everyone has been enjoyed these juicy discounts'
   
        />
        <FeaturedRow
          id='789'
          title='Offers near you'
          description='Why not support your local restaurant tonight'
  
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
