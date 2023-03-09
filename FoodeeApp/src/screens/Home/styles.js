// import {StyleSheet, Dimensions} from 'react-native'
// import Colors from '../../themes/Colors'

// var {height, width} = Dimensions.get('window')

// export default StyleSheet.create({
//     container:{
//         flex:1,
//         paddingTop:70,
//         backgroundColor: Colors.white
//     },
//     welcome:{
//         fontSize:16,
//         color: Colors.dark_text,
//         marginLeft:10
//     },
//     avatar_container:{
//         flexDirection:'row',
//         paddingHorizontal:16,
//         marginHorizontal:16,
//         paddingVertical:12,
//         alignItems:'center',
//         backgroundColor: Colors.cream,
//         shadowColor: Colors.black,
//         shadowOffset:{
//             height:3
//         },
//         shadowOpacity:0.15,
//         shadowRadius:10,
//         borderRadius:28
//     },
//     search:{
//         flexDirection:'row',
//         paddingHorizontal:20,
//         paddingVertical:12,
//         backgroundColor: Colors.gray,
//         borderRadius:16,
//         width: width -90
//     },
//     filter_container:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//         alignItems:'center',
//         marginHorizontal:16,
//         marginTop:25
//     },
//     input:{
//         marginLeft:10,
//         marginRight:20
//     },
//     filter:{
//         backgroundColor: Colors.pink,
//         height: 44,
//         width:44,
//         justifyContent:'center',
//         alignItems:'center',
//         borderRadius:16
//     },
//     today_menu:{
//         fontSize:32,
//         color: Colors.dark_text,
//         marginTop:30,
//         marginLeft:16, 
//         fontWeight:'600'
//     },
//     list:{
//         paddingLeft:16,
//     },
//     item:{
//         borderRadius:28,
//         flexDirection:'row',
//         width: width -32,
//         justifyContent:'space-between',
//         paddingRight:8,
//         paddingLeft:16,
//         alignItems:'center',
//         height:128,
//         shadowOffset:{
//             height:1
//         },
//         shadowOpacity:0.4,
//         shadowRadius:15
//     },
//     item_img:{
//         height:121,
//         width:131,
//         marginTop:-50
//     },
//     item_title:{
//         fontSize:24,
//         fontWeight:'900',
//         color: Colors.white
//     },
//     price:{
//         fontSize:16,
//         color:Colors.yellow_white
//     },
//     item_container:{
//         height:150,
//         justifyContent:'flex-end',
//     },
//     cate_item:{
//         borderRadius:28,
//         paddingTop: 16,
//         shadowOpacity:0.3,
//         shadowRadius:10,
//         shadowOffset:{
//             height:5,
//         },
//         height:128
//     },
//     cate_img:{
//         height:94,
//         width:96,
//         borderBottomRightRadius:28,
//         marginTop:5,
//         marginLeft:16
//     },
//     cate_name:{
//         fontSize:12,
//         textAlign:'center',
//         color: Colors.dark_text,
//         fontWeight:'600'
//     },
//     offer:{
//         fontSize:24,
//         marginLeft:16,
//         color: Colors.dark_text,
//         fontWeight:'600'
//     },
//     offer_item:{
//         flexDirection:'row',
//         paddingHorizontal:16,
//         paddingVertical:16,
//         backgroundColor: Colors.white,
//         shadowColor: Colors.yellow,
//         shadowOpacity:0.2,
//         marginTop: 30,
//         shadowRadius:12,
//         shadowOffset:{
//             height:0
//         },
//         marginHorizontal:16,
//         borderRadius:28
//     },
//     offer_content:{
//         marginLeft:10
//     },
//     offer_img:{
//         height:82, 
//         width:63,
//         marginHorizontal:20,
//     },
//     offer_name:{
//         fontSize:24,
//         color: Colors.dark_text,
//         fontWeight:'600'
//     },
//     details:{
//         fontSize:16,
//         color: Colors.dark_text
//     }
// })

import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
        paddingTop: 10
    },
    block: {
        marginHorizontal: 16
    },
    title: {
        marginTop: 20,
        fontSize: 32,
        fontWeight: '600',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 18,
        color: Colors.gray_text
    },
    search_container: {
        marginTop: 30,
        backgroundColor: Colors.white,
        width: width - 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingLeft: 16,
        paddingRight: 8,
        borderRadius: 10
    },
    input: {
        width: width - 138,
        height: 43
    },
    filter: {
        height: 43,
        width: 47,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    categories_item: {
        width: (width - 16 * 5) / 4,
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15,
        backgroundColor: Colors.white,
        borderWidth: 1,
    },
    categories_img: {
        marginBottom: 10
    },
    categories_text: {
        fontSize: 12,
        fontWeight: '500'
    },
    title_list: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title_list_text: {
        fontSize: 20,
        fontWeight: '500'
    },
    see_all: {
        fontSize: 14,
        color: Colors.gray_text
    },
    list: {
        paddingLeft: 16,
        marginTop: 20
    },
    modal_container: {
        flex: 1,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    content_container: {
        backgroundColor: Colors.transparent,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 20,
        paddingBottom: 50
    },
    modal_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        paddingHorizontal: 16,
        paddingBottom: 15
    },
    close: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_title: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginLeft: 16
    },
    modal_category: {
        paddingLeft: 16,
        marginTop: 15
    },
    modal_category_item: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    modal_category_name: {
        fontSize: 12,
        color: Colors.white,
        fontWeight: '500'
    },
    modal_pricing:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginRight:16,
        marginTop:20
    },
    modal_price:{
        flexDirection:'row'
    },
    price:{
        fontSize:12,
        fontWeight:'500',
        color: Colors.black_text
    },
    marker:{
        height:18,
        width:18,
        borderRadius:9,
        backgroundColor: Colors.orange,
        borderWidth:2,
        borderColor:Colors.white
    },
    button:{
        backgroundColor: Colors.orange,
        width: width*0.6,
        alignSelf:'center',
        paddingVertical:16,
        alignItems:'center',
        borderRadius:50,
        marginTop:20
    },
    text:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'600'
    },
    clear:{
        fontSize: 14,
        color: Colors.black_text
    }
})