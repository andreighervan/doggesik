import { Category } from './category';

export class Product {
  id?: string;
  name?: string;
  description?: string;
  richDescription?: string;
  image?: string;
  images?: string[];
  category?: Category;
  isFeatured?: boolean;
  dateCreated?: string;
}
