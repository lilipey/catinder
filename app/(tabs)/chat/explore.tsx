import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function Chats() {

  const data = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Smith',
    },
  ]


  return (
    <View style={{ flex: 1, paddingBottom: 90 }}>
      <Text>Chat</Text>
      {
        data.map((item) => (
          <Pressable key={item.id} onPress={() => router.push('/chat/[id]')} style={{ padding: 10 }}>
            <Text>{item.name}</Text>
          </Pressable>
        ))
      }
    </View>
  );
}