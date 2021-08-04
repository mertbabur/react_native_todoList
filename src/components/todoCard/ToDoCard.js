import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./ToDoCard.styles"
const ToDoCard = props => {
    return(
        <View style={styles.container}>
            {!props.todo.isRealize && (<TouchableOpacity style={styles.todoNo} onPress={()=>props.pressHandler(props.todo.key)}><Text style={styles.textStyleNo}>{props.todo.text}</Text></TouchableOpacity>)}
            {props.todo.isRealize && (<TouchableOpacity style={styles.todoYes} onPress={()=>props.pressHandler(props.todo.key)}><Text style={styles.textStyleYes}>{props.todo.text}</Text></TouchableOpacity>)}
        </View>
    )
}

export default ToDoCard;