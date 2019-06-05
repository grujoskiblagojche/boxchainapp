import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// styles
import ui from '../style/Ui';
import grid from '../style/Grid';
import colors from "../style/Color";
import typo from '../style/Typography';

import AppIcon from './AppIcon';

const Key = props => (
    <View style={ [grid.flex_row, grid.spaceBetween, ui.appKey] }>
        <View style={ [grid.flex_row, grid.flex_row_v_center] }>
            <AppIcon
                name = { 'key' }
                color = { '#212121' }
                size = { 18 } />
            <Text style={ [typo.text, ui.l_15, colors.c_white] }>{ props.secret }</Text>
        </View>
        <View style={ [grid.flex_row, grid.flex_abs_center, ui.removeKey] }>
            <TouchableOpacity onPress={ props.onKeyDelete }>
                <AppIcon
                    name = { 'times' }
                    color = { '#c9283e' }
                    size = { 18 } />
            </TouchableOpacity>
        </View>
    </View>
) // Key

export default Key;