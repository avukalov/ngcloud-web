export abstract class ExDocument {
    protected parent!: ExDocument | null;
    
    id!: string | null;
    size: number = 0;
    owner: string = "me";

    constructor(){}

    public isFolder = (): boolean => false;

    public getParent = () => this.parent;
    public setParent(parent: ExDocument | null) {
        this.parent = parent;
    };
}



