import { Text } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
}

export default function CustomText({ children, ...props }: CustomTextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'Inter_400Regular' }]}
    >
      {children}
    </Text>
  );
}