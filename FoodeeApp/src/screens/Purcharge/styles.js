import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    details_title: {
        fontSize: 32,
        color: Colors.dark_text,
        fontWeight: '600'
    },
    status_bar_container: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    title_bar: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    number_bar_container: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor: Colors.pink,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        alignSelf: 'center'
    },
    text_bar: {
        fontSize: 11,
        width: 50,
        textAlign: 'center',
        color: Colors.dark_text,
        fontWeight:'500'
    },
    line: {
        height: 1,
        width: (width - 40 - 50 * 3) / 2 + 6,
        backgroundColor: Colors.pink,
        marginBottom: 22,
        marginHorizontal: -3,
        opacity:0.25
    },
    number_bar:{
        fontSize:11,
        color:Colors.white
    },
    order_text_container:{
        marginTop:30,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    order:{
        fontSize:24,
        fontWeight:'600',
        color: Colors.dark_text
    },
    clear:{
        fontSize:20,
        fontWeight:'500',
        color: Colors.pink
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:16,
        marginTop:10,
        backgroundColor: Colors.white,
        shadowColor: Colors.yellow,
        shadowOffset:{
            height:0
        },
        shadowOpacity:0.3,
        shadowRadius:10,
        borderRadius:28,
        paddingHorizontal:20,
        paddingVertical:16
    },
    info:{
        flexDirection:'row',
        alignItems:'center',
    },
    quality:{
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        height:60,
        width:60,
        marginRight:20
    },
    name:{
        fontSize:13,
        fontWeight:'600',
        color:Colors.dark_text
    },
    price:{
        fontSize:12,
        color: Colors.pink,
        marginTop:5
    },
    quality_text:{
        fontSize:14,
        color: Colors.dark_text,
        marginHorizontal:15
    },

    item_img: {
        height: 100,
        width: 92,
        marginBottom: 10
    },
    suggest_item: {
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
    item_text: {
        textAlign: "center",
        fontSize: 12,
        color: Colors.dark_text,
        fontWeight: '600'
    },
    list: {
        paddingLeft: 16,
        marginTop: 20
    },
    button:{
        position:'absolute',
        bottom:25,
        backgroundColor: Colors.pink,
        borderWidth: 8,
        borderColor:Colors.white,
        shadowColor:Colors.black,
        shadowOpacity:0.3,
        shadowOffset:{
            height:1
        },
        shadowRadius:5,
        width:width -16,
        alignSelf:'center',
        borderRadius:28,
        justifyContent:'center',
        alignItems:'center',
        height:92,
        flexDirection:'row'
    },
    text:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'500',
    },
    price_button:{
        fontSize:20,
        fontWeight:'800',
        color: Colors.white,
        marginLeft:10
    },
    no_item:{
        fontSize:16,
        alignSelf:'center',
        marginTop:20,
        marginBottom:-20,
        opacity:0.5
    }
})