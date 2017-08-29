/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet,
    Text, View
} from 'react-native';

var ACCESS_URL = 'https://www.baidu.com';

var USER_LIST_URL = 'http://192.168.80.238:8080/JavaWebService/servlet/UserAction?type=10';
var USER_ONE_URL = 'http://192.168.80.238:8080/JavaWebService/servlet/UserAction';

var HOME_BODY_URL = 'http://192.168.80.238:8080/JavaWebService/servlet/HomeAction?counts=1';

class NetFetch extends Component {
    constructor(props) {
        super(props);
        //初始化状态
        this.state = {
            text: '获取中……',
            loaded: false,

        };
    }

    /**
     * 系统的函数:在组件出现前 调用
     */
    componentDidMount() {
        //访问网路获取数据
        this.fetchBODY();
    }


    /**
     * 访问网路获取网页数据
     */
    fetchHtml() {
        fetch(ACCESS_URL)
            .then(response => response.text())
            .then(function (responseData) {
                console.log('responseData is :' + responseData);
                this.setState({
                    text: responseData,
                    loaded: true,
                });
            }.bind(this))
            .catch((error) => {
                console.warn(error);
            })
            .done();
    }

    /**
     * 模拟get方法提交参数:type=1&counts=1
     */
    fetchGet() {
        //USER_LIST_URL  USER_ONE_URL
        fetch(USER_ONE_URL, {
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Content-Type': 'text/json;charset=utf-8',
            }
        })
            .then(response => response.text())
            .then(function (responseData) {
                console.log('responseData is :' + responseData);
                this.setState({
                    text: responseData,
                    loaded: true,
                });
            }.bind(this))
            .catch((error) => {
                console.warn(error);
            })
            .done();
    }

    /**
     * 模拟post方法add body提交信息
     */
    fetchBODY() {
        fetch(HOME_BODY_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'liujun',
                password: '123',
            })
        })
            .then(response => response.text())
            .then(function (responseData) {
                console.log('responseData is :' + responseData);
                this.setState({
                    text: responseData,
                    loaded: true,
                });
            }.bind(this))
            .catch((error) => {
                console.warn(error);
            })
            .done();
    }


    /**
     * 渲染界面:{this.state.text}
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.text}
                </Text>
            </View>
        );
    }

}

/**
 * 样式
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default NetFetch;