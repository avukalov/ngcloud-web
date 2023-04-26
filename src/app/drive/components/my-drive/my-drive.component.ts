import { Component, EventEmitter, Output } from '@angular/core';
import { FileElement } from '@app/drive/models';
import { FileService } from '@app/drive/services/file.service';
import { SidebarService } from '@app/drive/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent {

  fileElements!: Observable<FileElement[]>;
  currentRoot!: FileElement | null;
  currentPath!: string;
  canNavigateUp = false;

  constructor(private sidebarService: SidebarService, private fileService: FileService){}

  toggle(){
    this.sidebarService.toggleInfoBar.emit(null);
  }

  addFolder(folder: { name: string }) {
    this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }
  
  removeElement(element: FileElement) {
    this.fileService.delete(element.id!);
    this.updateFileElementQuery();
  }
  
  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id!, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }
  
  renameElement(element: FileElement) {
    this.fileService.update(element.id!, { name: element.name });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id! : 'root');
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot!.parent!);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }
  
  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name!);
    this.canNavigateUp = true;
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }
  
  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }
}
