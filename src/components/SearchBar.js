import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (

        <View style={styles.backgroundStyle}>

            <Feather name="search" style={styles.iconStyle}/>
            
            <TextInput 
                placeholder = "Search" 
                autoCapitalize = "none"
                autoCorrect = {false}
                style = {styles.inputStyle}
                value = {term}
                onChangeText = {(newTerm) => onTermChange(newTerm) /*can also be written as just-> onTermChange*/} 
                onEndEditing = {() => onTermSubmit()}
            />

        </View>
    );
};

//placeholder prop in the TextInput is ~ hint attribute in EditText in android

const styles = StyleSheet.create({

    backgroundStyle: {

        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 7,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10
    },

    inputStyle: {

        fontSize: 18,
        flex: 1
    },

    iconStyle: {

        fontSize: 37,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

//fontSize can be used to control the size of the icon
//default fontSize value = 14

export default SearchBar;