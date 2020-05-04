import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    _onProductSelection=()=>{
        this.props.onProductSelection({
            name: this.props.name,
            image: this.props.image,
            description: this.props.description,
            price: this.props.price
        });
    }

    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <TouchableOpacity onPress={this._onProductSelection}>
            <Image style={styles.image_product} source={this.props.image}/>
            <View style={styles.container_product_data}>
              <Text style={styles.product_name}>{this.props.name}</Text>
              <Text style={styles.product_description}>{this.props.description}</Text>
              <View style={styles.product_price_container}>
                <Text style={styles.product_price_content}>{this.props.price+' €'}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#000',
    },
    image_product: {
        height: 200,
        width: null
    },
    container_product_data: {
        padding: '3%',
        width: '130%'
    },
    product_name: {color: 'black'},
    product_description: {fontSize: 12},
    product_price_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '5%'
    },
    product_price_content: {
        color:'#FF8C00'
    }
});

export default Product;