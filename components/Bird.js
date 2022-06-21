import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import logo from '../assets/bird2.jpg'; 


const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50
    const birdHeight = 50

    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'blue',
            // backgroundImage:src="./assets/"
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
            borderRadius:50,            
        }}>
             <Image source={logo} style={{ width: 50, height: 50, backgroundColor:'red' }} /> 
        </View>

    )
}

export default Bird