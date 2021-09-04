import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from './src/Colors';
import { tmpData } from './src/tmpData';
import TodoList from './src/components/TodoList';
import { useState } from 'react';
import AddListModal from './src/components/AddListModal';
// import { Modal } from 'react-native-web';
export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState(tmpData);
    const updateTodoList = (list) => {
        setData([
            ...data.map((item) => {
                return item.id === list.id ? list : item;
            })
        ]);
    };
    const addList = (list) => {
        setData([
            ...data,
            {
                ...list,
                id: data.length + 1
            }
        ]);
    };
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <AddListModal addTodo={addList} close={() => setModalVisible(false)} />
            </Modal>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.divider}></View>
                <Text style={styles.title}>
                    Todo
                    <Text
                        style={{
                            fontWeight: '300',
                            color: Colors.blue
                        }}
                    >
                        Lists
                    </Text>
                </Text>
                <View style={styles.divider}></View>
            </View>
            <View style={{ marginVertical: 48 }}>
                <TouchableOpacity style={styles.addList} onPress={() => setModalVisible(true)}>
                    <AntDesign name="plus" size={16} color={Colors.blue} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    height: 275,
                    paddingLeft: 32
                }}
            >
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.name}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps="always"
                    renderItem={({ item }) => (
                        <TodoList updateTodoList={updateTodoList} list={item} />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        backgroundColor: Colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        color: Colors.black,
        paddingHorizontal: 64
    },
    addList: {
        borderWidth: 2,
        borderColor: Colors.lightBlue,
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
