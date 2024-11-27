import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@nguyentnguyen/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
