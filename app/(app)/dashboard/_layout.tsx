import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import BottomTab from '@/components/BottomTabBar';
import SafeAreaViewComponent from '@/components/SafeAreaView';

const ROUTES: {
  name: string;
  title: string;
  icon: any;
  activeIcon: any;
}[] = [
  {
    name: 'index',
    title: 'Today',
    icon: require('@/assets/icons/today-inactive.png'),
    activeIcon: require('@/assets/icons/today-active.png'),
  },
  {
    name: 'notification',
    title: 'Notify',
    icon: require('@/assets/icons/bell.png'),
    activeIcon: require('@/assets/icons/bell-active.png'),
  },
  {
    name: 'add',
    title: 'Add',
    icon: require('@/assets/icons/add.png'),
    activeIcon: require('@/assets/icons/add-active.png'),
  },
  {
    name: 'lends',
    title: 'Lends',
    icon: require('@/assets/icons/lends.png'),
    activeIcon: require('@/assets/icons/lends-active.png'),
  },
  {
    name: 'profile',
    title: 'Profile',
    icon: require('@/assets/icons/user.png'),
    activeIcon: require('@/assets/icons/user-active.png'),
  },
];

export default function TabLayout() {
  return (
      <SafeAreaViewComponent>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
          tabBar={props => <BottomTab {...props} />}>
          {ROUTES.map(item => (
            <Tabs.Screen
              key={item.name}
              name={item.name}
              options={{
                title: item.title,
                tabBarIcon: ({ focused }) =>
                  focused ? <Image source={item.activeIcon} /> : <Image source={item.icon} />,
              }}
            />
          ))}
        </Tabs>
      </SafeAreaViewComponent>
  );
}
