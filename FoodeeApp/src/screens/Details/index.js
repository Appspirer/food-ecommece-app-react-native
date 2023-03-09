import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Chedder",
        price: 0.79,
        img: Images.cheese
    },
    {
        id: 0,
        name: "Bacon",
        price: 0.59,
        img: Images.bacon
    },
    {
        id: 0,
        name: "Onion",
        price: 0.29,
        img: Images.onion
    },
]

export default function Details({ navigation }) {

    const [quality, setQuality] = useState(5)

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bg}>
                    <View style={styles.header}>
                        <Text style={styles.details_title}>Mr. Cheezy</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            {Icons.Icons({ name: "close_button", height: 44, width: 44 })}
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, zIndex: 1 }}>
                        <View style={styles.text_container}>
                            <Text style={[styles.text_content, {
                                color: Colors.pink,
                            }]}>Classic Taste</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, zIndex: 1 }}>
                        <View style={[styles.text_container, { backgroundColor: Colors.green }]}>
                            <Text style={[styles.text_content, {
                                color: Colors.white,
                            }]}>Bestseller</Text>
                        </View>
                    </View>
                    <Image source={Images.img_details} style={styles.img} />
                </View>
                <Text style={styles.title}>Add More Flavor 🤩</Text>
                <View style={{ height: 220 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                        {data.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={[styles.item, { marginRight: index === data.length - 1 ? 32 : 16 }]}>
                                    <Image source={item.img} style={styles.item_img} />
                                    <Text style={styles.item_text}>{item.name}</Text>
                                    <Text style={styles.item_text}>+ ${item.price.toFixed(2)}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={styles.nitrition_container}>
                    <Text style={styles.nutrition_text}>Nutrition facts</Text>
                    <Text style={styles.nutrition_text2}>650 Cal</Text>
                </View>
                <View style={styles.row}>
                    <View style={{}}>
                        <Text style={styles.gram}>35 g</Text>
                        <Text style={styles.gram_details}>Total Fat (45% DV)</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.gram}>35 g</Text>
                        <Text style={styles.gram_details}>Total Fat (45% DV)</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.gram}>35 g</Text>
                        <Text style={styles.gram_details}>Total Fat (45% DV)</Text>
                    </View>
                </View>
                <Text style={[styles.title, { marginTop: 20 }]}>Description</Text>
                <Text style={styles.description}>Each Mr.Cheezy® with Cheese Bacon burger features thick-cut applewood smoked bacon atop a ¼ lb.</Text>
                <View style={{ height: 180 }} />
            </ScrollView>
            <View style={styles.button_container}>
                <View style={styles.quality_container}>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "minus", height: 24, width: 24 })}
                    </TouchableOpacity>
                    <Text style={styles.quality_text}>{quality}</Text>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "plus", height: 24, width: 24 })}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.add_to_cart}>Add to Cart</Text>
                    <Text style={styles.cart_price}>$27.45</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}