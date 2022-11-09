import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>BLOOD BANK CENTER</span>
            <ul className="sidebarList">
                <li className="sidebarListItems"><i className="fa-solid fa-hospital"></i>Max Super Speciality Hospital</li>
                <li className="sidebarListItems"><i className="fa-solid fa-hospital"></i>Doon Public Hospital</li>
                <li className="sidebarListItems"><i className="fa-solid fa-hospital"></i>Ashirwad Hospital </li>
                <li className="sidebarListItems"><i className="fa-solid fa-hospital"></i>Shri Mahant Indresh Hospital</li>
                <li className="sidebarListItems"><i className="fa-solid fa-hospital"></i>Kailash Hospital</li>
                <li className="sidebarListItems"><i className="fa-solid fa-hospital"></i>Uttaranchal Hospital</li>
                <li className="sidebarListItems"><i className="fa-solid fa-hospital"></i>Srinagar Hospital</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
                <i class="fa-brands fa-instagram sidebarIcons"></i>
                <i class="fa-brands fa-facebook sidebarIcons"></i>
                <i class="fa-brands fa-twitter sidebarIcons"></i>
                <i class="fa-brands fa-youtube sidebarIcons"></i>
            </div>
        </div>
    </div>
  )
}
