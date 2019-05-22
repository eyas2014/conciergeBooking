import React, { Component } from 'react';
import { View, Text, FlatList, Button, Image, TextInput, Animated } from 'react-native';
import DatePicker from 'react-native-datepicker';



class Book extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state={
            checkInDate: '2019-05-18',
            checkOutDate: '2019-08-18',
            dateOfBirth: '1900-01-01',
            hotelName: props.navigation.getParam('hotelName'),
            price: props.navigation.getParam('price'),
            guestName:''
        }
    }

    render(){
        return(
            <View style={{paddingTop:60, alignItems: 'center', width:"100%", height: 550}}>
                        <Animated.Image style={{position: 'absolute', top:30}} source={require('../img/icon8Logo.png')}  />
            <Animated.Image style={{position: 'absolute', left:0, height: 230, top: 230, width: 120}} source={require('../img/imgBeans.png')}  />
            <Animated.Image style={{position: 'absolute', right:0, height: 75, top: 380, width: 100}} source={require('../img/imgMat.png')}  />
            <Animated.Image style={{position: 'absolute', right:0, height: 200, top: 230, width: 100}} source={require('../img/imgDumbbell.png')}  />

                <View style={{flex:1, paddingTop:30, width: '40%'}}>
                    <Text style={{textAlign: 'center', fontSize:24}}>Guest Name</Text>
                    <TextInput style={{width: '100%', fontSize:24, borderBottomWidth: 1,  paddingTop:0, paddingBottom:0, lineHeight: 24}}
                        onChangeText={(guestName) => this.setState({guestName:guestName})}
                    />
                </View>
                <View style={{flex:1, paddingTop:30, width: '40%'}}>
                    <Text style={{textAlign: 'center', fontSize:24}}>Date of Birth</Text>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.dateOfBirth}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1900-05-01"
                        maxDate="2020-05-18"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            right: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginRight: 40
                          }
                        }}
                        onDateChange={(date) => this.setState({dateOfBirth:date}) }
                    />
                </View>
                <View style={{flex:1,  paddingTop:15, width: '40%'}}>
                    <Text style={{textAlign: 'center', fontSize:24}}>Check In</Text>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.checkInDate}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2019-05-01"
                        maxDate="2020-05-18"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            right: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginRight: 40
                          }
                        }}
                        onDateChange={(date) => this.setState({checkInDate:date}) }
                    />
                </View>
                <View style={{flex:1, paddingTop:15, width: '40%'}}>
                    <Text style={{textAlign: 'center', fontSize:24}}>Check Out</Text>
                                        <DatePicker
                        style={{width: 200}}
                        date={this.state.checkOutDate}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2019-05-01"
                        maxDate="2020-05-18"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            right: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginRight: 40
                          }
                        }}
                        onDateChange={(date) =>this.setState({checkOutDate:date})}
                    />
                </View>

                
                <View style={{flex:1, paddingTop:30}}>
                    <Button style={{width: "20%" , fontSize:24}} title='book' onPress={()=>this.props.navigation.navigate('Done', this.state)}><Text>Book</Text></Button>
                </View>
            </View>

        )


    }


}



export {Book}