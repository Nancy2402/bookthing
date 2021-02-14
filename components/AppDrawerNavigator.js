import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from "./CoustomSideBarMenu";
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./AppTabNavigator";
import SettingsScreen from "../screens/SettingsScreen"

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{ screen: AppTabNavigator},
    Setting: { screen: SettingsScreen }  
},
{
    contentComponent: SideBar
},
{
    initialRouteName: "Home"
}

)
