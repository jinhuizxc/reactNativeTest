/*导包*/
import React from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
} from 'react-native';
/*获取手机屏幕的宽和高*/
var {height, width} = Dimensions.get('window');

/*定义一个组件*/
class Splash extends React.Component {

    /*构造器*/
    constructor(props) {
        super(props);
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