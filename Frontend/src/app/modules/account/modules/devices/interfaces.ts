export enum SearchBy {
  name,
  year,
  description
}
  
export interface ISearchProperty {
  view: string;
  value: SearchBy;
}