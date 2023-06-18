import { ExDocument } from './document.model';
import { ExFile } from './file.model';

export class ExFolder extends ExDocument {
    // protected children: Array<Folder | File> = new Array<Folder | File>();
    protected children: ExDocument[] = [];
    foldername?: string

    public override isFolder = (): boolean => true;

    public add(document: ExDocument): void {
        this.children.push(document);
    }

    public remove(document: ExDocument): void {
        const documentIndex = this.children.indexOf(document);
        this.children.splice(documentIndex, 1);
        
        document.setParent(null);
    }
}