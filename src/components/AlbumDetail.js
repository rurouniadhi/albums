import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {
        title, 
        artist,
        url, 
        thumbnail_image, 
        image
    } = album;
    const{
        imageStyle, 
        headerStyle, 
        textStyle, 
        thumbnailStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image}}/>
                </View>
                <View style={headerStyle}>
                    <Text style={textStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri:image}}
                    />
            </CardSection>
            <CardSection>
                <Button onPress={()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>    
    );  
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#000000'
    },
    headerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    thumbnailStyle:{
        width: 50 ,
        height: 50,
        marginRight: 5
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    },
    
    
}

export default AlbumDetail;