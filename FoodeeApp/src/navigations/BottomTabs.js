import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Cart, Location, Profile } from '../screens';
import Icons from '../themes/Icons';
import { View, Text } from 'react-native'
import Colors from '../themes/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 92,
                    paddingTop: 0,
                    marginBottom: 25,
                    marginHorizontal: 8,
                    borderRadius: 28,
                    backgroundColor: Colors.white,
                    shadowColor: Colors.black,
                    shadowOpacity: 0.3,
                    shadowOffset: {
                        height: 5
                    },
                    shadowRadius: 10,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    paddingBottom: 0,
                    position:'absolute'
                }
            }}>
            <Tab.Screen name="Location" component={Location}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 92, justifyContent: 'center', alignItems: 'center' }}>
                            {Icons.Icons({ name: focused ? 'poi_focus' : 'poi', height: 32, width: 32 })}
                            <Text style={{ fontSize: 12, color: focused ? Colors.pink : Colors.dark_text, marginTop: 5 }}>Home</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 92, justifyContent: 'center', alignItems: 'center' }}>
                            {Icons.Icons({ name: focused ? 'home_focus' : 'home', height: 32, width: 32 })}
                            <Text style={{ fontSize: 12, color: focused ? Colors.pink : Colors.dark_text, marginTop: 5 }}>Home</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 92, justifyContent: 'center', alignItems: 'center' }}>
                            <View>
                                {Icons.Icons({ name: focused ? 'cart_focus' : 'cart', height: 32, width: 32 })}
                                <View style={{
                                    height: 16,
                                    width: 16,
                                    borderRadius: 8,
                                    backgroundColor: Colors.pink,
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    position: 'absolute',
                                    right: 0
                                }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: Colors.white }}>5</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: focused ? Colors.pink : Colors.dark_text, marginTop: 5 }}>My Cart</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 92, justifyContent: 'center', alignItems: 'center' }}>
                            {Icons.Icons({ name: focused ? 'user_focus' : 'user', height: 32, width: 32 })}
                            <Text style={{ fontSize: 12, color: focused ? Colors.pink : Colors.dark_text, marginTop: 5 }}>Me</Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}