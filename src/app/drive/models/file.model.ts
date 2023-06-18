import { ExDocument } from './document.model'

export class ExFile extends ExDocument {
    filename?: string;
    originalname?: string;
    contentType?: string;
}