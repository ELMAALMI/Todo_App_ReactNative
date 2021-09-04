import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';

const RightAction = ({ dragX, index }) => {
    console.log(dragX);
    return (
        <TouchableOpacity>
            <Animated.View style={styles.deleteBtn}>
                <Animated.Text>delete</Animated.Text>
            </Animated.View>
        </TouchableOpacity>
    );
};
const RenderTodo = ({ item, index, toggleTodoComplated }) => {
    return (
        <Swipeable renderRightActions={(_, dragX) => <RightAction dragX={dragX} index={index} />}>
            <View style={styles.todoContainer}>
                <TouchableOpacity
                    onPress={() => {
                        toggleTodoComplated(index);
                    }}
                >
                    <Ionicons
                        name={item.completed ? 'ios-square' : 'ios-square-outline'}
                        size={24}
                        color={Colors.gray}
                        style={{
                            width: 32
                        }}
                    />
                </TouchableOpacity>
                <Text
                    style={[
                        styles.todo,
                        {
                            textDecorationLine: item.completed ? 'line-through' : 'none',
                            color: item.completed ? Colors.gray : Colors.black
                        }
                    ]}
                >
                    {item.title}
                </Text>
            </View>
        </Swipeable>
    );
};

export default RenderTodo;
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
