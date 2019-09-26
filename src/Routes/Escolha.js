import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation';


const baseURL = 'https://api.github.com';
const searchTerm = 'react';
const perPage = 20;


export default class Escolha extends Component {
    state = {
        data: [],
        page: 1,
        loading: false,
    };

    componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {
        if (this.state.loading) return;

        const { page } = this.state;

        this.setState({ loading: true });

        //const response = await fetch(`${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`);
        const response = await fetch('http://api.managersistema.com.br:3002/funcionarios');

        const repositories = await response.json();

        this.setState({
            data: [...this.state.data, ...repositories.items],
            page: page + 1,
            loading: false,
        });
    }


    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.nome}</Text>
        </View>
    );



    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    };

    render() {
        return (
            <FlatList
                style={{ marginTop: 30 }}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                onEndReached={this.loadRepositories}
                onEndReachedThreshold={0.1}
                ListFooterComponent={this.renderFooter}
            />
        );
    }
}


const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        backgroundColor: '#A5D8FF',
        marginTop: 20,
        padding: 10,
    },
});



