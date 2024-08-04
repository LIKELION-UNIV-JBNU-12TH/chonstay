import React from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {mainNavigations} from '../../constants';
import InputField from '../../components/InputField';

type EditPersonalInfoScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.EDITPERSONALINFO
>;

function EditPersonalInfoScreen({navigation}: EditPersonalInfoScreenProps) {
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
        <Text style={styles.headerText}>개인정보 수정</Text>
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
        <InputField style={styles.contents} value="namu@namu.com" />
        <InputField
          style={styles.contents}
          value="서울시 동작구 나무동 229-49"
        />
        <InputField style={styles.contents} value="32" />
        <InputField style={styles.contents} value="향도" />
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

export default EditPersonalInfoScreen;
