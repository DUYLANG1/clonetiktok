import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "@/assets/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="TikTok" />
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            name="search-input"
          />
          <button className={cx("btn-clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <button className={cx("btn-search")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
