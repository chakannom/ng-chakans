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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9zdWJzY3JpcHRpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQzs7R0FFRztBQUVIO0lBREE7UUFFVSxtQkFBYyxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztLQThDekY7SUE1Q0M7O09BRUc7SUFDSCx1Q0FBTSxHQUFOLFVBQU8sSUFBWTtRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUNBQUksR0FBSixVQUFLLElBQVksRUFBRSxVQUF3QjtRQUN6QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILHdDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLEtBQUssU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQ2pJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCx5Q0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUFXLEVBQUUsR0FBRztZQUMzQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxLQUFLLFNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQTlDLENBQThDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQXhCLENBQXdCLENBQUMsQ0FBQztZQUNqSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7O0lBOUNVLHNCQUFzQjtRQURsQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsc0JBQXNCLENBK0NsQztpQ0F0REQ7Q0FzREMsQUEvQ0QsSUErQ0M7U0EvQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQW4gdXRpbGl0eSBjbGFzcyB0byBtYW5hZ2UgUlggc3Vic2NyaXB0aW9uc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1N1YnNjcmlwdGlvbk1hbmFnZXIge1xuICBwcml2YXRlIHN1YnNjcmliZXJzTWFwOiBNYXA8c3RyaW5nLCBTdWJzY3JpcHRpb25bXT4gPSBuZXcgTWFwPHN0cmluZywgU3Vic2NyaXB0aW9uW10+KCk7XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjcmVhdGUge25hbWV9J3Mgc3Vic2NyaWJlcnNcbiAgICovXG4gIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzTWFwLnNldChuYW1lLCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHB1c2ggc3Vic2NyaWJlciBpbiB7bmFtZX0ncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgcHVzaChuYW1lOiBzdHJpbmcsIHN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbikge1xuICAgIGlmICh0aGlzLnN1YnNjcmliZXJzTWFwLmdldChuYW1lKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNyZWF0ZShuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVyc01hcC5nZXQobmFtZSkucHVzaChzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZGVzdHJveSB7bmFtZX0ncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZGVzdHJveShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnNNYXAuZ2V0KG5hbWUpO1xuICAgIHN1YnNjcmliZXJzLmZpbHRlcihzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIgIT09IHVuZGVmaW5lZCAmJiAhc3Vic2NyaWJlci5jbG9zZWQpLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCkpO1xuICAgIHN1YnNjcmliZXJzLnNwbGljZSgwLCBzdWJzY3JpYmVycy5sZW5ndGgpO1xuICAgIHRoaXMuc3Vic2NyaWJlcnNNYXAuZGVsZXRlKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjb3VudCB7bmFtZX0ncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZ2V0Q291bnQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlcnNNYXAuZ2V0KG5hbWUpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZGVzdHJveSBhbGwgc3Vic2NyaWJlcnNcbiAgICovXG4gIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVyc01hcC5mb3JFYWNoKChzdWJzY3JpYmVycywga2V5KSA9PiB7XG4gICAgICBzdWJzY3JpYmVycy5maWx0ZXIoc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyICE9PSB1bmRlZmluZWQgJiYgIXN1YnNjcmliZXIuY2xvc2VkKS5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlci51bnN1YnNjcmliZSgpKTtcbiAgICAgIHN1YnNjcmliZXJzLnNwbGljZSgwLCBzdWJzY3JpYmVycy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaWJlcnNNYXAuY2xlYXIoKTtcbiAgfVxufVxuIl19