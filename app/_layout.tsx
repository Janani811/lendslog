import 'react-native-reanimated';
import { useEffect } from 'react';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import { store } from '@/redux/store';
import { FirebaseProvider } from '@/contexts/firebase-context';

import NetworkInfoModal from '@/components/NetworkInfoModal';
import ToastMessage from '@/components/ToastMessage';

import { requestUserPermission } from '@/utils/notification-service';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export default function RootLayout() {
  useEffect(() => {
    requestUserPermission();
  }, []);
  return (
    <FirebaseProvider>
      <Provider store={store}>
        <Slot />
        <ToastMessage />
        <NetworkInfoModal />
      </Provider>
    </FirebaseProvider>
  );
}
