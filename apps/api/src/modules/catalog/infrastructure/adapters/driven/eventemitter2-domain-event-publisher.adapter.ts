import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { DomainEventPublisher } from '@/catalog/application/ports/domain-event-publisher.port';

import { DomainEvent } from '../../../domain/events/domain-event.base';

@Injectable()
export class EventEmitter2DomainEventPublisher extends DomainEventPublisher {
  constructor(private readonly emitter: EventEmitter2) {
    super();
  }

  async publishAll(events: DomainEvent[]): Promise<void> {
    for (const event of events) {
      await this.emitter.emitAsync(event.name, event);
    }
  }
}
