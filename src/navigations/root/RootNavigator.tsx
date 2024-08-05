import useAuth from '../../hooks/queries/useAuth';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainStackNavigator from '../stack/MainStackNavigator';

function RootNavigator() {
  const {isLogin} = useAuth();

  return <>{isLogin ? <MainStackNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
