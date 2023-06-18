import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { ExDocument, ExFile, ExFolder } from '@app/drive/models';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {

  explorer: ExDocument | null = new ExFolder()

  folders: ExFolder[] = []
  files: ExFile[] = []

  constructor(){
    
    let file01 = new ExFile();
    file01.id = '1';
    file01.filename = 'Example file.txt';
    file01.size = 1480;
    file01.setParent(this.explorer);
    this.files.push(file01)

    let folder01 = new ExFolder();
    folder01.id = '2';
    folder01.foldername = 'My Folder 1';
    folder01.setParent(this.explorer);
    this.folders.push(folder01);

    let folder02 = new ExFolder();
    folder02.id = '3';
    folder02.foldername = 'My Folder 2';
    folder02.setParent(this.explorer);
    this.folders.push(folder02);

    let folder03 = new ExFolder();
    folder03.id = '4';
    folder03.foldername = 'My Folder 3';
    folder03.setParent(this.explorer);
    this.folders.push(folder03);
    
    
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.folders, event.previousIndex, event.currentIndex);
    } else {

      // move between lists
    }
}
}


@Component({
  selector: 'app-explorer-file',
  template: `
    <div>
      <p>Filename: {{ file.filename }}</p>
      <p>Size: {{ file.size }}</p>
      <p>Folder: {{ file.isFolder() }}</p>
    </div>
  
  
  `,
})
export class ExplorerFileComponent {

  @Input()
  file!: ExFile;

  constructor(){
    
  }

}


@Component({
  selector: 'app-explorer-folder',
  template: `
    <div>
      <p>Foldername: {{ folder.foldername }}</p>
      <p>Size: {{ folder.size }}</p>
      <p>Folder: {{ folder.isFolder() }}</p>
    </div>
  
  
  `,
})
export class ExplorerFolderComponent {

  @Input()
  folder!: ExFolder;

  constructor(){
    
  }

}

