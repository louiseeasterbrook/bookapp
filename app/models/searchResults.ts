export interface Recipe {
  Name: string;
  Category: string;
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
