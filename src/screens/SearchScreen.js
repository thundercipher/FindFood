import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    //console.log(results);
    const filterResultsByPrice = (price) => {

        //price === '$' || '$$' || '$$$'

        return (results.filter((results) => { return (results.price === price);}));
    };

    return (

        //instead of using this flex property in view to make sure that all the elements it contains are fully displayed on the 
        //screen, we can use an empty tag <> to replace the <View> tags below -> (it'll function in the same way!)

        <View style={{flex: 1}}>
            
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}    //can just write {setTerm} here since parameter = argument
                onTermSubmit={() => searchAPI(term)}       
            />
            
            {errorMessage?(<Text>{errorMessage}</Text>):null}
            <Text> We have found {results.length} results </Text>

            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;