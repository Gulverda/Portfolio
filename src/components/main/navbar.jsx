import { useMediaQuery } from 'react-responsive';
import '../../CSS/Navbar.css';
import SidebarDesktopTablet from '../Sidebar/SidebarDesktopTablet';
import HorizontalNavbar from '../Sidebar/SidebarMobile';

const Sidebar = () => {
  // Define media query breakpoints
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      {isMobile ? <HorizontalNavbar /> : <SidebarDesktopTablet />}
    </div>
  );
};

export default Sidebar;
