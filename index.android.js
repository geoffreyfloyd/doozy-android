/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NotificationAndroid = require('./NotificationAndroid');

var {
    AppRegistry,
    StyleSheet,
    Text,
    ToastAndroid,
    ToolbarAndroid,
    TouchableWithoutFeedback,
    View,
    ScrollView,
} = React;

var doozy = React.createClass({
    statics: {
        title: 'Toast Example!',
        description: 'Example that demostrates the use of an Android Toast to provide feedback.'
    },

    handleClick: function (text) {
        ToastAndroid.show(doozy.title, ToastAndroid.SHORT);
        NotificationAndroid.notify('com.doozy.MainActivity', doozy.title, doozy.description)
    },

    render: function () {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    logo={require('image!ic_launcher')}
                    navIcon={require('image!ic_menu_black_24dp')}
                    onIconClicked={() => this.handleClick()}
                    title="Doozy"
                    actions={[{title: 'Settings', icon: require('image!ic_settings_black_48dp'), show: 'always'}]}
                />
                <ScrollView
                    onScroll={() => { console.log('onScroll!'); }}
                    scrollEventThrottle={200}
                    contentInset={{top: -50}}
                    style={styles.scrollView}>
                    <TouchableWithoutFeedback onPress={this.handleClick}>
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                </ScrollView>

            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        //borderRadius: 3,
        //borderWidth: 0.5,
        //borderColor: '#d6d7da',
        backgroundColor: '#F5FCFF',
        //height: 2000,
        overflow: 'visible'
        //margin: 10,
        //marginVertical: 5,
    },
    toolbar: {
        //backgroundColor: '#F5FCFF',
        height: 56,
    },
    scrollView: {
        //backgroundColor: '#6A85B1',
        height: 300,
    },
});

AppRegistry.registerComponent('doozy', () => doozy);
