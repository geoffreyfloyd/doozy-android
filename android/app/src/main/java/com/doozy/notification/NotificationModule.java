/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.doozy.notification;

import android.app.Notification;
import android.app.NotificationManager;
import android.content.Intent;
import android.app.PendingIntent;

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

import com.doozy.R;

/**
 * {@link NativeModule} that allows JS to push an Android Notification.
 */
public class NotificationModule extends ReactContextBaseJavaModule {

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
            Class main = Class.forName(activity);

            Intent startMainActivity = new Intent(context, main);
            PendingIntent myIntent = PendingIntent.getActivity(context, 0, startMainActivity, 0);

            Notification.Action action = new Notification.Action.Builder(R.drawable.ic_launcher, title, myIntent).build();

            Notification notification = new Notification.Builder(context)
                .addAction(action)
                .setContentTitle(title)
                .setContentText(message)
                .setSmallIcon(R.drawable.ic_launcher)
                .build();

            NotificationManager mNotificationManager =
                (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            mNotificationManager.notify(1, notification);
        } catch (Exception e) {
            
        }

    }
}
