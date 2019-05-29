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

export default class CreateBox extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container }>

                    <Header title={ 'Create Box' } />

                    <View style={ [grid.flex_column, ui.t_60, ui.cockpit] }>
                        <Text style={ [typo.info, ui.b_15] }>Enter your security keys and keep them safe</Text>
                        <Input value={ '' } placeholder={ '#1 key' } />
                        <View style={ [grid.flex_row, grid.flex_row_end] }>
                            <Button icon={ CheckIcon } action={ true } />
                            <Button icon={ ArrowIcon } />
                        </View>                        
                    </View>

                    <View style={ [grid.flex_column, ui.t_15] }>
                        <Key index={ 1 } secret={ 'Struga' } />
                        <Key index={ 2 } secret={ 'Ohrid' } />
                        <Key index={ 3 } secret={ 'Bitola' } />
                        <Key index={ 4 } secret={ 'Skopje' } />
                        <Key index={ 5 } secret={ 'Veles' } />
                        <Key index={ 6 } secret={ 'Prilep' } />
                    </View>

                </View>
            </View>
        )
    }

} // CreateBox