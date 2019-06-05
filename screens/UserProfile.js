import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppContext } from "../Provider";
import { http } from "../axiosConfig";
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import colors from "../style/Color";
import typo from '../style/Typography';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

export default class UserProfile extends React.Component {
    static navigationOptions = {
        header: null
    }

    static contextType = AppContext;

    state = {
        newUsername: '',
        error: ''
    } // state

    updateInputState = (value) => {
        this.setState({
            newUsername: value
        })
    }

    editUsername = () => {

    }

    updateUsername = () => {
        if (!this.state.newUsername) {
            return;
        }

        http
            .patch("/user/update", { username: this.state.newUsername })
            .then(response => {
                this.context.setUser(response.data);
                this.updateInputState('');
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
    }

    render() {
        return (
            <View style={[ grid.appWrapper, colors.bg_darkest ]}>
                <View style={grid.container}>
                    <Header title={'User Profile'} />

                    <View style={[grid.flex_column, ui.t_30]}>
                        <Image source={{ uri: this.context.avatar }} style={ui.profilePic} />
                        <Text style={[typo.info, ui.t_30, ui.b_15, colors.c_medium]}>Set or Change Your Identity.</Text>
                        <Input
                            value={this.state.newUsername}
                            onChangeText={(value) => this.updateInputState(value)}
                            placeholder={this.context.username} />
                        <View style={[grid.flex_row, grid.flex_row_end]}>
                            <Button
                                onPressHandler={this.updateUsername}
                                valid={true}
                                iconName={'check'}
                                iconColor={'#ffffff'} />
                            <Button
                                onPressHandler={this.editUsername}
                                iconName={'pen'}
                                iconColor={'#ffffff'} />
                        </View>
                    </View>

                    {this.state.error ? <Text>{this.state.error}</Text> : null}

                    <View style={[grid.flex_row, grid.flex_abs_center, ui.appFooter]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                            <Text style={[typo.action, colors.c_white]}>Settings</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // UserProfile