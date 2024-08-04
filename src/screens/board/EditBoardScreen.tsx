import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {mainNavigations} from '../../constants';
import InputField from '../../components/InputField';

type EditBoardScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.EDITBOARD
>;

function EditBoardScreen({navigation}: EditBoardScreenProps) {
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
        <Text style={styles.headerText}>게시글 작성</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.image, styles.mainImage]}
        source={require('../../assets/farming.jpeg')}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>위치</Text>
        </View>
        <CustomButton label="위치 선택하기" variant="outlinedBlack" />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>내용</Text>
        </View>
        <InputField placeholder="내용을 입력하세요..." />
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

export default EditBoardScreen;
