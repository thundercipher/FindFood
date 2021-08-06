import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ResultsDetail = ({result}) => {

    return (

        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
            <Text style={styles.nameStyle}> {result.name}</Text>
            <Text> {result.rating} stars, {result.review-count} reviews </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    viewStyle: {

        marginLeft: 10
    },

    imageStyle: {

        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },

    nameStyle: {

        fontWeight: 'bold'
    }
});

export default ResultsDetail;