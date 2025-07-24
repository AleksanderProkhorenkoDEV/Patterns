import { INotification } from "../../interfaces/notification";

export default class SmsNotification implements INotification {
  sendMessage(): string {
    return "This is a sms notification";
  }
}
