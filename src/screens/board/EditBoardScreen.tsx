import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../navigations/stack/MainStackNavigator';
import {colors, mainNavigations} from '../../constants';
import InputField from '../../components/InputField';
import DatePicker from 'react-native-date-picker';
import {pickPlace} from 'react-native-place-picker';

type EditBoardScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.EDITBOARD
>;

function EditBoardScreen({navigation}: EditBoardScreenProps) {
  const [address, setAddress] = useState('주소를 선택하세요...');
  const [date1, setDate1] = useState(new Date());
  const [openDate1, setOpenDate1] = useState(false);
  const [date2, setDate2] = useState(new Date());
  const [openDate2, setOpenDate2] = useState(false);

  return (
    <ScrollView>
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
        <View style={styles.buttonContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>제목</Text>
          </View>
          <InputField placeholder="내용을 입력하세요..." />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>주소</Text>
          </View>
          <InputField placeholder={address} editable={false} />
          <CustomButton
            label="주소 선택하기"
            variant="outlinedBlack"
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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>최대인원</Text>
          </View>
          <InputField placeholder="내용을 입력하세요..." />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>날짜</Text>
          </View>
          <InputField
            placeholder={
              date1.toString().split(' ').slice(1, 4).join(' ').toString() +
              ' ~ ' +
              date2.toString().split(' ').slice(1, 4).join(' ').toString()
            }
            editable={false}
          />
          <CustomButton
            label="시작 및 종료 날짜 선택"
            variant="outlinedBlack"
            onPress={() => setOpenDate1(true)}
          />
          <DatePicker
            modal
            open={openDate1}
            date={date1}
            mode="date"
            onConfirm={date => {
              setOpenDate1(false);
              setDate1(date);
              setOpenDate2(true);
            }}
            onCancel={() => {
              setOpenDate1(false);
            }}
          />
          <DatePicker
            modal
            open={openDate2}
            date={date2}
            mode="date"
            onConfirm={date => {
              setOpenDate2(false);
              setDate2(date);
            }}
            onCancel={() => {
              setOpenDate2(false);
            }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>내용</Text>
          </View>
          <InputField multiline={true} placeholder="내용을 입력하세요..." />
          <CustomButton
            label="게시글 작성"
            variant="outlinedBlack"
            onPress={() => navigation.navigate(mainNavigations.BOARDHOME)}
          />
          <CustomButton
            label="뒤로가기"
            variant="outlinedBlack"
            onPress={() => navigation.navigate(mainNavigations.BOARDHOME)}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
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
    marginTop: 10,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
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
