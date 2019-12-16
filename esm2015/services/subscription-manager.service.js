import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * An utility class to manage RX subscriptions
 */
let CksSubscriptionManager = class CksSubscriptionManager {
    /**
     * An utility class to manage RX subscriptions
     */
    constructor() {
        this.subscribersMap = new Map();
    }
    /**
     * Method to create {name}'s subscribers
     */
    create(name) {
        this.subscribersMap.set(name, []);
    }
    /**
     * Method to push subscriber in {name}'s subscribers
     */
    push(name, subscriber) {
        if (this.subscribersMap.get(name) === undefined) {
            this.create(name);
        }
        this.subscribersMap.get(name).push(subscriber);
    }
    /**
     * Method to destroy {name}'s subscribers
     */
    destroy(name) {
        const subscribers = this.subscribersMap.get(name);
        subscribers.filter(subscriber => subscriber !== undefined && !subscriber.closed).forEach(subscriber => subscriber.unsubscribe());
        subscribers.splice(0, subscribers.length);
        this.subscribersMap.delete(name);
    }
    /**
     * Method to count {name}'s subscribers
     */
    getCount(name) {
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
};
CksSubscriptionManager.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksSubscriptionManager_Factory() { return new CksSubscriptionManager(); }, token: CksSubscriptionManager, providedIn: "root" });
CksSubscriptionManager = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], CksSubscriptionManager);
export { CksSubscriptionManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9zdWJzY3JpcHRpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQzs7R0FFRztBQUVILElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBSm5DOztPQUVHO0lBQ0g7UUFFVSxtQkFBYyxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztLQThDekY7SUE1Q0M7O09BRUc7SUFDSCxNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLElBQVksRUFBRSxVQUF3QjtRQUN6QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2pJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDL0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDakksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTs7QUEvQ1ksc0JBQXNCO0lBRGxDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixzQkFBc0IsQ0ErQ2xDO1NBL0NZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEFuIHV0aWxpdHkgY2xhc3MgdG8gbWFuYWdlIFJYIHN1YnNjcmlwdGlvbnNcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDa3NTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgcHJpdmF0ZSBzdWJzY3JpYmVyc01hcDogTWFwPHN0cmluZywgU3Vic2NyaXB0aW9uW10+ID0gbmV3IE1hcDxzdHJpbmcsIFN1YnNjcmlwdGlvbltdPigpO1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY3JlYXRlIHtuYW1lfSdzIHN1YnNjcmliZXJzXG4gICAqL1xuICBjcmVhdGUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVyc01hcC5zZXQobmFtZSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwdXNoIHN1YnNjcmliZXIgaW4ge25hbWV9J3Mgc3Vic2NyaWJlcnNcbiAgICovXG4gIHB1c2gobmFtZTogc3RyaW5nLCBzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24pIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpYmVyc01hcC5nZXQobmFtZSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jcmVhdGUobmFtZSk7XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaWJlcnNNYXAuZ2V0KG5hbWUpLnB1c2goc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGRlc3Ryb3kge25hbWV9J3Mgc3Vic2NyaWJlcnNcbiAgICovXG4gIGRlc3Ryb3kobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzTWFwLmdldChuYW1lKTtcbiAgICBzdWJzY3JpYmVycy5maWx0ZXIoc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyICE9PSB1bmRlZmluZWQgJiYgIXN1YnNjcmliZXIuY2xvc2VkKS5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlci51bnN1YnNjcmliZSgpKTtcbiAgICBzdWJzY3JpYmVycy5zcGxpY2UoMCwgc3Vic2NyaWJlcnMubGVuZ3RoKTtcbiAgICB0aGlzLnN1YnNjcmliZXJzTWFwLmRlbGV0ZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY291bnQge25hbWV9J3Mgc3Vic2NyaWJlcnNcbiAgICovXG4gIGdldENvdW50KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN1YnNjcmliZXJzTWFwLmdldChuYW1lKS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGRlc3Ryb3kgYWxsIHN1YnNjcmliZXJzXG4gICAqL1xuICBkZXN0cm95QWxsKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnNNYXAuZm9yRWFjaCgoc3Vic2NyaWJlcnMsIGtleSkgPT4ge1xuICAgICAgc3Vic2NyaWJlcnMuZmlsdGVyKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlciAhPT0gdW5kZWZpbmVkICYmICFzdWJzY3JpYmVyLmNsb3NlZCkuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKSk7XG4gICAgICBzdWJzY3JpYmVycy5zcGxpY2UoMCwgc3Vic2NyaWJlcnMubGVuZ3RoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmliZXJzTWFwLmNsZWFyKCk7XG4gIH1cbn1cbiJdfQ==