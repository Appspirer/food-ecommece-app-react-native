import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const cartData = [
    {
        id: 0,
        name: "Mr.Cheezy",
        price: 5.49,
        quality: 5,
        img: Images.cart1
    },
    {
        id: 1,
        name: "Fries M",
        price: 3.29,
        quality: 3,
        img: Images.cart2
    },
    {
        id: 2,
        name: "Vanilla Ice",
        price: 6.99,
        quality: 4,
        img: Images.cart3
    },
    {
        id: 3,
        name: "Americano L",
        price: 1.99,
        quality: 10,
        img: Images.cart4
    },
]

const suggestData = [
    {
        id: 0,
        name: "drink2",
        img: Images.drink2,
        price: 0.79
    },
    {
        id: 0,
        name: "drink3",
        img: Images.drink3,
        price: 0.59
    },
    {
        id: 0,
        name: "icream",
        img: Images.icream,
        price: 0.29
    },
]

export default function PurCharge({ navigation }) {

    const [data, setData] = useState(cartData)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        getTotal(data)
    },[])

    const getTotal=(newData)=>{
        let temp = 0
        for(let i =0; i < newData.length; i++){
            temp = temp + newData[i].price*newData[i].quality
        }
        setTotal(temp)
    }

    const decreaseQuality = (id) => {
        let temp = [...data]
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id && temp[i].quality > 1) {
                temp[i].quality = temp[i].quality - 1
            } else if (temp[i].id === id && temp[i].quality === 1) {
                temp = temp.filter(item => item.id !== id)
            }
        }
        setData(temp)
        getTotal(temp)
    }

    const increaseQuality = (id) => {
        let temp = [...data]
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) {
                temp[i].quality = temp[i].quality + 1
            }
        }
        setData(temp)
        getTotal(temp)
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.details_title}>My Cart</Text>
                    <TouchableOpacity onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'HomeScreen' }]
                    })}>
                        {Icons.Icons({ name: "close_button", height: 44, width: 44 })}
                    </TouchableOpacity>
                </View>
                <View style={styles.status_bar_container}>
                    <View style={styles.title_bar}>
                        <View>
                            <Text style={styles.text_bar}>My Order</Text>
                            <View style={styles.number_bar_container}>
                                <Text style={styles.number_bar}>1</Text>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View style={{ opacity: 0.25 }}>
                            <Text style={styles.text_bar}>Details</Text>
                            <View style={styles.number_bar_container}>
                                <Text style={styles.number_bar}>2</Text>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View style={{ opacity: 0.25 }}>
                            <Text style={styles.text_bar}>Payment</Text>
                            <View style={styles.number_bar_container}>
                                <Text style={styles.number_bar}>3</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.order_text_container}>
                    <Text style={styles.order}>Order</Text>
                    <TouchableOpacity onPress={() => {setData([]), getTotal([])}}>
                        <Text style={styles.clear}>Clear all</Text>
                    </TouchableOpacity>
                </View>
                {data.length === 0  && <Text style={styles.no_item}>No item in Cart</Text>}
                <View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 20, marginTop: 20 }}>
                        {data.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.item}>
                                    <View style={styles.info}>
                                        <Image source={item.img} style={styles.img} />
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.price}>${item.price}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.quality}>
                                        <TouchableOpacity onPress={() => decreaseQuality(item.id)}>
                                            {Icons.Icons({ name: "minus", height: 24, width: 24 })}
                                        </TouchableOpacity>
                                        <Text style={styles.quality_text}>{item.quality}</Text>
                                        <TouchableOpacity onPress={() => increaseQuality(item.id)}>
                                            {Icons.Icons({ name: "plus", height: 24, width: 24 })}
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <Text style={[styles.order, { marginTop: 20, marginLeft: 16 }]}>Don’t Forget ☺</Text>
                <View style={{ height: 220 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                        {suggestData.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={[styles.suggest_item, { marginRight: index === data.length - 1 ? 32 : 16 }]}>
                                    <Image source={item.img} style={styles.item_img} />
                                    <Text style={styles.item_text}>{item.name}</Text>
                                    <Text style={styles.item_text}>+ ${item.price}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={{ height: 120 }} />
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Next Step</Text>
                <Text style={styles.price_button}>${total.toFixed(2)}</Text>
            </TouchableOpacity>
        </View>
    )
}