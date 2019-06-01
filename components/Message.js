import React from 'react';
import { View, Text, Image } from 'react-native';
// images
import Avatar from '../assets/avatar.png';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';

const Message = props => (
    <View style={ [ grid.flex_row, grid.flex_row_end, ui.message ] }>
        <Text>{ props.message.message }</Text>
        <View style={ ui.messagePicHolder }>
            <Image source={ Avatar } style={ ui.messagePic } />
        </View>
    </View>
) // Message

export default Message;