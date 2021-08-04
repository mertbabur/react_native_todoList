import React from "react";
import styles from "./ToDoWriteCount.styles"
import {Text, View} from "react-native";

const ToDoWriteCount = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>YAPILACAKLAR</Text>
            <Text style={styles.textStyle}>{props.count}</Text>
        </View>
    )
}

export default ToDoWriteCount;