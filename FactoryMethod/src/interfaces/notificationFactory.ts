import { INotification } from "./notification";

export interface INotificationFactory {
  sendNotification(): INotification;
}
