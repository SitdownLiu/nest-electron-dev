export interface MenusModel {
  id: string;
  title: string;
  icon: string;
  link?: string;
  children?: MenusModel[];
}
