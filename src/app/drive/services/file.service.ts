import { Injectable } from '@angular/core';
import { FileElement } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

import { v4 } from 'uuid';

export interface IFileService {
  add(fileElement: FileElement): FileElement;
  delete(id: string): void;
  update(id: string, update: Partial<FileElement>): void;
  queryInFolder(folderId: string): Observable<FileElement[]>;
  get(id: string): FileElement | null;
}


@Injectable({
  providedIn: 'root'
})
export class FileService implements IFileService {

  private map = new Map<string, FileElement>();
  private querySubject: BehaviorSubject<FileElement[]> = new BehaviorSubject<FileElement[]>([]);

  constructor() { }

  add(fileElement: FileElement): FileElement {
    fileElement.id = v4();
    this.map.set(fileElement.id!, this.clone(fileElement))
    console.log(this.map);
    
    return fileElement;
  }

  delete(id: string): void {
    this.map.delete(id);
  }

  update(id: string, update: Partial<FileElement>): void {
    let element = this.map.get(id) as FileElement;
    element = Object.assign(element, update);
    this.map.set(element.id!, element)
  }

  queryInFolder(folderId: string): Observable<FileElement[]> {
    const result: FileElement[] = [];
    this.map.forEach(element => {
      if (element.parent === folderId) {
        result.push(this.clone(element))
      }
    })

    this.querySubject.next(result);
    return this.querySubject.asObservable();
  }

  get(id: string): FileElement | null {
    let result = this.map.get(id);
    return result ? result : null;
  }

  clone(element: FileElement) {
    return JSON.parse(JSON.stringify(element))
  }
}
