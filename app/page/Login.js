/**
 * Created by Administrator on 2016/9/18 0018.
 */
'use strict';
import React, { Component } from 'react';
import{
    View,
    Text,
    BackHandler,
    TouchableOpacity,
    Image,
    TextInput,
    InteractionManager,
    StyleSheet,
} from 'react-native';

/**导入GoBack工具类*/
import { NaviGoBack } from '../utils/CommonUtils';
/**导入Toast工具类*/
import { toastShort } from '../utils/ToastUtil';
import AppMain from './AppMain';

var password='';
var username='';
var navigator;

class Login extends Component {

    constructor(props) {
        super(props);

        navigator= this.props.navigator;//这个是可以的
        //navigator= this.props;//这个是不可以的

        /**
         * 初始化方法
         * @type {function(this:Login)}
         */
        this.buttonBackAction=this.buttonBackAction.bind(this);//返回

    }

    /**
     * 返回
     */
    buttonBackAction(){
        return NaviGoBack(navigator);
    }

    /**
     * 点击登录
     */
    btn_login(){
        //用户登录
        if(username === ''){
            toastShort('用户名不能为空...');
            return;
        }
        if(password === ''){
            toastShort('密码不能为空...');
            return;
        }
        if(username=='jh' && password=='123'){
            toastShort('登录成功');
            username='';
            password='';
            //跳转到首页
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: AppMain,
                    name: 'AppMain'
                });
            });
        }else{
            toastShort('用户名或密码错误');
            return;
        }
    }

    /**
     * 忘记密码
     */
    find_password(){

    }

    /**
     * 点击注册
     */
    btn_register(){
        //用户注册
        //InteractionManager.runAfterInteractions(() => {
        //    navigator.push({
        //        component: Register,
        //        name: 'Register'
        //    });
        //});
    }

    /**
     * 其它的登录方法
     * @param postion
     * @returns {*}
     */
    otherLogin(postion){
        //weixin
        if(postion==0){

        //qq
        }else if(postion==1){

        //weibo
        }else if(postion==2){

        }
    }


    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View  style={styles.title_bar}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}}
                                      style={styles.topbar_left_item}>

                        <Text >登录</Text>
                    </TouchableOpacity>

                    <Text style={{flex:2}} ></Text>

                    <TouchableOpacity onPress={() => {this.btn_register()}}
                                      style={styles.topbar_left_item}>

                        <Text >注册</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.input_item}>
                    <Text style={{marginLeft:5}}> 账号：</Text>
                    <TextInput
                        style={{fontSize: 15,flex:1,textAlign: 'left',textAlignVertical:'bottom'}}
                        placeholder="手机号码/邮箱"
                        placeholderTextColor="#aaaaaa"
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'username'}
                        multiline={true}
                        onChangeText={(text) => {
                               username = text;
                            }}
                    />
                </View>

                <View style={styles.input_item}>
                    <Text style={{marginLeft:5}}> 密码：</Text>
                    <TextInput
                        style={{fontSize: 15,flex:1,textAlign: 'left',textAlignVertical:'bottom'}}
                        placeholder="密码"
                        placeholderTextColor="#aaaaaa"
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'password'}
                        multiline={true}
                        secureTextEntry={true}/**设计输入的文字不可见*/
                        onChangeText={(text) => {
                               password = text;
                            }}
                    />
                </View>

                <TouchableOpacity onPress={() => {this.find_password()}}
                                  style={{height:48,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                    <Text style={{fontSize:13}}>忘记密码？</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.btn_login()}}
                >
                    <View style={styles.btn_login}>
                            <Text style={{color:'white',fontSize:18}}>登录</Text>
                    </View>
                </TouchableOpacity>

                <View style={{flex:2}}></View>

                <View style={{marginBottom:20,alignItems:'center'}}>
                    <Text style={{fontSize:13,color:'#777'}}>第三方账号登录</Text>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <TouchableOpacity onPress={()=>{this.otherLogin(0)}}>
                            <Image source={require('../image/ic_login_weixin.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.otherLogin(1)}} style={{marginLeft:15}}>
                            <Image source={require('../image/ic_login_qq.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.otherLogin(2)}} style={{marginLeft:15}}>
                            <Image source={require('../image/ic_login_weibo.png')} style={{width:50,height:50}}/>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}

const styles=StyleSheet.create({
    input_item:{
        backgroundColor:'white',
        height:48,
        flexDirection:'row',
        alignItems:'center',
    },
    title_bar:{
        height:48,
        flexDirection:'row',
    },
    topbar_left_item:{
        width:48,
        height:48,
        alignItems:'center',
        justifyContent:'center'
    },

    btn_login:{
        height:48,
        backgroundColor:'#96E4DA',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5,
        marginRight:5,
    }

});

export default Login;