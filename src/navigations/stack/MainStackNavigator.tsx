import HomeScreen from '../../screens/home/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {mainNavigations} from '../../constants';
import BoardHomeScreen from '../../screens/board/BoardHomeScreen';
import MyPageHomeScreen from '../../screens/myPage/MyPageHomeScreen';
import BoardScreen from '../../screens/board/BoardScreen';
import EditBoardScreen from '../../screens/board/EditBoardScreen';
import EditPersonalInfoScreen from '../../screens/myPage/EditPersonalInfoScreen';
import VisitRecordScreen from '../../screens/myPage/VisitRecordScreen';

export type MainStackParamList = {
  [mainNavigations.HOME]: undefined;
  [mainNavigations.BOARDHOME]: undefined;
  [mainNavigations.BOARD]: undefined;
  [mainNavigations.EDITBOARD]: undefined;
  [mainNavigations.MYPAGE]: undefined;
  [mainNavigations.EDITPERSONALINFO]: undefined;
  [mainNavigations.VISITRECORD]: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BoardHome"
        component={BoardHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Board"
        component={BoardScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditBoard"
        component={EditBoardScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPageHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditPersonalInfo"
        component={EditPersonalInfoScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VisitRecord"
        component={VisitRecordScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
