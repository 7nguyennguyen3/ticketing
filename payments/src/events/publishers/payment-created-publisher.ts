import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@nguyentnguyen/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
