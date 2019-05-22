import React, { Component } from 'react';
import {View, Text, FlatList, Button, Image, Picker, TextInput} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {DataInput} from './components';


export default class Search extends Component {
  static navigationOptions = {
    header: null,
  };


    constructor(props){
        super(props);
        this.state={
            priceMin:0,
            priceMax:1000,
            starsMin:0,
            starsMax:5,
            distance:50,
            name: '',
        }
    }

    render() {
      return (
            <View style={{marginTop:120, height:500, marginLeft: 50, marginRight: 50}}>
                <Image style={{position:'absolute', top:-70, left: '50%'}} source={require('../img/icon8Logo.png')} />
                <Image style={{position:'absolute', top:-110, right: -90, width:210, height:350}} source={require('../img/palmtree.png')} />
                <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>Hotel Name</Text>
                    <TextInput style={{width: 200, fontSize:24, borderBottomWidth:2}} 
                        onChangeText={(name) => this.setState({name})}
                    />
                </View>
                <View style={{flex:0.6, flexDirection: 'row', justifyContent: 'flex-start', width: 300}}>
                    <View style={{flex:1, width: 100}}>
                        <Text style={{fontSize: 20}}>Distance: </Text>
                    </View>
                    <Picker
                        selectedValue={this.state.distance}
                        style={{height: 30, flex:1, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({distance: itemValue})
                        }>
                        <Picker.Item label="5 miles" value={5} />
                        <Picker.Item label="10 miles" value={10} />
                        <Picker.Item label="25 miles" value={25} />
                        <Picker.Item label="50 miles" value={50} />
                        <Picker.Item label="100 miles" value={100} />
                    </Picker>
                </View>
                <View  style={{flex:1,width: 300}}>
                    <Text style={{fontSize:20}}>Stars: from {this.state.starsMin} to { this.state.starsMax} </Text>
                    <MultiSlider values={[this.state.starsMin,  this.state.starsMax]} min={0} max={5} step={0.5}
                        onValuesChange={ (value) =>this.setState({starsMin: value[0], starsMax: value[1]}) }
                    />
                </View>
                <View  style={{flex:1,width: 300}}>
                    <Text style={{fontSize: 20}}>Price: from {this.state.priceMin} to { this.state.priceMax} </Text>
                    <MultiSlider enableTwo={true} values={[this.state.priceMin, this.state.priceMax]} min={10} max={1000} step={20}
                        onValuesChange={ (value) =>this.setState({priceMin: value[0], priceMax: value[1]}) }
                    />
                </View>

                <View style={{flex: 1, alignItems: 'center'}}>
                    <View  style={{width:100 }}>
                    <Button title="Search" onPress={()=>this.props.navigation.navigate('Hotels', this.state)}></Button>
                    </View>
                </View>
            </View>
        )

    }
}
 