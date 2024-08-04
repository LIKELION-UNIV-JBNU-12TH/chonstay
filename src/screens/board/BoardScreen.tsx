import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {mainNavigations} from '../../constants';

type BoardScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.BOARD
>;

function BoardScreen({navigation}: BoardScreenProps) {
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
        <Text style={styles.headerText}>소 키우기</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.image, styles.mainImage]}
        source={require('../../assets/farming.jpeg')}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>강원도 양양</Text>
        </View>
        <Text style={styles.contents}>
          안녕하세요, 강원도 양양에서 시골바람을 쐬며 소키우기에 도전해보세요!
          프로그램은 5일동안 운영되며, 직접 소에게 먹이를 주고 농사일을 하도록
          도울 수 있습니다.안녕하세요, 강원도 양양에서 시골바람을 쐬며
          소키우기에 도전해보세요! 프로그램은 5일동안 운영되며, 직접 소에게
          먹이를 주고 농사일을 하도록 도울 수 있습니다.안녕하세요, 강원도
          양양에서 시골바람을 쐬며 소키우기에 도전해보세요! 프로그램은 5일동안
          운영되며, 직접 소에게 먹이를 주고 농사일을 하도록 도울 수 있습니다.
        </Text>
        <CustomButton
          label="뒤로가기"
          variant="outlinedBlack"
          onPress={() => navigation.navigate(mainNavigations.BOARDHOME)}
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

export default BoardScreen;
