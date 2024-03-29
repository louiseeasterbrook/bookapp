export interface Recipe {
  Name: string;
  Category: number;
  Ingredients: Ingredients[];
  Method: Method[];
}

export interface Ingredients {
  SectionTitle: string;
  List: string[];
}
export interface Method {
  SectionTitle: string;
  List: string[];
}
