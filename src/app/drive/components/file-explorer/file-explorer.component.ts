import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { NewFolderDialogComponent, RenameDialogComponent } from '@app/drive/modals';
import { FileElement } from '@app/drive/models';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent {
  @Input() fileElements!: FileElement[] | null;
  @Input() canNavigateUp!: boolean;
  @Input() path!: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{
    element: FileElement,
    moveTo: FileElement
  }>();

  constructor(public dialog: MatDialog){}

  deleteElement = (element: FileElement) => this.elementRemoved.emit(element);

  navigateUp = () => this.navigatedUp.emit();

  navigate(element: FileElement) {
    if(element.isFolder)
      this.navigatedDown.emit(element);
  }

  moveElement(element: FileElement, moveTo: FileElement){
    this.elementMoved.emit({ element, moveTo })
  }

  openNewFolderDialog() {
    let dialogRef = this.dialog.open(NewFolderDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res })
      }
    })
  }

  openRenameDialog(element: FileElement){
    let dialogRef = this.dialog.open(RenameDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    })
  }

  openMenu(event: MouseEvent, viewChild: MatMenuTrigger){
    event.preventDefault();
    viewChild.openMenu();
  }
}
