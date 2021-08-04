import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ToDoWrite from "./src/components/todoWriteComponent";
import ToDoWriteCount from "./src/components/todoWriteCount";
import ToDoCard from "./src/components/todoCard";

export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoCount, setTodoCount] = useState(0);

    function handleAddToListTodo(todoText){ // yeni not ekle
        setTodoList((prevTodos)=>{
            return [
                {key:Math.random().toString(), text:todoText, isRealize: false},
                ...prevTodos
            ];
        })

        setTodoCount(todoCount + 1); // not sayısını artır

    }

    const pressHandler=(key)=>{ // üstüne tıkladığında üstünü çiz veya çizgiyi kaldır
        todoList.map((todo) => {
            if(todo.key == key){
                todo.isRealize == false ? todo.isRealize = true : todo.isRealize = false;
                todo.isRealize == false ? setTodoCount(todoCount+1): setTodoCount(todoCount-1);
                return;
            }
        })
        setTodoList((prevTodos)=>{
            return [
                ...prevTodos
            ];
        })
    }

    function renderTodo({item}){
        return(
            <ToDoCard todo={item} pressHandler={pressHandler}/>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.todoCount}>
            <ToDoWriteCount count={todoCount}/>
        </View>
        <View style={styles.todoCard}>
            <FlatList data={todoList} renderItem={renderTodo} />

        </View>
        <View style={styles.toDoWrite}>
            <ToDoWrite handleAddTodoText={handleAddToListTodo}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027"
  },
    todoCount: {
        flex: 1.5,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#37474f"
    },
    todoCard: {
        flex: 8,
        padding: 10
    },
    toDoWrite: {
        flex: 2,
        padding: 10,
    }
});
