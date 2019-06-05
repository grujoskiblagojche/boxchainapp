import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import validate from '../utility/validation';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import colors from "../style/Color";
import typo from '../style/Typography';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

export default class ResetPassword extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        form: {
            email: {
                value: '',
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            }
        }
    } // state

    updateInputState = (key, value) => {
        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [key]: {
                        ...prevState.form[key],
                        value: value,
                        valid: validate(value, prevState.form[key].validationRules),
                        touched: true
                    }
                }
            }
        })
    }

    resetPassword = () => {
        const { email, password } = this.state.form;
        if (!email.valid || !password.valid) {
            return;
        }
        // ping api for login user
        this.goTo('Main');
    }

    goTo = url => {
        this.props.navigation.navigate(url);
    }

    render() {
        return (
            <View style={[ grid.appWrapper, colors.bg_darkest ]}>
                <View style={ grid.container }>
                    <Header title={ 'Reset Password' } />

                    <View style={ [grid.flex_column, grid.flex_column_v_center] }>
                        <TouchableOpacity>
                            <Text style={ [typo.info, ui.l_15, ui.b_15, colors.c_medium] }>Please check your email after submitting.</Text>
                        </TouchableOpacity>
                        <Input
                            value={ this.state.form.email.value }
                            onChangeText={ (value) => this.updateInputState('email', value) }
                            placeholder={ 'email' }
                            valid={ this.state.form.email.valid }
                            touched={ this.state.form.email.touched } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            <Button
                                onPressHandler={ this.resetPassword }
                                iconName={ 'arrow-right' } 
                                iconColor={ '#ffffff' } />
                        </View>                        
                    </View>

                    <View style={ [grid.flex_column, grid.flex_column_h_center, ui.appFooter] }>
                        <Text style={ [typo.desc, ui.b_15, colors.c_medium] }>Remember your password ?</Text>
                        <TouchableOpacity onPress={() => this.goTo('LogIn') }>
                            <Text style={ [typo.action, colors.c_white] }>Authenticate</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // ResetPassword