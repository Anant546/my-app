import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22 }}>Welcome to Home Screen!</Text>
      <Button title="Go to Details" onPress={() => router.push('/DetailScreen')} />
      <Button title="Open Modal" onPress={() => router.push('/modal')} />
    </View>
  );
}
