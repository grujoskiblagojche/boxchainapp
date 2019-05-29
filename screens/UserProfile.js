import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// images
import ArrowIcon from '../assets/arrow.png';
import CheckIcon from '../assets/check.png';
import Avatar from '../assets/avatar.png';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

export default class UserProfile extends React.Component {
    static navigationOptions = {
        header: null
    }

    goTo = url => {
        this.props.navigation.navigate(url);
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'User Profile' } />

                    <View style={ [grid.flex_column, ui.t_30] }>
                        <Image source={ Avatar } style={ ui.profilePic } />
                        <Text style={ [typo.info, ui.t_30, ui.b_15] }>Set or change your identity</Text>
                        <Input value={ 'b.grujoski' } placeholder={ 'Set your identity' } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            <Button icon={ CheckIcon } action={ true } />
                            <Button icon={ ArrowIcon } />
                        </View>
                    </View>

                    <View style={ [grid.flex_row, grid.flex_abs_center, ui.appFooter] }>
                        <TouchableOpacity onPress={() => this.goTo('Settings') }>
                            <Text style={ [typo.action] }>Settings</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // UserProfile