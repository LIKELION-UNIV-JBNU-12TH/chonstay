import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
import {validateSignup} from '../../utils';
import {TextInput} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {colors} from '../../constants';
import useAuth from '../../hooks/queries/useAuth';
import {pickPlace} from 'react-native-place-picker';

function SignupScreen() {
  const idRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const {signupMutation, loginMutation} = useAuth();
  const nameRef = useRef<TextInput | null>(null);
  const phoneNumberRef = useRef<TextInput | null>(null);
  const residenceRef = useRef<TextInput | null>(null);
  const birthRef = useRef<TextInput | null>(null);
  const ageRef = useRef<TextInput | null>(null);
  const [address, setAddress] = useState('주소를 선택하세요...');
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [openGender, setOpenGender] = useState(false);
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
      phonenumber: '',
      residence: '',
      birth: '',
      age: '',
      gender: 'Male',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, id, password, name, phonenumber, residence, birth, gender} =
      signup.values;

    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth() + 1;
    const currDay = currDate.getDate();

    const age = (
      currYear -
      date.getFullYear() +
      1 *
        Number(
          currMonth > date.getMonth() + 1 ||
            (currMonth == date.getMonth() + 1 && currDay >= date.getDate()),
        ) -
      1
    ).toString();

    signupMutation.mutate(
      {email, id, password, name, phonenumber, residence, birth, age, gender},
      {onSuccess: () => loginMutation.mutate({id, password})},
    );
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
            returnKeyType="next"
            onSubmitEditing={() => nameRef.current?.focus()}
            {...signup.getTextInputProps('passwordConfirm')}
          />
          <InputField
            ref={nameRef}
            placeholder="이름"
            error={signup.errors.name}
            touched={signup.touched.name}
            returnKeyType="next"
            onSubmitEditing={() => phoneNumberRef.current?.focus()}
            {...signup.getTextInputProps('name')}
          />
          <InputField
            ref={phoneNumberRef}
            placeholder="휴대전화 (010-1234-5678)"
            error={signup.errors.phonenumber}
            touched={signup.touched.phonenumber}
            returnKeyType="next"
            onSubmitEditing={() => residenceRef.current?.focus()}
            {...signup.getTextInputProps('phonenumber')}
          />
          <InputField
            ref={residenceRef}
            editable={false}
            touched={signup.touched.residence}
            onSubmitEditing={() => birthRef.current?.focus()}
            {...signup.getTextInputProps('residence')}
            value={address}
            onContentSizeChange={() =>
              signup.handleChangeText('residence', address)
            }
          />
          <CustomButton
            label="주소 선택"
            variant="outlined"
            onPress={() => {
              pickPlace({
                enableUserLocation: true,
                enableGeocoding: true,
                color: colors.YELLOWGREEN,
              }).then(res => {
                if (res.address) {
                  const location = [
                    res.address.name,
                    res.address.city,
                    res.address.state,
                    res.address.country,
                  ].join(', ');
                  setAddress(location);
                }
              });
            }}
          />
          <InputField
            ref={birthRef}
            editable={false}
            error={signup.errors.birth}
            touched={signup.touched.birth}
            onSubmitEditing={() => ageRef.current?.focus()}
            {...signup.getTextInputProps('birth')}
            value={date.toISOString().split('T')[0]}
            onContentSizeChange={() => {
              const dateFormat = date.toISOString().split('T')[0];
              signup.handleChangeText('birth', dateFormat);
            }}
          />
          <CustomButton
            label="생년월일 선택"
            variant="outlined"
            onPress={() => setOpenDate(true)}
          />
          <DatePicker
            modal
            open={openDate}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpenDate(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />
          <DropDownPicker
            placeholder="성별"
            open={openGender}
            items={items}
            setOpen={setOpenGender}
            setValue={setValue}
            setItems={setItems}
            {...signup.getTextInputProps('gender')}
            value={value}
            style={{borderColor: colors.GRAY_200}}
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
