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

export default class ChatBox extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container_full }>
                    
                    <Header title={ 'Chat Box' } chatbox={ true } />
                    
                    <View style={ [grid.flex_column, ui.chatContainer, ui.t_15] }>
                        <Text>text</Text>
                    </View>

                    <View style={ [grid.flex_row, grid.flex_row_v_center, grid.spaceBetween, ui.appWrite] }>
                        <Input value={ '' } placeholder={ 'Write your message..' } inChat={ true } />
                        <Button icon={ ArrowIcon } />
                    </View>

                </View>
            </View>
        )
    }

} // ChatBox