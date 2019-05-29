import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// components
import Header from '../components/Header';

export default class BannedProfile extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'Banned Profile' } />

                    <View style={ [grid.flex_column, ui.t_60] }>
                        <Text style={ [typo.subtitle, ui.b_15] }>Your profile has been banned for the next 24 hours.</Text>
                        <Text style={ typo.text }>- "Suspicious profile usage".</Text>
                    </View>

                </View>
            </View>
        )
    }

} // BannedProfile