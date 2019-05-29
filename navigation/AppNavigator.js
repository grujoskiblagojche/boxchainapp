import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from '../screens/AuthLoading';
import AuthNavigator from './AuthNavigator';
import TabsNavigator from './TabsNavigator';

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoading,
            Auth: AuthNavigator,
            Main: TabsNavigator
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);