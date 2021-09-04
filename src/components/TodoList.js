import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Colors from '../Colors';
import TodoListModal from './TodoListModal';

const TodoList = ({ list, updateTodoList }) => {
    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const RemainingCount = list.todos.length - completedCount;
    const [showListVisible, setShowListVisible] = useState(false);
    return (
        <View>
            <TodoListModal
                show={showListVisible}
                close={() => setShowListVisible(false)}
                todo={list}
                updateTodoList={updateTodoList}
            />
            <TouchableOpacity
                style={[styles.listContainer, { backgroundColor: list.color }]}
                onPress={() => setShowListVisible(true)}
            >
                <Text style={styles.listTitle}> {list.name} </Text>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.count}>{completedCount}</Text>
                        <Text style={styles.subTitle}>Remaining</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.count}> {RemainingCount} </Text>
                        <Text style={styles.subTitle}>Completed</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.white,
        marginBottom: 10
    },
    completed: {},
    remaining: {},
    count: {
        fontSize: 48,
        fontWeight: '200',
        color: Colors.white
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.white
    }
});
export default TodoList;
