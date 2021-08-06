import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, navigation}) => {

    if(!results.length)
    {
        return null;
    }

    return (

        <View style={styles.viewStyle}>

            <Text style={styles.titleStyle}> {title} </Text>
            
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {

                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ResultsShow', {id: item.id /* this is like intent */})}}> 
                            
                            <ResultsDetail result={item}/> 
                        </TouchableOpacity>

                    );
                }}
            />
        
        </View>
    );
};

//for a prop with a boolean value (like horizontal), we can just write the name of the prop there, to signify that its value is true

const styles = StyleSheet.create({

    titleStyle : {

        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },

    viewStyle: {

        marginLeft: 10
    }
});

export default withNavigation(ResultsList);