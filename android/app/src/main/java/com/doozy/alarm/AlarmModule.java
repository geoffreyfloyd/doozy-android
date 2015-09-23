/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.doozy.alarm;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Intent;
import android.app.PendingIntent;

import com.doozy.DailyLogReminderReceiver;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.common.MapBuilder;
//import android.graphics.drawable.Drawable;
//import android.graphics.drawable.Drawable.ConstantState;
import android.content.Context;


import java.util.Map;
import java.util.Calendar;

import com.doozy.R;

/**
 * {@link NativeModule} that allows JS to push an Android Notification.
 */
public class AlarmModule extends ReactContextBaseJavaModule {

    public static final int REQUEST_CODE = 0;
    //public static final int RESULT_PHOTO = 1;
    //public static final int RESULT_VID = 2;
    private static final String SOMETHING = "SHORT";

    public AlarmModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AlarmAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = MapBuilder.newHashMap();
        constants.put(SOMETHING, SOMETHING);
        return constants;
    }

    @ReactMethod
    public void setAlarm(String activityName, String recurrence) {

        Context context = getReactApplicationContext();
        Intent notifyLater = new Intent(context, DailyLogReminderReceiver.class);
        PendingIntent myIntent = PendingIntent.getBroadcast(context, REQUEST_CODE, notifyLater, 0);

        // Set alarm for every day at 8PM
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(System.currentTimeMillis());
        calendar.add(Calendar.MINUTE, 3);
        AlarmManager alarmManager = (AlarmManager)context.getSystemService(Context.ALARM_SERVICE);
        alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), 24 * 60 * 60 * 1000, myIntent);  //set repeating every 24 hours
    }
}
