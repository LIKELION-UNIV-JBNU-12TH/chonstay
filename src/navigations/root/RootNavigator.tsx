import useAuth from '../../hooks/queries/useAuth';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainStackNavigator from '../stack/MainStackNavigator';

function RootNavigator() {
  const {isLogin} = useAuth();
  // const isLogin = true;

  return <>{isLogin ? <MainStackNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
