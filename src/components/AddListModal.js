import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Colors';
import { tmpData } from '../tmpData';
const AddListModal = ({ close, addTodo }) => {
    const backgroundColors = [
        '#5CD859',
        '#24A6D9',
        '#595BD9',
        '#8022D9',
        '#D159D8',
        '#D85963',
        '#D88559'
    ];
    const [todo, setTodo] = useState({
        name: '',
        color: backgroundColors[0]
    });
    const renderColors = () => {
        return backgroundColors.map((color) => (
            <TouchableOpacity
                key={color}
                style={[styles.colorSelect, { backgroundColor: color }]}
                onPress={() => setTodo({ ...todo, color })}
            />
        ));
    };
    const createTodo = () => {
        const newTodo = {
            ...todo,
            todos: []
        };
        addTodo(newTodo);
        setTodo({
            name: '',
            color: backgroundColors[0]
        });
        close();
    };
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 15,
                    right: 15
                }}
                onPress={close}
            >
                <AntDesign name="close" size={24} color={Colors.blue} />
            </TouchableOpacity>
            <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
                <Text style={styles.title}>Create Todo List</Text>
                <TextInput
                    style={styles.input}
                    placeholder="list Todo"
                    value={todo.name}
                    onChangeText={(name) => setTodo({ ...todo, name })}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 12
                    }}
                >
                    {renderColors()}
                </View>
                <TouchableOpacity
                    onPress={createTodo}
                    style={[styles.create, { backgroundColor: todo.color }]}
                >
                    <Text
                        style={{
                            color: Colors.white,
                            fontWeight: '600'
                        }}
                    >
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};
export default AddListModal;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.black,
        alignSelf: 'center',
        marginBottom: 36
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.blue,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,
        height: 58,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    }
});
