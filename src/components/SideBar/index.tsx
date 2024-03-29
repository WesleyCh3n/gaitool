import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsMoon, BsSun } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import { useStore } from "../../store";

export function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-full w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-2xl rounded-l-2xl pt-2 pb-2"
    >
      <SideBarIcon icon={<AiOutlineHome size="28" />} text="home" link="/" />
      <SideBarIcon
        icon={<IoAnalyticsOutline size="28" />}
        text="chart"
        link="/chart"
      />
      {
        <SideBarIcon
          icon={<CgToolbox size="28" />}
          text="tool"
          link="/tool"
        />
      }
      {
        // <SideBarIcon
        //   icon={<CgToolbox size="28" />}
        //   text="check"
        //   link="/check"
        // />
      }
      <ThemeIcon />
      <SideBarIcon
        icon={<AiOutlineSetting size="28" />}
        text="setting"
        link="/setting"
      />
    </div>
  );
}

const SideBarIcon = (props: { icon: any; text: string; link: string }) => {
  const selectedLink = useStore((state) => state.selectedPane);
  return (
    <Link
      to={props.link}
      className={`sidebar-icon group ${props.link == selectedLink ? "bg-gray-300 dark:bg-gray-600" : ""
        }`}
    >
      {props.icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {props.text}
      </span>
    </Link>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="sidebar-icon group" onClick={handleMode}>
      {darkTheme ? <BsMoon size="28" /> : <BsSun size="28" />}
      <span className="sidebar-tooltip group-hover:scale-100">
        {"toggleTheme"}
      </span>
    </div>
  );
};

export default SideBar;
