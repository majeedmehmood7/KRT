import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillPersonFill, BsFillPinMapFill, BsBagDashFill, BsHouseDoorFill,BsHouseUpFill,BsFillPersonCheckFill,
    BsFillCartDashFill, BsFillCartCheckFill, BsFillGearFill,BsFillLockFill,BsFillInfoCircleFill}
 from 'react-icons/bs';
 import './Sidebar.css';
import Logo from './Assets/KRT Logo.jpg';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
    <div className='sidebar-title'>
      <div className='sidebar-brand'>
        <img src={Logo} alt="KRT Logo" className="logo" /> 
        <h1 className="heading">KRT</h1> 
      </div>
      <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillPersonFill className='icon'/> User Account
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillPinMapFill className='icon'/> Location
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBagDashFill className='icon'/> Items
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsHouseDoorFill className='icon'/> House/Stand
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsHouseUpFill className='icon'/> Ware House
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillPersonCheckFill className='icon'/> Vendor
                </a>
            </li>


            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillCartCheckFill className='icon'/> Received Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillCartDashFill className='icon'/> Issue Inventory
                </a>
            </li>
            <li className='sidebar-list-item'> 
                <a href="">
                    <BsFillLockFill className='icon'/> Logout
                </a>
            </li>
            <li className='sidebar-list-item'> 
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>

            <li className='sidebar-list-item'> 
                <a href="">
                    <BsFillInfoCircleFill className='icon'/> About KRT
                </a>
            </li>



        </ul>
    </aside>
  )
}

export default Sidebar