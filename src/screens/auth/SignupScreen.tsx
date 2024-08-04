import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
import {validateSignup} from '../../utils';
import {TextInput} from 'react-native-gesture-handler';
import {postSignup} from '../../api/auth';
import DropDownPicker from 'react-native-dropdown-picker';

function SignupScreen() {
  const idRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const nameRef = useRef<TextInput | null>(null);
  const phoneNumberRef = useRef<TextInput | null>(null);
  const residenceRef = useRef<TextInput | null>(null);
  const birthRef = useRef<TextInput | null>(null);
  const ageRef = useRef<TextInput | null>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '남성', value: 'Male'},
    {label: '여성', value: 'Female'},
  ]);

  const signup = useForm({
    initialValue: {
      email: '',
      id: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phoneNumber: '',
      residence: '',
      birth: '',
      age: '',
      gender: 'Male',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    postSignup(signup.values);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <InputField
            autoFocus
            placeholder="이메일"
            error={signup.errors.email}
            touched={signup.touched.email}
            inputMode="email"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => idRef.current?.focus()}
            {...signup.getTextInputProps('email')}
          />
          <InputField
            ref={idRef}
            placeholder="아이디"
            error={signup.errors.id}
            touched={signup.touched.id}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => passwordRef.current?.focus()}
            {...signup.getTextInputProps('id')}
          />
          <InputField
            ref={passwordRef}
            placeholder="비밀번호"
            textContentType="oneTimeCode"
            error={signup.errors.password}
            touched={signup.touched.password}
            secureTextEntry
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => passwordConfirmRef.current?.focus()}
            {...signup.getTextInputProps('password')}
          />
          <InputField
            ref={passwordConfirmRef}
            placeholder="비밀번호 확인"
            error={signup.errors.passwordConfirm}
            touched={signup.touched.passwordConfirm}
            secureTextEntry
            onSubmitEditing={() => nameRef.current?.focus()}
            {...signup.getTextInputProps('passwordConfirm')}
          />
          <InputField
            ref={nameRef}
            placeholder="이름"
            error={signup.errors.name}
            touched={signup.touched.name}
            onSubmitEditing={() => phoneNumberRef.current?.focus()}
            {...signup.getTextInputProps('name')}
          />
          <InputField
            ref={phoneNumberRef}
            placeholder="전화번호"
            error={signup.errors.phoneNumber}
            touched={signup.touched.phoneNumber}
            onSubmitEditing={() => residenceRef.current?.focus()}
            {...signup.getTextInputProps('phoneNumber')}
          />
          <InputField
            ref={residenceRef}
            placeholder="주소"
            error={signup.errors.residence}
            touched={signup.touched.residence}
            onSubmitEditing={() => birthRef.current?.focus()}
            {...signup.getTextInputProps('residence')}
          />
          <InputField
            ref={birthRef}
            placeholder="생년월일"
            error={signup.errors.birth}
            touched={signup.touched.birth}
            onSubmitEditing={() => ageRef.current?.focus()}
            {...signup.getTextInputProps('birth')}
          />
          <InputField
            ref={ageRef}
            placeholder="나이"
            error={signup.errors.age}
            touched={signup.touched.age}
            {...signup.getTextInputProps('age')}
          />
          <DropDownPicker
            placeholder="성별"
            open={open}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            {...signup.getTextInputProps('gender')}
            value={value}
          />
        </View>
        <CustomButton label="회원가입" onPress={handleSubmit} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignupScreen;
