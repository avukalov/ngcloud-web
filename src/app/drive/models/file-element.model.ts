export class FileElement {
    name?: string;
    parent?: string;
    isFolder?: boolean;
    id?: string;

    constructor(
        name: string,
        parent: string,
        isFolder: boolean = false,
        id: string = ""
    ){
        this.name = name;
        this.parent = parent;
        this.isFolder = isFolder;
        this.id = id;
    }

}