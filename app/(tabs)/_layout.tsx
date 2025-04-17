import { Tabs } from 'expo-router';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Icon } from "@rneui/themed"

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Match',
          tabBarIcon: ({ color }) =>
            <Icon
              size={28}
              color={color}
              name="layer-group"
              type="font-awesome-5"
              solid={true}
            />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Discussions',
          tabBarIcon: ({ color }) =>
            <Icon
              size={28}
              color={color}
              name="comments"
              type="font-awesome-5"
              solid={true}
            />,
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          title: 'Discussions',
          href: null,
          tabBarIcon: ({ color }) =>
            <Icon
              size={28}
              color={color}
              name="comments"
              type="font-awesome-5"
              solid={true}
            />,
        }}
      />
    </Tabs>
  );
}
