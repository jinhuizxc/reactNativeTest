/*导包*/
import React from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
} from 'react-native';
import AppMain from './page/AppMain';
/*获取手机屏幕的宽和高*/
var {height, width} = Dimensions.get('window');

/*定义一个组件*/
class Splash extends React.Component {

    /***
     * 构造器
     * 开始了一个定时器setTimeout（），2500豪秒后跳转到AppMain.js
     * @param props
     */
    constructor(props) {
        super(props);
        //获取navigator对象，在welcome.js传过来的
        const {navigator} = props;//可以
        //const {navigator} =this. props;//可以
        //const {navigator} = this.props.navigator;//这个是不可以的，会报错
        //const {navigator} = props.navigator;//这个是不可以的，会报错
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: AppMain,
                    name: 'AppMain'
                });
            });
        }, 2500);
    }

    /*开始渲染*/  /*图片的路劲*/
    render() {
        return (
            <View style={{flex: 1}}>
                {/**在View容器中方一张图片*/}
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('./image/ic_welcome.png')}
                />
            </View>
        );
    }
}

/*声明该class可以被其它js文件导入使用*/
export default Splash;