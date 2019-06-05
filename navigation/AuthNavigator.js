import { createStackNavigator } from 'react-navigation';

import LogIn from '../screens/LogIn';
import Register from '../screens/Register';
import ResetPassword from '../screens/ResetPassword';

export default createStackNavigator({
    LogIn: LogIn,
    Register: Register,
    ResetPassword: ResetPassword
});