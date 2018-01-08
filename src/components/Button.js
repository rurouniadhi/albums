import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = () => {
    return (
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>BUY</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        width: 100,
        padding: 5,
        marginBottom: 5,
        backgroundColor: '#464646',
        borderRadius: 10

    },
    buttonTextStyle:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }

}

export default Button;