import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-upload-button',
  templateUrl: './file-upload-button.component.html',
  styleUrls: ['./file-upload-button.component.scss']
})
export class FileUploadButtonComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFiles!: File[] | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);

    this.uploadFiles();
  }

  uploadFiles() {
    if (this.selectedFiles && this.selectedFiles.length > 0) {

      const formData = new FormData();
      for (let file of this.selectedFiles) {
        formData.append('files', file);
      }

      this.http.post('http://localhost:5090/api/files/upload', formData)
        .subscribe((response: any) => {
          console.log('Files uploaded successfully', response);
          // Handle response

        }, (error: any) => {
          console.error('Error uploading file', error);
          // Handle error

        }, () => this.resetFileInput());
    }
  }

  resetFileInput() {
    this.fileInput.nativeElement.value = "";
  }
}
