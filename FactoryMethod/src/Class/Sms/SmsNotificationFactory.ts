import { INotification } from "../../interfaces/notification";
import { INotificationFactory } from "../../interfaces/notificationFactory";
import SmsNotification from "./SmsNotification";

export default class SmsNotificationFactory implements INotificationFactory {
  sendNotification(): INotification {
    return new SmsNotification();
  }
}
