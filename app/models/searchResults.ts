export interface SearchResultFull {
  docs: SearchResult[];
  numFound: number;
  offset: any;
  q: string;
  start: number;
}

export interface SearchResult {
  _version_: number;
  author_facet: string[];
  author_key: string[];
  author_name: string[];
  ebook_access: string;
  ebook_count_i: number;
  edition_count: number;
  edition_key: string[];
  first_publish_year: number;
  has_fulltext: boolean;
  isbn: string[];
  key: string;
  language: string[];
  last_modified_i: number;
  public_scan_b: boolean;
  publish_date: string[];
  publish_year: string[];
  publisher: string[];
  seed: string[];
  title: string;
  title_sort: string;
  title_suggest: string;
  type: string;
}
