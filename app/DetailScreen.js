import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetailScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22 }}>This is the Details Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
