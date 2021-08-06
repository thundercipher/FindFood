import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {

    const [result,setResult] = useState(null);      //no data object initially (we use null in case of objects)
    const id = navigation.getParam('id');   //this is ~ receiving the intent's value with the help of its key
    //console.log(id);
    //console.log(result);

    //to get the info about the restaurant with the help of the id
    const getResult = async (id) => {

        const response = await yelp.get(`/${id}`);  
        setResult(response.data);
    };

    useEffect(() => {

        getResult(id);
    }, []);                 //because we want the screen to render just once

    if(!result)
    {
        return null;
    }

    return (

        <View>
            <Text>{result.name}</Text>

            <FlatList
                data = {result.photos}
                keyExtractor = {(photo) => {photo}}
                renderItem = {(item) => {return (<Image style={styles.imageStyle} source = {{uri: item}}/>);}}
            />

        </View>
    );
};

const styles = StyleSheet.create({

    imageStyle: {

        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;