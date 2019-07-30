import { Subscription } from 'rxjs';
/**
 * An utility class to manage RX subscriptions
 */
export declare class CksSubscriptionManager {
    private subscribersMap;
    /**
     * Method to create {name}'s subscribers
     */
    create(name: string): void;
    /**
     * Method to push subscriber in {name}'s subscribers
     */
    push(name: string, subscriber: Subscription): void;
    /**
     * Method to destroy {name}'s subscribers
     */
    destroy(name: string): void;
    /**
     * Method to count {name}'s subscribers
     */
    getCount(name: string): number;
    /**
     * Method to destroy all subscribers
     */
    destroyAll(): void;
}
