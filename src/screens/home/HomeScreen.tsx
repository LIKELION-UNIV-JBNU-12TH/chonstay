import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {colors, mainNavigations} from '../../constants';
import {logout} from '../../api/auth';

type HomeScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.HOME
>;

function HomeScreen({navigation}: HomeScreenProps) {
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
        <Text style={styles.headerText}>촌스테이</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.image, styles.mainImage]}
        source={require('../../assets/farming.jpeg')}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>스테이 찾기</Text>
          <Button
            title="더보기"
            color={colors.BLACK}
            onPress={() => navigation.navigate(mainNavigations.BOARDHOME)}
          />
        </View>
        <Text style={styles.contents}>스마트팜 체험</Text>
        <Text style={styles.contents}>소 키우기</Text>
        <Text style={styles.contents}>전주 농촌 스테이</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>오늘의 이슈</Text>
          <Button title="더보기" color={colors.BLACK} />
        </View>
        <Text style={styles.contents}>
          전주시, 스마트팜 육성사업에 200억원 규모 투자 유치...
        </Text>
        <Text style={styles.contents}>
          젊은 층 34%, 향도 경험 해보고 싶어...
        </Text>
        <Text style={styles.contents}>국내산 배춧값 폭락 (8월 7일)</Text>
        <CustomButton
          label="마이페이지"
          variant="outlinedBlack"
          onPress={() => navigation.navigate(mainNavigations.MYPAGE)}
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
  mainImage: {flex: 0.4, margin: 10},
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
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'NotoSerifKR-Bold',
  },
  contents: {
    fontSize: 16,
    fontFamily: 'NotoSerifKR-medium',
  },
});

export default HomeScreen;
