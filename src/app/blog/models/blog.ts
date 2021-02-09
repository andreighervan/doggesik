export interface Blog {
    id: string;
    title: string;
    blogContent: string;
    fileUploaded: string;
    shortDescription: string;
    postUrl: string;
}

export class Comment {
    userName: string = "User Name";
    date: Date = new Date();
    content: string;

    docId: string;
    docPath: string = "";
}
