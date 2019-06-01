import { createStackNavigator } from 'react-navigation';

import LogIn from '../screens/LogIn';
import Register from '../screens/Register';
import ResetPassword from '../screens/ResetPassword';

import ChatBox from '../screens/ChatBox';

export default createStackNavigator({
    LogIn: ChatBox,
    // LogIn: LogIn,
    Register: Register,
    ResetPassword: ResetPassword
});