import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {colors, mainNavigations} from '../../constants';
import {logout} from '../../api/auth';

type VisitRecordScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.VISITRECORD
>;

function VisitRecordScreen({navigation}: VisitRecordScreenProps) {
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
        <Text style={styles.headerText}>방문 기록</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.image, styles.mainImage]}
        source={require('../../assets/farming.jpeg')}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>전주 스테이</Text>
        </View>
        <Text style={styles.contents}>기간: 8/1~8/5</Text>
        <Text style={styles.contents}>주최자: 전주시장</Text>
        <Text style={styles.contents}>리뷰: 없음</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>강원도 소키우기</Text>
        </View>
        <Text style={styles.contents}>기간: 5/7~5/12</Text>
        <Text style={styles.contents}>주최자: 한우매니아</Text>
        <Text style={styles.contents}>리뷰: 없음</Text>
        <CustomButton
          label="뒤로가기"
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

export default VisitRecordScreen;
