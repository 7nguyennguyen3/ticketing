import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@nguyentnguyen/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
