import { Publisher, Subjects, TicketCreatedEvent } from "@nguyentnguyen/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
