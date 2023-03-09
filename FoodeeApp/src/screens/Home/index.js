// import React, { useState } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
// import Colors from "../../themes/Colors";
// import Icons from "../../themes/Icons";
// import Images from "../../themes/Images";
// import styles from "./styles";

// const cakeData = [
//     {
//         id: 0,
//         img: Images.cake1,
//         title: "Free Donut!",
//         subTitle: "For orders over $20",
//         bg: Colors.morning_blue
//     },
//     {
//         id: 1,
//         img: Images.cake1,
//         title: "Free Donut!",
//         subTitle: "For orders over $20",
//         bg: Colors.yellow
//     }
// ]

// const categoriesData = [
//     {
//         id: 0,
//         img: Images.burgers,
//         bg: "#FFEF92",
//         name: "Burgers"
//     },
//     {
//         id: 1,
//         img: Images.fries,
//         bg: "#F5CAC3",
//         name: "Fries"
//     },
//     {
//         id: 2,
//         img: Images.drinks,
//         bg: "#B6D7CF",
//         name: "Drinks"
//     },
//     {
//         id: 3,
//         img: Images.burgers,
//         bg: "#A9D7DA",
//         name: "Burgers"
//     },
// ]

// const offerData = [
//     {
//         id: 0,
//         img: Images.hot_dog,
//         name: "Frenchdog",
//         details: "Tasty&Spicy 🌶🌶🌶"
//     },
//     {
//         id: 1,
//         img: Images.hot_dog,
//         name: "Frenchdog",
//         details: "Tasty&Spicy 🌶🌶🌶"
//     },
// ]

// export default function Home({ navigation }) {

//     const [value, setValue] = useState('')

//     return (
//         <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//             <View style={styles.avatar_container}>
//                 <Image source={Images.avatar} style={styles.avatar} />
//                 <View>
//                     <Text style={styles.welcome}>Welcome back, Pin!</Text>
//                     <Text style={styles.welcome}>How Hungry are you?</Text>
//                 </View>
//             </View>
//             <View style={styles.filter_container}>
//                 <View style={styles.search}>
//                     {Icons.Icons({ name: "search", height: 24, width: 24 })}
//                     <TextInput
//                         value={value}
//                         onChangeText={setValue}
//                         placeholder="Search..."
//                         style={styles.input}
//                     />
//                 </View>
//                 <TouchableOpacity style={styles.filter}>
//                     {Icons.Icons({ name: 'filter', height: 24, width: 24 })}
//                 </TouchableOpacity>
//             </View>
//             <Text style={styles.today_menu}>Today’s Menu</Text>
//             <View style={{ height: 170 }}>
//                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
//                     {cakeData.map((item, index) => {
//                         return (
//                             <TouchableOpacity key={index} style={styles.item_container}>
//                                 <View style={[styles.item, {
//                                     backgroundColor: item.bg,
//                                     marginRight: index === cakeData.length - 1 ? 32 : 16,
//                                     shadowColor: item.bg
//                                 }]}>
//                                     <View style={styles.item_content}>
//                                         <Text style={styles.item_title}>Free Donut!</Text>
//                                         <Text style={styles.price}>For orders over $20</Text>
//                                     </View>
//                                     <Image source={item.img} style={styles.item_img} />
//                                 </View>
//                             </TouchableOpacity>
//                         )
//                     })}
//                 </ScrollView>
//             </View>
//             <View style={{ height: 170 }}>
//                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.list, { marginTop: 10 }]}>
//                     {categoriesData.map((item, index) => {
//                         return (
//                             <TouchableOpacity key={index} style={[styles.cate_item, {
//                                 backgroundColor: item.bg,
//                                 marginRight: index === categoriesData.length - 1 ? 32 : 16,
//                                 shadowColor: Colors.yellow
//                             }]}
//                                 onPress={() => navigation.navigate("Details")}>
//                                 <Text style={styles.cate_name}>{item.name}</Text>
//                                 <Image source={item.img} style={styles.cate_img} />
//                             </TouchableOpacity>
//                         )
//                     })}
//                 </ScrollView>
//             </View>
//             <Text style={styles.offer}>Best Offers 💕</Text>
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 {offerData.map((item, index) => {
//                     return (
//                         <TouchableOpacity key={index} style={styles.offer_item}>
//                             <Image source={item.img} style={styles.offer_img} />
//                             <View style={styles.offer_content}>
//                                 <Text style={styles.offer_name}>{item.name}</Text>
//                                 <Text style={styles.details}>{item.details}</Text>
//                             </View>
//                         </TouchableOpacity>
//                     )
//                 })}
//             </ScrollView>
//             <View style={{ height: 200 }} />
//         </ScrollView>
//     )
// }

import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const categoriesData = [
    {
        id: 0,
        name: 'Dress',
        img: Images.hot_dog
    },
    {
        id: 1,
        name: 'Shirt',
        img: Images.hot_dog
    },
    {
        id: 2,
        name: 'Pants',
        img: Images.hot_dog
    },
    {
        id: 3,
        name: 'Tshirt',
        img: Images.hot_dog
    },
]

const data = [
    {
        id: 0,
        name: "Long Sleeve Shirts",
        img: Images.hot_dog,
        price: 165,
        bg: "#FFFAF68F"
    },
    {
        id: 1,
        name: "Casual Henley Shirts",
        img: Images.hot_dog,
        price: 275,
        bg: "#EFEFF2"
    },
    {
        id: 2,
        name: "Curved Hem Shirts",
        img: Images.hot_dog,
        price: 100,
        bg: "#EDFDF466"
    },
]

export default function Home({ navigation }) {

    const [value, setValue] = useState('')
    const [categoriesSelected, setCategoriesSelected] = useState(1)

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={styles.title}>Explore</Text>
                    <Text style={styles.subtitle}>best Outfits for you</Text>
                    <View style={styles.search_container}>
                        {Icons.Icons({ name: "search", height: 13, width: 13 })}
                        <TextInput
                            style={styles.input}
                            placeholder="Search items..."
                            value={value}
                            onChangeText={setValue}
                        />
                        <TouchableOpacity style={styles.filter} onPress={() => navigation.navigate("Search")}>
                            {Icons.Icons({ name: "filter", height: 18, width: 18 })}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categories}>
                        {categoriesData.map((item, index) => {
                            return (
                                <TouchableOpacity style={[styles.categories_item, {
                                    borderColor: categoriesSelected === index ? Colors.white : Colors.border
                                }]}
                                    onPress={() => setCategoriesSelected(index)}
                                >
                                    <Image source={item.img} style={styles.categories_img} />
                                    <Text style={[styles.categories_text, {
                                        color: categoriesSelected === index ? Colors.black : Colors.gray_text
                                    }]}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.title_list}>
                        <Text style={styles.title_list_text}>New Arrival</Text>
                        <TouchableOpacity>
                            <Text style={styles.see_all}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                        {data.map((item, index) => {
                            return (
                                // <Product data={item} style={{ marginRight: index === data.length - 1 ? 32 : 16 }} />
                                <Image source={item.img}/>
                            )
                        })}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}