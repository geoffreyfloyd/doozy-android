/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.doozy.notification;

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
public class NotificationModule extends ReactContextBaseJavaModule {

    public static final int REQUEST_CODE = 0;
    //public static final int RESULT_PHOTO = 1;
    //public static final int RESULT_VID = 2;
    private static final String SOMETHING = "SHORT";

    public NotificationModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NotificationAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = MapBuilder.newHashMap();
        constants.put(SOMETHING, SOMETHING);
        return constants;
    }

    @ReactMethod
    public void notify(String activity, String title, String message) {
        Context context = getReactApplicationContext();

        try {
            Class activityClass = Class.forName(activity);
            NotificationModule.SendNotification(activityClass, context, title, message);
        } catch (Exception e) {

        }
    }

    @ReactMethod
    public void notifySchedule() {

        Context context = getReactApplicationContext();
        Intent notifyLater = new Intent(context, DailyLogReminderReceiver.class);
        PendingIntent myIntent = PendingIntent.getBroadcast(context, REQUEST_CODE, notifyLater, 0);

        // Set alarm for every day at 8PM
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR, 20);
        calendar.set(Calendar.MINUTE, 0);
        AlarmManager alarmManager = (AlarmManager)context.getSystemService(Context.ALARM_SERVICE);
        alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), 24 * 60 * 60 * 1000, myIntent);  //set repeating every 24 hours
    }

    public static void SendNotification(Class activityClass, Context context, String title, String message) {
        Intent startMainActivity = new Intent(context, activityClass);
        PendingIntent myIntent = PendingIntent.getActivity(context, 0, startMainActivity, 0);

        int currentApiVersion = android.os.Build.VERSION.SDK_INT;

        Notification.Builder builder = new Notification.Builder(context)
            .setContentTitle(title)
            .setContentText(message)
            .setSmallIcon(R.drawable.ic_launcher)
            .setVibrate(new long[] { 1000, 1000, 1000, 1000, 1000 })
            .setLights(android.graphics.Color.RED, 3000, 3000);

        // Action.Builder w/ addAction(action) is not available until API v20
        if (currentApiVersion >= android.os.Build.VERSION_CODES.KITKAT_WATCH){
            // Use action builder to build action
            Notification.Action action = new Notification.Action.Builder(R.drawable.ic_launcher, title, myIntent).build();
            builder.addAction(action);
        } else{
            // do something for phones running an SDK before API 20
            builder.addAction(R.drawable.ic_launcher, title, myIntent);
        }

        Notification notification = builder.build();

        NotificationManager mNotificationManager =
                (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        mNotificationManager.notify(1, notification);
    }
}
