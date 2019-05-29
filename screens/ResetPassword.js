import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// images
import ArrowIcon from '../assets/arrow.png';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

export default class ResetPassword extends React.Component {
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

                    <Header title={ 'Reset Password' } />

                    <View style={ [grid.flex_column, grid.flex_column_v_center] }>
                        <TouchableOpacity>
                            <Text style={ [typo.info, ui.l_15, ui.b_15] }>Forgot your password?</Text>
                        </TouchableOpacity>
                        <Input value={ '' } placeholder={ 'email' } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            <Button icon={ ArrowIcon } />
                        </View>                        
                    </View>

                    <View style={ [grid.flex_column, grid.flex_column_h_center, ui.appFooter] }>
                        <Text style={ [typo.info, ui.b_15] }>Remember your password ?</Text>
                        <TouchableOpacity onPress={() => this.goTo('LogIn') }>
                            <Text style={ [typo.action] }>Authenticate</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // ResetPassword