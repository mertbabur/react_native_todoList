import React from "react";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        marginBottom: 5,
        borderRadius: 10
    },
    textStyleYes: {
        fontSize: 20,
        color: "#808080",
        textDecorationLine: "line-through"
    },
    textStyleNo: {
        fontSize: 20,
        color: "white"
    },
    todoNo: {
        backgroundColor:"#7da453",
        padding: 15,
    },
    todoYes: {
        backgroundColor:"#37474f",
        padding: 15,
    }
})