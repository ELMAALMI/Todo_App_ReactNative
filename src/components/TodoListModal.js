import React, { useState } from 'react';
import {
    Text,
    Modal,
    View,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    FlatList,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { Swipeable } from 'react-native-gesture-handler';
import RenderTodo from './renderTodo';
import Colors from '../Colors';
const TodoListModal = ({ show, close, todo, updateTodoList }) => {
    const completedCount = todo.todos.filter((todo) => todo.completed).length;
    const taskCount = todo.todos.length;
    const [newTodo, setNewTodo] = useState({
        title: '',
        completed: false
    });
    const addTodo = () => {
        todo.todos.push(newTodo);
        setNewTodo({
            ...newTodo,
            title: ''
        });
        updateTodoList(todo);
    };
    const toggleTodoComplated = (index) => {
        todo.todos[index].completed = !todo.todos[index].completed;
        updateTodoList(todo);
    };

    return (
        <Modal animationType="slide" visible={show}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 15,
                        right: 15,
                        zIndex: 10
                    }}
                    onPress={() => close()}
                >
                    <AntDesign name="close" size={24} color={Colors.blue} />
                </TouchableOpacity>
                <View
                    style={[
                        styles.section,
                        styles.header,
                        {
                            borderBottomColor: todo.color
                        }
                    ]}
                >
                    <View>
                        <Text style={styles.title}> {todo.name} </Text>
                        <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks
                        </Text>
                    </View>
                </View>
                <View style={[styles.section, { flex: 3 }]}>
                    <FlatList
                        data={todo.todos}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item, index }) => {
                            return (
                                <RenderTodo
                                    index={index}
                                    item={item}
                                    toggleTodoComplated={toggleTodoComplated}
                                />
                            );
                        }}
                        contentContainerStyle={{
                            paddingHorizontal: 32,
                            paddingVertical: 64
                        }}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <KeyboardAvoidingView style={[styles.section, styles.footer]} behavior="height">
                    <TextInput
                        style={[
                            styles.input,
                            {
                                borderColor: todo.color
                            }
                        ]}
                        onChangeText={(title) =>
                            setNewTodo({
                                ...newTodo,
                                title
                            })
                        }
                        value={newTodo.title}
                    />
                    <TouchableOpacity
                        style={[
                            styles.addTodo,
                            {
                                backgroundColor: todo.color
                            }
                        ]}
                        onPress={() => addTodo()}
                    >
                        <AntDesign name="plus" size={16} color={Colors.white} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Modal>
    );
};

export default TodoListModal;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    section: {
        flex: 1,
        alignSelf: 'stretch'
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: Colors.black
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: Colors.gray,
        fontWeight: '600'
    },
    footer: {
        paddingHorizontal: 32,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8
    },
    addTodo: {
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todo: {
        color: Colors.black,
        fontWeight: '700'
    },
    deleteBtn: {
        flex: 1,
        backgroundColor: 'red'
    }
});
