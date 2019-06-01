import React from 'react';
import { View, FlatList } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import typo from '../style/Typography';
// components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Message from '../components/Message';

export default class ChatBox extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        message: '',
        chat: []
    } // state

    updateInputState = value => {
        this.setState({
            message: value
        })
    }

    sendMessage = () => {
        if (this.state.message.trim() === '') {
            return;
        }
        this.setState(prevState => {
            return {
                message: '',
                chat: prevState.chat.concat({
                    key: Math.random(),
                    message: prevState.message
                })
            }
        })
    }

    render() {
        return (
            <View style={ grid.appWrapper }>
                <View style={ grid.container_full }>
                    
                    <Header title={ 'Chat Box' } chatbox={ true } />
                    
                    <View style={ [grid.flex_column, ui.t_15] }>
                        <FlatList
                            contentContainerStyle={ [grid.flex_column, grid.flex_row_end, ui.chatContainer] }
                            data={ this.state.chat }
                            renderItem={(info) => (
                                <Message message={ info.item } />
                            )} ></FlatList>
                    </View>

                    <View style={ [grid.flex_row, grid.flex_row_v_center, grid.spaceBetween, ui.appWrite] }>
                        <Input
                            inChat={ true }
                            value={ this.state.message }
                            onChangeText={ (value) => this.updateInputState(value) }
                            placeholder={ 'Write your message..' }
                            valid={ this.state.message } />
                        <Button
                            onPressHandler={ this.sendMessage }
                            iconName={ 'arrow-right' } 
                            iconColor={ '#ffffff' } />
                    </View>

                </View>
            </View>
        )
    }

} // ChatBox