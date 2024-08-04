import {Gender} from '../types/domain';

type LoginInformation = {
  id: string;
  password: string;
};

type UserInformation = LoginInformation & {
  email: string;
  name: string;
  phoneNumber: string;
  residence: string;
  birth: string;
  age: string;
  gender: Gender;
};

function validateUser(values: LoginInformation) {
  const errors = {
    id: '',
    password: '',
  };

  if (!(values.id.length >= 6 && values.id.length <= 12)) {
    errors.id = '아이디는 6~12자 사이로 입력해주세요.';
  }
  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요.';
  }
  return errors;
}

function validateLogin(values: LoginInformation) {
  return validateUser(values);
}

function validateSignup(values: UserInformation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const signupErrors = {
    ...errors,
    passwordConfirm: '',
    email: '',
    name: '',
    phoneNumber: '',
    residence: '',
    birth: '',
    age: '',
    gender: '',
  };
  if (!/[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(values.email)) {
    signupErrors.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!(values.id.length >= 6 && values.id.length <= 12)) {
    errors.id = '아이디는 6~12자 사이로 입력해주세요.';
  }

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }
  if (values.phoneNumber.length !== 11) {
    signupErrors.phoneNumber = '휴대폰 번호의 길이가 일치하지 않습니다.';
  }
  if (!(Number(values.age) > 0 && Number(values.age) <= 120)) {
    signupErrors.age = '나이가 올바르지 않습니다.';
  }
  return signupErrors;
}

export {validateLogin, validateSignup};
