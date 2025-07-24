import { INotification } from "../../interfaces/notification";

export default class PushNotification implements INotification {
  sendMessage(): string {
    return "This is a push notification";
  }
}
