import React, { useState, forwardRef } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ExtraInputProps {
  label?: string;
  borderLess?: boolean;
  isTextBox?: boolean;
  isPassword?: boolean;
  error?: string | null;
  isTitle?: boolean;
}

const Input = forwardRef(function MyInput(
  props: ExtraInputProps & TextInputProps,
  ref: React.Ref<TextInput>
) {
  const { label, borderLess, isTextBox, isPassword, error, isTitle, ...otherProps } = props;
  const [show, setShow] = useState(false);
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputContainer, borderLess ? styles.borderNone : null]}>
        <View style={styles.innerView}>
          <TextInput
            ref={ref}
            {...otherProps}
            style={[
              styles.input,
              isTitle ? styles.titleText : null,
              isTextBox ? styles.textBox : null,
            ]}
            secureTextEntry={isPassword && !show}
            autoCorrect={false}
            autoComplete={'off'}
            selectTextOnFocus={false}
            autoCapitalize="none"
            spellCheck={false}
            placeholderTextColor={'#999999'}
            selectionColor="#fdfdfd"
            cursorColor="#fff"
          />
          {isPassword ? (
            <TouchableOpacity onPress={() => setShow(state => !state)}>
              {show ? (
                <Ionicons style={styles.inputIconPassword} name="eye" color={'#FFF'} size={18} />
              ) : (
                <Ionicons
                  style={styles.inputIconPassword}
                  name="eye-off"
                  color={'#FFF'}
                  size={18}
                />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#F2F2F2',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 0,
  },
  textBox: {
    height: 130,
    paddingLeft: 14,
    paddingTop: 16,
    paddingRight: 21,
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 0,
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Avenir-Book',
    color: '#FFFFFF',
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    color: '#999999',
    fontWeight: '600',
    marginBottom: 2,
    fontFamily: 'Avenir-Book',
  },
  error: {
    fontSize: 12,
    color: 'red',
    bottom: 0,
    position: 'absolute',
    marginBottom: -15,
  },
  inputIconPassword: {
    height: 20,
    width: 20,
    marginRight: 12,
  },
  borderNone: {
    borderWidth: 0,
    backgroundColor: '#14141D',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '900',
  },
});
