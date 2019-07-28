import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * An utility class to manage RX subscriptions
 */
var CksSubscriptionManager = /** @class */ (function () {
    function CksSubscriptionManager() {
        this.subscribersMap = new Map();
    }
    /**
     * Method to create {name}'s subscribers
     */
    CksSubscriptionManager.prototype.create = function (name) {
        this.subscribersMap.set(name, []);
    };
    /**
     * Method to push subscriber in {name}'s subscribers
     */
    CksSubscriptionManager.prototype.push = function (name, subscriber) {
        if (this.subscribersMap.get(name) === undefined) {
            this.create(name);
        }
        this.subscribersMap.get(name).push(subscriber);
    };
    /**
     * Method to destroy {name}'s subscribers
     */
    CksSubscriptionManager.prototype.destroy = function (name) {
        var subscribers = this.subscribersMap.get(name);
        subscribers.filter(function (subscriber) { return subscriber !== undefined && !subscriber.closed; }).forEach(function (subscriber) { return subscriber.unsubscribe(); });
        subscribers.splice(0, subscribers.length);
        this.subscribersMap.delete(name);
    };
    /**
     * Method to count {name}'s subscribers
     */
    CksSubscriptionManager.prototype.getCount = function (name) {
        return this.subscribersMap.get(name).length;
    };
    /**
     * Method to destroy all subscribers
     */
    CksSubscriptionManager.prototype.destroyAll = function () {
        this.subscribersMap.forEach(function (subscribers, key) {
            subscribers.filter(function (subscriber) { return subscriber !== undefined && !subscriber.closed; }).forEach(function (subscriber) { return subscriber.unsubscribe(); });
            subscribers.splice(0, subscribers.length);
        });
        this.subscribersMap.clear();
    };
    CksSubscriptionManager.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksSubscriptionManager_Factory() { return new CksSubscriptionManager(); }, token: CksSubscriptionManager, providedIn: "root" });
    CksSubscriptionManager = tslib_1.__decorate([
        Injectable({ providedIn: 'root' })
    ], CksSubscriptionManager);
    return CksSubscriptionManager;
}());
export { CksSubscriptionManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3N1YnNjcmlwdGlvbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDOztHQUVHO0FBRUg7SUFEQTtRQUVVLG1CQUFjLEdBQWdDLElBQUksR0FBRyxFQUEwQixDQUFDO0tBOEN6RjtJQTVDQzs7T0FFRztJQUNILHVDQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBSSxHQUFKLFVBQUssSUFBWSxFQUFFLFVBQXdCO1FBQ3pDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0NBQU8sR0FBUCxVQUFRLElBQVk7UUFDbEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsS0FBSyxTQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUE5QyxDQUE4QyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDakksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILDJDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQVcsRUFBRSxHQUFHO1lBQzNDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLEtBQUssU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1lBQ2pJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7SUE5Q1Usc0JBQXNCO1FBRGxDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixzQkFBc0IsQ0ErQ2xDO2lDQXRERDtDQXNEQyxBQS9DRCxJQStDQztTQS9DWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBBbiB1dGlsaXR5IGNsYXNzIHRvIG1hbmFnZSBSWCBzdWJzY3JpcHRpb25zXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2tzU3Vic2NyaXB0aW9uTWFuYWdlciB7XG4gIHByaXZhdGUgc3Vic2NyaWJlcnNNYXA6IE1hcDxzdHJpbmcsIFN1YnNjcmlwdGlvbltdPiA9IG5ldyBNYXA8c3RyaW5nLCBTdWJzY3JpcHRpb25bXT4oKTtcblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNyZWF0ZSB7bmFtZX0ncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgY3JlYXRlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuc3Vic2NyaWJlcnNNYXAuc2V0KG5hbWUsIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcHVzaCBzdWJzY3JpYmVyIGluIHtuYW1lfSdzIHN1YnNjcmliZXJzXG4gICAqL1xuICBwdXNoKG5hbWU6IHN0cmluZywgc3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaWJlcnNNYXAuZ2V0KG5hbWUpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY3JlYXRlKG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzTWFwLmdldChuYW1lKS5wdXNoKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBkZXN0cm95IHtuYW1lfSdzIHN1YnNjcmliZXJzXG4gICAqL1xuICBkZXN0cm95KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVyc01hcC5nZXQobmFtZSk7XG4gICAgc3Vic2NyaWJlcnMuZmlsdGVyKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlciAhPT0gdW5kZWZpbmVkICYmICFzdWJzY3JpYmVyLmNsb3NlZCkuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKSk7XG4gICAgc3Vic2NyaWJlcnMuc3BsaWNlKDAsIHN1YnNjcmliZXJzLmxlbmd0aCk7XG4gICAgdGhpcy5zdWJzY3JpYmVyc01hcC5kZWxldGUobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNvdW50IHtuYW1lfSdzIHN1YnNjcmliZXJzXG4gICAqL1xuICBnZXRDb3VudChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVyc01hcC5nZXQobmFtZSkubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBkZXN0cm95IGFsbCBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZGVzdHJveUFsbCgpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzTWFwLmZvckVhY2goKHN1YnNjcmliZXJzLCBrZXkpID0+IHtcbiAgICAgIHN1YnNjcmliZXJzLmZpbHRlcihzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIgIT09IHVuZGVmaW5lZCAmJiAhc3Vic2NyaWJlci5jbG9zZWQpLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKDAsIHN1YnNjcmliZXJzLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpYmVyc01hcC5jbGVhcigpO1xuICB9XG59XG4iXX0=