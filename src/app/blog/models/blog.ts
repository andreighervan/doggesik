export interface Blog {
    id: string;
    category: Category;
    dateCreated: string;
    description: string;
    image: string;
    images: string[];
    isFeatured: boolean;
    name: string;
    richDescription: string;
}

export interface Category {
    id: string;
    name: string;
}

export class Comment {
    userName: string = "User Name";
    date: Date = new Date();
    content: string;

    docId: string;
    docPath: string = "";
}

export interface Subscribers {
    id: number;
    name: string;
    email: string;
}