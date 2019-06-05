import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import colors from "../style/Color";
import typo from '../style/Typography';
// components
import Header from '../components/Header';

export default class BoxNotFound extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={[ grid.appWrapper, colors.bg_darkest ]}>
                <View style={ grid.container }>
                    <Header title={ 'Oops!' } />

                    <View style={ [grid.flex_column, ui.t_60] }>
                        <Text style={[ typo.subtitle, ui.b_15, colors.c_light ]}>Box not found</Text>
                        <Text style={[ typo.desc, colors.c_medium ]}>Make sure to use correct keys. They must follow up correct language, characters and/or numbers, capitalization, order stc.</Text>
                    </View>

                    <View style={ [grid.flex_column, ui.t_60] }>
                        <Text style={[ typo.text, colors.c_white ]}>You have 5 more attempts for the next 24h.</Text>
                    </View>

                    <View style={ [grid.flex_row, grid.flex_row_v_center, grid.spaceBetween, ui.appFooter] }>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={[ typo.action, colors.c_white ]}>Search again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateBox')}>
                            <Text style={[ typo.action, colors.c_white ]}>Create new box</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

} // BoxNotFound