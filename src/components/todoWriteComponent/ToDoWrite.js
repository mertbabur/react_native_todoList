import React, {useState} from "react";
import styles from "./ToDoWrite.styles";
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";

const ToDoWrite = props => {
    const [todoText, setTodoText] =  useState(null);

    function onSaveText(text){
        setTodoText(text);
    }

    function onAddToListTodo(){

        props.handleAddTodoText(todoText);

    }

    return(
        <View style={styles.container1}>
            <TextInput style={styles.textInput} placeholder={"Yapılacak ..."} onChangeText={onSaveText}/>
            <TouchableOpacity onPress={onAddToListTodo} style={styles.botton}>
                <Text style={styles.textStyle}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDoWrite;