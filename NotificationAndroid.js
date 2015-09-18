/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NotificationAndroid
 */

'use strict';

var RCTNotificationAndroid = require('NativeModules').NotificationAndroid;

/**
 * This exposes the native NotificationAndroid module as a JS module. This has a function 'showText'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to Notification
 * 2. int duration: The duration of the Notification. May be NotificationAndroid.SHORT or NotificationAndroid.LONG
 */

var NotificationAndroid = {

  notify: function (
    activity: string,
    title: string,
    message: string
  ): void {
    RCTNotificationAndroid.notify(activity, title, message);
  },

};

module.exports = NotificationAndroid;
