import { Stack } from 'expo-router';

export default function HomeScreen() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(screens)" />
      <Stack.Screen
        name="[id]"
        options={{
          presentation: 'fullScreenModal',
        }}
      />
    </Stack>
  );
}
