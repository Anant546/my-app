import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 22 }}>This is a Modal Screen</Text>
      <Button title="Dismiss" onPress={() => router.back()} />
    </View>
  );
}
