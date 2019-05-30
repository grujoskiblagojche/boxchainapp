import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// images
import Avatar from '../assets/avatar.png';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

export default class UserProfile extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        username: '',
        newUsername: ''
    } // state

    updateInputState = (value) => {
        this.setState({
            username: value
        })
    }

    editUsername = () => {

    }

    updateUsername = () => {

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
                        <Input
                            value={ this.state.username.value }
                            onChangeText={ (value) => this.updateInputState(value) }
                            placeholder={ 'My identity' } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            <Button
                                onPressHandler={ this.updateUsername }
                                action={ true }
                                iconName={ 'check' } 
                                iconColor={ '#ffffff' } />
                            <Button
                                onPressHandler={ this.editUsername }
                                iconName={ 'pen' } 
                                iconColor={ '#ffffff' } />
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