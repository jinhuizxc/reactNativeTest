/**导包*/
import React from 'react';
import {
    StyleSheet,
    StatusBar,
    BackHandler,
    View,
    Text,
    Platform
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
/**导包*/
import Splash from '../Splash';
/**导一个工具类*/
import {NaviGoBack} from '../utils/CommonUtils';

var _navigator;

class Welcome extends React.Component {
    /**
     * 构造器初始化
     * @param props
     */
    constructor(props) {
        super(props);
        //函数的定义并初始化
        this.renderScene = this.renderScene.bind(this);
        this.goBack = this.goBack.bind(this);
        //监听返回事件
        BackHandler.addEventListener('hardwareBackPress', this.goBack);
    }

    /**
     * 监听手机点击返回按钮
     */
    goBack() {
        return NaviGoBack(_navigator);
    }

    /**
     * 渲染场景的函数：这里接收系统传来的两个参数，一个是路由对象，一个是导航器对象
     */
    renderScene(route, navigator) {
        let Component = route.component;//获取到initialRoute路由中设计的Splash组件
        _navigator = navigator;//导航器对象，在goBack（）函数中需要用到
        return (
            <Component navigator={navigator} route={route}/>//返回一个渲染界面的Splash组件，并传递两个参数
        );
    }

    /**
     * 界面跳转的动画：这里接收系统传来的两个参数，一个是路由对象，一个是导航器对象
     */
    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    /**
     * initialRouter: 路由初始化配置信息，就是说页面加载时，第一次需要展现什么内容
     *configureScene: 场景转换动画配置。在RN看来，从一个页面切换到另外一个页面，就是从一个场景切换到另外一个场景，这里配置的是场景动画信息，比如Navigator.SceneConfigs.FadeAndroid 就是淡入淡出
     *renderScene: 渲染场景，读取initialRouter传来的数据，确定显示那些内容。
     * */
    render() {
        return (
            <Navigator
                ref='navigator'
                style={styles.navigator}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                initialRoute={{
                    component: Splash,
                    name: 'Splash'
                }}
            />
        );
    }
}

/**
 * 弹性（Flex）宽高:
 *
 * 使用flex:1来指定某个组件扩张以撑满所有剩余的空间
 *如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
 * 如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大
 *
 * 注意：
 * 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。
 * */
let styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

export default Welcome;