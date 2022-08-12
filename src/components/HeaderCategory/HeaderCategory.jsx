import Header from "../Header/Header";
import withCategory from "../../hooks/withCategory";

const HeaderCategory = ({ category }) => withCategory(Header)({ category });

export default HeaderCategory;
