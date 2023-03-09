import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    bg: {
        backgroundColor: Colors.pink,
        height: height * 0.4,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    details_title: {
        fontSize: 32,
        color: Colors.white,
        fontWeight: '600'
    },
    img: {
        height: 256,
        width: 294,
        position: 'absolute',
        right: -15,
        bottom: -30
    },
    text_content: {
        fontSize: 16,
        fontWeight: '800',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 28
    },
    text_container: {
        backgroundColor: Colors.cream_bg,
        borderRadius: 28,
        marginLeft: 16,
    },
    title: {
        marginTop: 50,
        fontSize: 24,
        marginLeft: 16,
        fontWeight: '600',
        color: Colors.dark_text
    },
    item_img: {
        height: 100,
        width: 92,
        marginBottom: 10
    },
    item: {
        backgroundColor: Colors.white,
        borderRadius: 28,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
            height: 3
        },
        paddingHorizontal: 8,
        paddingVertical: 20,
        height: 176
    },
    list: {
        paddingLeft: 16,
        marginTop: 20
    },
    item_text: {
        textAlign: "center",
        fontSize: 12,
        color: Colors.dark_text,
        fontWeight: '600'
    },
    nitrition_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16
    },
    nutrition_text: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.dark_text
    },
    nutrition_text2: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.dark_text
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 15
    },
    gram: {
        fontSize: 20,
        color: Colors.dark_text,
        textAlign: 'center'
    },
    gram_details: {
        fontSize: 11,
        color: Colors.dark_text
    },
    description: {
        marginHorizontal: 16,
        marginTop: 15,
        fontSize: 14,
        color: Colors.dark_text
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 8,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        borderRadius: 28,
        padding: 8,
        shadowOpacity: 0.2,
        position: 'absolute',
        bottom: 30,
        shadowOffset: {
            height: 3
        },
        shadowRadius: 10,
        width: width - 16
    },
    quality_container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: (width - 40) / 2,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.pink,
        borderRadius: 28,
        paddingHorizontal: (width - 40) / 2 / 5,
        height:76
    },
    button:{
        width: (width - 40) / 2,
        alignItems:'center',
        backgroundColor: Colors.pink,
        height:76,
        borderRadius:28,
        justifyContent:"center"
    },
    add_to_cart:{
        fontSize:16,
        color: Colors.white,
        fontWeight:"500"
    },
    cart_price:{
        fontSize:20,
        color: Colors.white,
        fontWeight:'800'
    }
})