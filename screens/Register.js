import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import validate from '../utility/validation';
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

export default class Register extends React.Component {
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
            },
            password: {
                value: '',
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            }
        }
    }

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

    register = () => {
        const { email, password } = this.state.form;
        if (!email.valid || !password.valid) {
            return;
        }
        // ping api for registering new user
        this.goTo('Main');
    }

    goTo = url => {
        this.props.navigation.navigate(url);
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'Register' } />

                    <View style={ [grid.flex_column, grid.flex_column_v_center] }>
                        <Input
                            value={ this.state.form.email.value }
                            onChangeText={ (value) => this.updateInputState('email', value) }
                            placeholder={ 'email' }
                            valid={ this.state.form.email.valid }
                            touched={ this.state.form.email.touched } />
                        <Input
                            value={ this.state.form.password.value }
                            onChangeText={ (value) => this.updateInputState('password', value) }
                            placeholder={ 'password' }
                            valid={ this.state.form.password.valid }
                            touched={ this.state.form.password.touched } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            <Button
                                onPressHandler={ this.register }
                                iconName={ 'arrow-right' } 
                                iconColor={ '#ffffff' } />
                        </View>                        
                    </View>

                    <View style={ [grid.flex_column, grid.flex_column_h_center, ui.appFooter] }>
                        <Text style={ [typo.info, ui.b_15] }>Already have an account ?</Text>
                        <TouchableOpacity onPress={() => this.goTo('LogIn') }>
                            <Text style={ [typo.action] }>Authenticate</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // Register