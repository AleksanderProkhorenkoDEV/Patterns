import { INotification } from "../../interfaces/notification";

export default class EmailNotification implements INotification {
  sendMessage(): string {
    return "This is an email notification";
  }
}
