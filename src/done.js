import React, { Component } from 'react';
import {Animated, View, Text, FlatList, Button, Image} from 'react-native';


export default class Done extends Component {
  static navigationOptions = {
    header: null,
  };


    render() {
        var {guestName, checkInDate, checkOutDate, dateOfBirth, hotelName, price}=this.props.navigation.state.params;

        var _checkInDate=new Date(checkInDate);
        var _checkOutDate=new Date(checkOutDate);
        var days=(_checkOutDate-_checkInDate)/(24*3600*1000);

      return (
        <View>
            <Animated.Image style={{position: 'absolute', height: 200, width: '100%'}} source={require('../img/tree.jpg')}  />
            <View style={{paddingTop: 220, paddingLeft: 50}}>
                <Text style={{fontSize: 20}}> You successfully made the reservation</Text>
                <Text style={{fontSize: 20, paddingTop:30}}> Guest Name: {guestName}</Text>
                <Text style={{fontSize: 20}}> Date of Birth: {dateOfBirth}</Text>
                <Text style={{fontSize: 20}}> Hotel Name: {hotelName}</Text>
                <Text style={{fontSize: 20}}> Check In Date: {checkInDate}</Text>
                <Text style={{fontSize: 20}}> Check Out Date: {checkOutDate}</Text>
                <Text style={{fontSize: 20}}> Total Price: ${days*price}</Text>
                <View style={{width: 120, marginLeft: 80, marginTop: 40}}>
                <Button title="Back to Search" onPress={()=>this.props.navigation.navigate('Search')}>
                </Button>
                </View>
            </View>

        </View>)

    }
}
 


