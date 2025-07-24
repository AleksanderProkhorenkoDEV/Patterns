import { INotificationFactory } from "../../interfaces/notificationFactory";
import { INotification } from "../../interfaces/notification";
import EmailNotification from "./EmailNotification";

export default class EmailNotificationFactory implements INotificationFactory {
  sendNotification(): INotification {
    return new EmailNotification();
  }
}
