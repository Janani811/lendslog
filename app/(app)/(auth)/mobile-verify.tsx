import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import SafeAreaViewComponent from '@/components/SafeAreaView';
import Spacer from '@/components/Spacer';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { otpValidation } from '@/utils/Validation';
import { deviceWidth } from '@/utils/functions';
import { setError, verifyOtp } from '@/redux/slices/auth/authSlice';
import { useRouter } from 'expo-router';

const MobileVerify = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { otpLoading, error } = useAppSelector(state => state.auth);
  const [otp, setOtp] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleTextChange = (data: string) => {
    setOtp(data);
  };

  const verify = () => {
    dispatch(
      verifyOtp({ code: otp, phone: '+917904859928' }, () => {
        dispatch(setError(null));
        toggleModal();
      })
    );
  };
  return (
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={{ flex: 1 }}>
      <SafeAreaViewComponent>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1, display: 'flex', alignItems: 'center' }}
          keyboardShouldPersistTaps={'always'}>
          <Spacer height={100} />
          <Text style={styles.header}>Enter OTP Code</Text>
          <Text style={styles.subtext}>
            Enter the 6-digit code that has been sent to +91 882343245
          </Text>
          <Spacer height={30} />
          <OTPTextInput
            inputCount={6}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            inputCellLength={1}
            tintColor="#FFCA3A"
            offTintColor="#ffca3a87"
            keyboardType="numeric"
            autoFocus={true}
            handleTextChange={handleTextChange}></OTPTextInput>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{error}</Text>
            </View>
          )}
          <Spacer height={50} />

          <TouchableOpacity
            style={[styles.button, otpLoading || !otpValidation(otp) ? styles.disable : {}]}
            onPress={verify}
            disabled={otpLoading || !otpValidation(otp)}>
            {otpLoading ? (
              <ActivityIndicator animating color={'#14141D'} style={styles.loader} />
            ) : null}
            <Text style={[styles.title, otpLoading ? styles.textDisable : {}]}>Verify</Text>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1 }}>
              <Text>Otp verified successfully!</Text>

              <Button
                title="Login"
                onPress={() => {
                  toggleModal();
                  setTimeout(() => {
                    router.navigate('/(auth)/login');
                  }, 500);
                }}
              />
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaViewComponent>
    </KeyboardAvoidingView>
  );
};

export default MobileVerify;

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Avenir-Black',
  },
  subtext: {
    fontSize: 16,
    color: '#F2F2F2',
    fontFamily: 'Avenir-Book',
    paddingVertical: 20,
    maxWidth: 300,
    textAlign: 'center',
    lineHeight: 24,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 16,
    borderWidth: 4,
    color: '#FFCA3A',
    padding: 0,
    fontSize: 28,
    lineHeight: 33,
    fontWeight: '700',
    verticalAlign: 'middle',
  },
  button: {
    width: deviceWidth() - 60,
    textAlign: 'center',
    backgroundColor: '#FFCA3A',
    borderRadius: 8,
    paddingVertical: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
  },
  title: {
    color: '#14141D',
    fontSize: 18,
    fontFamily: 'Avenir-Black',
    textAlign: 'center',
  },
  disable: {
    opacity: 0.6,
  },
  textDisable: { opacity: 0 },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: deviceWidth() - 60,
    paddingBottom: 10,
  },
  error: {
    fontSize: 16,
    color: 'red',
    fontFamily: 'Avenir-Black',
  },
});
