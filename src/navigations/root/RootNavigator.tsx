import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainStackNavigator from '../stack/MainStackNavigator';

function RootNavigator() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
