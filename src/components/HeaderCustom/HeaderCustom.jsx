import Header from "../Header/Header";
import withCustom from "../../hooks/withCustom";

const HeaderCustom = ({ custom }) => withCustom(Header)({ custom });

export default HeaderCustom;
