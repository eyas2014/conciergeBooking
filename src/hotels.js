import React, { Component } from 'react';
import { View, Text, FlatList, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements'



class Hotel extends Component {

    render(){
        var {name, pic, price, stars}=this.props.hotel;
        var star_array=[];
        for(var i=0; i<stars; i++){
            star_array.push(<Icon key={i} name="star"></Icon>);
        }
        return(
            <View style={{    flex: 1, flexDirection: 'row', marginBottom:20}}>
                <View style={{width: '40%'}}>
                    <Image style={{width: '100%'}}  source={require("../img/c.jpg")} />
                    <Button style={{width: '100%'}} title='book' onPress={()=>this.props.navigation.navigate('Book', {hotelName:name, price})}>
                        <Text>Book</Text>
                    </Button>
                </View>
                <View style={{width: '45%', marginLeft:  10}}>
                    <Text style={{fontSize:18}}>{name}</Text>
                    <Text  style={{fontSize:18}}>Price: {price}</Text>
                    <View style={{    flex: 1, flexDirection: 'row'}}>
                        <Text  style={{fontSize:18}}>Star:</Text>{star_array}
                    </View>
                </View>
            </View>

        )


    }


}

class Hotels extends Component {
    static navigationOptions = {
        header: null,
    };

    render () {

        var hotels=[
            {name: "Hyatt Place Chicago-South",
            price: 56,
            distance: 2,
            stars: 1.5,
            pic: "https://deepseqview.000webhostapp.com/a.jpg"
            },
            {name: "Sophy Hyde Park",
            price: 234,
            distance: 1,
            stars: 4.5,
            pic: "https://deepseqview.000webhostapp.com/b.jpg"
            },
            {name: "Park Hyatt - Chicago",
            price: 229,
            distance: 4,
            stars: 4,
            pic: "https://deepseqview.000webhostapp.com/c.jpg"
            },
            {name: "Congress Plaza Hotel",
            price: 199,
            distance: 5,
            stars: 3,
            pic: "https://deepseqview.000webhostapp.com/d.jpg"
            },
            {name: "Silversmith Hotel Chicago Downtown",
            price: 180,
            distance: 10,
            stars: 4,
            pic: "https://deepseqview.000webhostapp.com/e.jpg"
            },
            {name: "Kimpton Hotel Allegro",
            price: 129,
            distance: 21,
            stars: 3.5,
            pic: "https://deepseqview.000webhostapp.com/f.jpg"
            },
            {name: "St. Jane Chicago",
            price: 110,
            distance: 51,
            stars: 2,
            pic: "https://deepseqview.000webhostapp.com/g.jpg"
            },
            {name: "Fairmont Chicago at Millennium Park",
            price: 120,
            distance: 31,
            stars: 3.5,
            pic: "https://deepseqview.000webhostapp.com/h.jpg"
            },
            {name: "Hotel Blake, an Ascend Hotel Collection Member",
            price: 134,
            distance: 17,
            stars: 4,
            pic: "https://deepseqview.000webhostapp.com/i.jpg"
            },
            {name: "Swissotel - Chicago",
            price: 156,
            distance: 16,
            stars: 4,
            pic: "https://deepseqview.000webhostapp.com/j.jpg"
            },
            {name: "Wyndham Grand Chicago Riverfront",
            price: 96,
            distance: 81,
            stars: 3.5,
            pic: "https://deepseqview.000webhostapp.com/k.jpg"
            },
            {name: "Kimpton Hotel Monaco Chicago",
            price: 36,
            distance: 19,
            stars: 2,
            pic: "https://deepseqview.000webhostapp.com/l.jpg"
            },
            {name: "Best Western Grant Park Hotel",
            price: 58,
            distance: 71,
            stars: 2.5,
            pic: "https://deepseqview.000webhostapp.com/m.jpg"
            },
            {name: "Hyatt Regency Chicago",
            price: 86,
            distance: 2,
            stars: 3,
            pic: "https://deepseqview.000webhostapp.com/n.jpg"
            },
            {name: "Palmer House a Hilton Hotel",
            price: 560,
            distance: 21,
            stars: 5,
            pic: "https://deepseqview.000webhostapp.com/o.jpg"
            },
            {name: "Club Quarters Hotel, Central Loop",
            price: 256,
            distance: 11,
            stars: 4.5,
            pic: "https://deepseqview.000webhostapp.com/c.jpg"
            },
            {name: "Hilton Chicago- Michigan Ave Cultural Mile",
            price: 87,
            distance: 7,
            stars: 4,
            pic: "https://deepseqview.000webhostapp.com/a.jpg"
            },
            {name: "River Hotel",
            price: 56,
            distance: 3,
            stars: 3,
            pic: "https://deepseqview.000webhostapp.com/i.jpg"
            } ];


        hotels=hotels.filter((item)=>{
            var containsName, inDistanceRange, inStarsRange, inPriceRange;
            var name=item.name.toLowerCase();
            var searchString=this.props.navigation.getParam('name').toLowerCase();
            if(searchString==='')containsName=true;
            else containsName=name.indexOf(searchString)>-1;
            inPriceRange=item.price>=this.props.navigation.getParam('priceMin')&&item.price<this.props.navigation.getParam('priceMax');
            inDistanceRange=item.distance<=this.props.navigation.getParam('distance');
            inStarsRange=item.stars>this.props.navigation.getParam('starsMin')-0.1&&item.stars<this.props.navigation.getParam('starsMax')+0.1;
            return containsName&&inDistanceRange&&inStarsRange&&inPriceRange;
        });

        return (
        <View style={{ flex: 1, paddingBottom: 30, paddingLeft: 30}}>
            <FlatList  style={{ paddingTop: 30}}
                data={hotels}
                keyExtractor={(item, index)=>index.toString()}
                renderItem={({item}) => <Hotel hotel={item} navigation={this.props.navigation}/>}
            />
           
        </View>);
    }
}

export {Hotels}