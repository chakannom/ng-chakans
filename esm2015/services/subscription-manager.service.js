import * as tslib_1 from "tslib";
/*
 Copyright 2019 ChaKanNom

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9zdWJzY3JpcHRpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDOztHQUVHO0FBRUgsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFKbkM7O09BRUc7SUFDSDtRQUVVLG1CQUFjLEdBQWdDLElBQUksR0FBRyxFQUEwQixDQUFDO0tBOEN6RjtJQTVDQzs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsSUFBWSxFQUFFLFVBQXdCO1FBQ3pDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFDLElBQVk7UUFDbEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDakksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVEsQ0FBQyxJQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMvQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNqSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBOztBQS9DWSxzQkFBc0I7SUFEbEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLHNCQUFzQixDQStDbEM7U0EvQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxOSBDaGFLYW5Ob21cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQW4gdXRpbGl0eSBjbGFzcyB0byBtYW5hZ2UgUlggc3Vic2NyaXB0aW9uc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1N1YnNjcmlwdGlvbk1hbmFnZXIge1xuICBwcml2YXRlIHN1YnNjcmliZXJzTWFwOiBNYXA8c3RyaW5nLCBTdWJzY3JpcHRpb25bXT4gPSBuZXcgTWFwPHN0cmluZywgU3Vic2NyaXB0aW9uW10+KCk7XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjcmVhdGUge25hbWV9J3Mgc3Vic2NyaWJlcnNcbiAgICovXG4gIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzTWFwLnNldChuYW1lLCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHB1c2ggc3Vic2NyaWJlciBpbiB7bmFtZX0ncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgcHVzaChuYW1lOiBzdHJpbmcsIHN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbikge1xuICAgIGlmICh0aGlzLnN1YnNjcmliZXJzTWFwLmdldChuYW1lKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNyZWF0ZShuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVyc01hcC5nZXQobmFtZSkucHVzaChzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZGVzdHJveSB7bmFtZX0ncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZGVzdHJveShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnNNYXAuZ2V0KG5hbWUpO1xuICAgIHN1YnNjcmliZXJzLmZpbHRlcihzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIgIT09IHVuZGVmaW5lZCAmJiAhc3Vic2NyaWJlci5jbG9zZWQpLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCkpO1xuICAgIHN1YnNjcmliZXJzLnNwbGljZSgwLCBzdWJzY3JpYmVycy5sZW5ndGgpO1xuICAgIHRoaXMuc3Vic2NyaWJlcnNNYXAuZGVsZXRlKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjb3VudCB7bmFtZX0ncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZ2V0Q291bnQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlcnNNYXAuZ2V0KG5hbWUpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZGVzdHJveSBhbGwgc3Vic2NyaWJlcnNcbiAgICovXG4gIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVyc01hcC5mb3JFYWNoKChzdWJzY3JpYmVycywga2V5KSA9PiB7XG4gICAgICBzdWJzY3JpYmVycy5maWx0ZXIoc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyICE9PSB1bmRlZmluZWQgJiYgIXN1YnNjcmliZXIuY2xvc2VkKS5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlci51bnN1YnNjcmliZSgpKTtcbiAgICAgIHN1YnNjcmliZXJzLnNwbGljZSgwLCBzdWJzY3JpYmVycy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaWJlcnNNYXAuY2xlYXIoKTtcbiAgfVxufVxuIl19