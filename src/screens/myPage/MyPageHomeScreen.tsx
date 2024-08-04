import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {colors, mainNavigations} from '../../constants';
import {logout} from '../../api/auth';

type MyPageScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.MYPAGE
>;

function MyPageHomeScreen({navigation}: MyPageScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerImageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/Chonstay.png')}
          />
        </View>
        <Text style={styles.headerText}>마이페이지</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.image, styles.mainImage]}
        source={require('../../assets/farming.jpeg')}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>김나무</Text>
        </View>
        <Text style={styles.contents}>이메일: namu@namu.com</Text>
        <Text style={styles.contents}>주소: 서울시 동작구 나무동 229-49</Text>
        <Text style={styles.contents}>나이: 32세</Text>
        <Text style={styles.contents}>취미: 향도</Text>
        <CustomButton label="방문 기록" variant="outlinedBlack" />
        <CustomButton label="개인정보수정" variant="outlinedBlack" />
        <CustomButton
          label="로그아웃"
          variant="outlinedBlack"
          onPress={() => logout()}
        />
        <CustomButton
          label="뒤로가기"
          variant="outlinedBlack"
          onPress={() => navigation.navigate(mainNavigations.HOME)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  header: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: '100%',
  },
  headerImageContainer: {
    width: 60,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  mainImage: {flex: 0.5},
  headerText: {
    margin: 'auto',
    fontSize: 32,
    fontFamily: 'NotoSerifKR-Bold',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'NotoSerifKR-Bold',
  },
  contents: {
    fontSize: 16,
    fontFamily: 'NotoSerifKR-Bold',
  },
});

export default MyPageHomeScreen;
