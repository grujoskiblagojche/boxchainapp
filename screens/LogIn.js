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

export default class LogIn extends React.Component {
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

                    <Header title={ 'Authenticate' } />

                    <View style={ [grid.flex_column, grid.flex_column_v_center] }>
                        <Input value={ '' } placeholder={ 'email' } />
                        <Input value={ '' } placeholder={ 'password' } />
                        <View style={ [grid.flex_row, grid.spaceBetween] }>
                            <TouchableOpacity onPress={ () => this.goTo('ResetPassword') }>
                                <Text style={ [typo.info, ui.l_15] }>Forgot your password?</Text>
                            </TouchableOpacity>
                            <Button
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
