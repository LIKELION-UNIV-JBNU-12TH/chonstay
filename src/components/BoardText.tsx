import {StyleSheet, Text} from 'react-native';
import {BoardScreenProps} from '../screens/board/BoardHomeScreen';
import {mainNavigations} from '../constants';

function BoardText(text: string, {navigation}: BoardScreenProps) {
  return (
    <Text
      style={styles.contents}
      onPress={() => navigation.navigate(mainNavigations.BOARD)}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  contents: {
    fontSize: 16,
    fontFamily: 'NotoSerifKR-Bold',
  },
});
