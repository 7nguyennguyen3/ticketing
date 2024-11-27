import { OrderCreatedEvent, Publisher, Subjects } from "@nguyentnguyen/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
