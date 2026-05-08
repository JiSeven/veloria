import { DomainEvent } from '@/catalog/domain/events/domain-event.base';

export abstract class DomainEventPublisher {
  abstract publishAll(events: DomainEvent[]): Promise<void>;
}
