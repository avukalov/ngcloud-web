import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
    toggleInfoBar: EventEmitter<null> = new EventEmitter();
    
    constructor() {}

    toggle(){
        this.toggleInfoBar.emit(null);
        console.log("service.toggle");
        
    }
}