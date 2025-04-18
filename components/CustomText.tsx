import { Text } from 'react-native';



export default function CustomText({ children, ...props }) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'Inter_400Regular' }]}
    >
      {children}
    </Text>
  );
}