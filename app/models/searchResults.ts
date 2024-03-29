export interface Recipe {
  Name: string;
  Category: number;
  Ingredients: ListWithTitle[];
  Method: ListWithTitle[];
}

export interface ListWithTitle {
  Title: string;
  List: string[];
}
