package com.doozy;

import android.content.BroadcastReceiver;
import android.content.Intent;
import android.app.PendingIntent;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import com.doozy.notification.NotificationModule;

public class DailyLogReminderReceiver extends BroadcastReceiver {

    public void onReceive(Context context, Intent intent) {
        NotificationModule.SendNotification(MainActivity.class, context, "What did you do today?", "Every step counts.");
    }
}
