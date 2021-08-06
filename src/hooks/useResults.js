import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default() => {

    const [results, setResults] = useState([]);     //empty array (it'll store objects)
    const [errorMessage, setErrorMessage] = useState('');

    //since the API fetching is an asynchronous function, we need to make a 'promise' that we'll handle the API call results
    const searchAPI = async (searchTerm) => {

        try {

            //this gets concatenaded to the base URL in the API file
            const response = await yelp.get('/search', {
        
                params: {       //this contains the parameters defined on the API website which refines the API call

                    limit: 30,
                    term: searchTerm,
                    location: 'San Jose'
                }
            });  
        
        
            //response.data === contains the entire JSON data
            //but the result we need is an array of objects contained in the 'businesses'  prop inside this JSON data, thus ->

            setResults(response.data.businesses);
        }

        catch(e) {

            console.log(e);
            setErrorMessage('Something went wrong!');
        }
       
    };

    useEffect(() => {

        searchAPI('pasta');        //to fetch the default content on the app screen when the app is opened for the first time

    }, []);

    return [searchAPI, results, errorMessage];
};