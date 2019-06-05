import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from '../screens/AuthLoading';
import AuthNavigator from './AuthNavigator';
import TabsNavigator from './TabsNavigator';

import ChatBox from "../screens/ChatBox";
import BoxNotFound from "../screens/BoxNotFound";
import Settings from "../screens/Settings";
import BannedProfile from "../screens/BannedProfile";

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoading,
            Auth: AuthNavigator,
            Main: TabsNavigator,

            ChatBox: ChatBox,
            BoxNotFound: BoxNotFound,
            BannedProfile: BannedProfile,
            Settings: Settings
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);