import React from 'react';
import {View ,  TextInput ,StyleSheet } from 'react-native';
import {Feather} from  '@expo/vector-icons';

const SearchBar = ({term , onTermChange , onTermSubmit })=> {

    return (
    <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
        placeholder="Search" 
        style={styles.inputStyle} 
        value= {term}
        autoCapitalize= 'none'
        autoCorrect={false}
        onChangeText= {onTermChange}
        onEndEditing= {onTermSubmit}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:10,
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius:15,
        marginHorizontal:15,
        flexDirection: 'row',

    },
    inputStyle: {
        borderColor:'black',
        borderWidth:1,
        flex:1,
        fontSize : 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        


    }
});

export default SearchBar ;  