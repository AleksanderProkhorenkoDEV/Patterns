import EmailNotificationFactory from "./Class/Email/EmailNotificationFactory";
import PushNotificationFactory from "./Class/Push/PushNotificationFactory";
import SmsNotificationFactory from "./Class/Sms/SmsNotificationFactory";

type NotificationType = "email" | "sms" | "push";
const typeNotification: NotificationType = "push";

const handlers = {
  email: () => {
    const factory = new EmailNotificationFactory();
    const notification = factory.sendNotification();

    console.log(notification.sendMessage());
  },
  sms: () => {
    const factory = new SmsNotificationFactory();
    const notification = factory.sendNotification();

    console.log(notification.sendMessage());
  },

  push: () => {
    const factory = new PushNotificationFactory();
    const notification = factory.sendNotification();

    console.log(notification.sendMessage());
  },
};

const handler = handlers[typeNotification];

if (handler) {
  handler();
} else {
  console.error("Tipo de notificación no válido");
}
