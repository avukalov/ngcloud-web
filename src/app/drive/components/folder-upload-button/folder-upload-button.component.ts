import { Component } from '@angular/core';

@Component({
  selector: 'app-folder-upload-button',
  templateUrl: './folder-upload-button.component.html',
  styleUrls: ['./folder-upload-button.component.scss']
})
export class FolderUploadButtonComponent {
  selectedFolder: any;

  onFolderSelect(event: any) {
    this.selectedFolder = event.target.files[0];
  }

  uploadFolder() {
    if (this.selectedFolder) {
      const files: File[] = Array.from(this.selectedFolder.files);

      // Perform file upload logic here
      // You can send the files to a server or process them locally
      console.log(files);
    }
  }
}
