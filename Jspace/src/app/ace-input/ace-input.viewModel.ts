export class aceInputViewModel {

    public mEditorText:string;

    constructor(editorText:string) {
        this.mEditorText = editorText;
    }

    public getTextFromEditor():string{
        return this.mEditorText;
    }
}