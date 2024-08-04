import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {mainNavigations} from '../../constants';

export type BoardScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.BOARDHOME
>;

function BoardHomeScreen({navigation}: BoardScreenProps) {
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
        <Text style={styles.headerText}>스테이 찾기</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.image, styles.mainImage]}
        source={require('../../assets/farming.jpeg')}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>인기순</Text>
        </View>
        <Text
          style={styles.contents}
          onPress={() => navigation.navigate(mainNavigations.BOARD)}>
          스마트팜 체험 (강원도 양양)
        </Text>
        <Text style={styles.contents}>소 키우기 (충남 논산)</Text>
        <Text style={styles.contents}>전주 농촌 스테이 (전북 전주)</Text>
        <Text style={styles.contents}>스마트팜 체험 (강원도 양양)</Text>
        <Text style={styles.contents}>소 키우기 (충남 논산)</Text>
        <Text style={styles.contents}>전주 농촌 스테이 (전북 전주)</Text>
        <Text style={styles.contents}>스마트팜 체험 (강원도 양양)</Text>
        <Text style={styles.contents}>소 키우기 (충남 논산)</Text>
        <Text style={styles.contents}>전주 농촌 스테이 (전북 전주)</Text>
        <CustomButton
          label="게시글 등록"
          variant="outlinedBlack"
          onPress={() => navigation.navigate(mainNavigations.EDITBOARD)}
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

export default BoardHomeScreen;
