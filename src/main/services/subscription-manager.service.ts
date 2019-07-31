import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

/**
 * An utility class to manage RX subscriptions
 */
@Injectable({ providedIn: 'root' })
export class CksSubscriptionManager {
  private subscribersMap: Map<string, Subscription[]> = new Map<string, Subscription[]>();

  /**
   * Method to create {name}'s subscribers
   */
  create(name: string) {
    this.subscribersMap.set(name, []);
  }

  /**
   * Method to push subscriber in {name}'s subscribers
   */
  push(name: string, subscriber: Subscription) {
    if (this.subscribersMap.get(name) === undefined) {
      this.create(name);
    }
    this.subscribersMap.get(name).push(subscriber);
  }

  /**
   * Method to destroy {name}'s subscribers
   */
  destroy(name: string) {
    const subscribers = this.subscribersMap.get(name);
    subscribers.filter(subscriber => subscriber !== undefined && !subscriber.closed).forEach(subscriber => subscriber.unsubscribe());
    subscribers.splice(0, subscribers.length);
    this.subscribersMap.delete(name);
  }

  /**
   * Method to count {name}'s subscribers
   */
  getCount(name: string) {
    return this.subscribersMap.get(name).length;
  }

  /**
   * Method to destroy all subscribers
   */
  destroyAll() {
    this.subscribersMap.forEach((subscribers, key) => {
      subscribers.filter(subscriber => subscriber !== undefined && !subscriber.closed).forEach(subscriber => subscriber.unsubscribe());
      subscribers.splice(0, subscribers.length);
    });
    this.subscribersMap.clear();
  }
}
