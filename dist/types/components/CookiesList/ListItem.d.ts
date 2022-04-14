/// <reference types="react" />
import { ICookie } from "./CookiesList";
export interface IListItem {
    cookie: ICookie;
}
declare function ListItem({ cookie }: IListItem): JSX.Element;
export default ListItem;
