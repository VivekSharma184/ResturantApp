import { useEffect , useState } from 'react';
import yelp from '../api/yelp';


export default () => {

    const [results , setResults] = useState([]);
    const [errorMessage  , setErrorMessage] = useState('');
    
    const searchApi = async(searchTerm) => {
        try  {
        const response = await yelp.get('/search' , {
            params: {
                limit:50 , 
                term : searchTerm ,
                location: 'Washington, DC '
            }
        });

        setResults(response.data.businesses);
    } catch(err) {
        console.log(err);

        setErrorMessage('Oops!, Something went wrong ')
    }
    }

    //call search Api when component is frist rendered 
    // BAD CODE
    // searchApi('pasta');

useEffect( ()=> {
searchApi('meal');
} , [])

return [searchApi ,  results , errorMessage];


};