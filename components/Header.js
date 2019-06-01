import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// images
// import boxChain from '../assets/icon.png';
// components
import Button from './Button';

const goBack = (
    <TouchableOpacity>
        <Button
            onPressHandler={ this.addKey }
            iconName={ 'arrow-left' } 
            iconColor={ '#333333' }
            action={ true } />
    </TouchableOpacity>
);

const burnBox = (
    <TouchableOpacity>
        <Button
            onPressHandler={ this.addKey }
            iconName={ 'fire' } 
            iconColor={ '#c9283e' }
            action={ true } />
    </TouchableOpacity>
);

const Header = props => (
    <View style={ [grid.flex_row, grid.flex_row_v_center, ui.appHeader, (props.chatbox ? grid.spaceBetween : '')] }>
        { props.chatbox ? goBack : null }
            <View style={ [grid.flex_row, grid.flex_row_v_center] }>
                {/* <Image style={ ui.appHeader_logo } source={ boxChain } /> */}
                <Text style={ typo.title }>{ props.title }</Text>
            </View>
        { props.chatbox ? burnBox : null }
    </View>
) // Header

export default Header;