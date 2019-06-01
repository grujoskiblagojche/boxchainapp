import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import validate from '../utility/validation';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

import { http, setAuthorizationToken } from '../axiosConfig';

export default class LogIn extends React.Component {
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

    login = () => {
        const { email, password } = this.state.form;
        if (!email.valid || !password.valid) {
            return;
        }

        http.post("/auth/login", { email: email.value, password: password.value })
            .then(response => {
                
                this.goTo("Main");
                
            })
            .catch(error => {
                this.setState({ error: "Ne e ubo" })
            })
    }

    goTo = url => {
        this.props.navigation.navigate(url);
    }
    
    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'Authenticate' } />

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
                        <View style={ [grid.flex_row, grid.spaceBetween] }>
                            <TouchableOpacity onPress={ () => this.goTo('ResetPassword') }>
                                <Text style={ [typo.info, ui.l_15] }>Forgot your password?</Text>
                            </TouchableOpacity>
                            <Button
                                onPressHandler={ this.login }
                                iconName={ 'arrow-right' } 
                                iconColor={ '#ffffff' } />
                        </View>                        
                    </View>

                    <View style={ [grid.flex_column, grid.flex_column_h_center, ui.appFooter] }>
                        <Text style={ [typo.info, ui.b_15] }>Don't have an account ?</Text>
                        <TouchableOpacity onPress={ () => this.goTo('Register') }>
                            <Text style={ [typo.action] }>Create Now</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // LogIn
