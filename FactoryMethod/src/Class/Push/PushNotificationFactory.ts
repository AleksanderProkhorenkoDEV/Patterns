import { INotificationFactory } from "../../interfaces/notificationFactory";
import { INotification } from "../../interfaces/notification";
import PushNotification from "./PushNotification";

export default class PushNotificationFactory implements INotificationFactory {
  sendNotification(): INotification {
    return new PushNotification();
  }
}
