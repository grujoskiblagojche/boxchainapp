import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// images
import ArrowIcon from '../assets/arrow.png';
import CheckIcon from '../assets/check.png';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Key from '../components/Key';

export default class FindBox extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'Find Box' } />

                    <View style={ [grid.flex_column, ui.t_60, ui.cockpit] }>
                        <Text style={ [typo.info, ui.b_15] }>Make sure you use correct keys</Text>
                        <Input value={ '' } placeholder={ '#1 key' } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            <Button
                                action={ true }
                                iconName={ 'check' } 
                                iconColor={ '#ffffff' } />
                            <Button
                                iconName={ 'arrow-right' } 
                                iconColor={ '#ffffff' } />
                        </View>
                    </View>

                    <View style={ [grid.flex_column, ui.t_15] }>
                        <Key index={ 1 } secret={ 'Struga' } />
                        <Key index={ 2 } secret={ 'Ohrid' } />
                        <Key index={ 3 } secret={ 'Bitola' } />
                    </View>

                </View>
            </View>
        )
    }

} // FindBox