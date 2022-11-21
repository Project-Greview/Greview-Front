import { useNavigate } from "react-router-dom";
import images from "../../../resources/img/img";
import { MenuItem } from "../style/menuitemStyle";

const MenuItems = ({menu}) => {
  const navigate = useNavigate();
  return(
    <MenuItem.Type1
      onClick={() => {
        navigate(`${menu.path}`, {
          state: {
            value: `${menu.state.value}`,
            tit: `${menu.name}`,
            naviView: `${menu.state.naviView}`,
          },
        });
      }}
      className={menu.class}
    >
      <div className="menu_nm">{menu.name}</div>
      {menu.arrow === true ? (
        <div className="icon img_box">
          <img src={images.arrow_right} alt={`${menu.name} 으로 이동`} />
        </div>
      ) : (menu.sub_txt.length !== undefined ?
        menu.sub_txt : null
      )}
    </MenuItem.Type1>
  )
}

export default MenuItems;