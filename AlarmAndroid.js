/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AlarmAndroid
 */

'use strict';

var RCTAlarmAndroid = require('NativeModules').AlarmAndroid;

/**
 * This exposes the native NotificationAndroid module as a JS module. This has a function 'showText'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to Notification
 * 2. int duration: The duration of the Notification. May be NotificationAndroid.SHORT or NotificationAndroid.LONG
 */

var AlarmAndroid = {

  setAlarm: function (
    activity: string,
    recurrence: string
  ): void {
    RCTAlarmAndroid.setAlarm(activity, recurrence);
  },
};

module.exports = AlarmAndroid;
