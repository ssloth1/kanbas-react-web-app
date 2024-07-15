import React from 'react';
  import { NavLink } from 'react-router-dom';
  import { AiOutlineDashboard } from 'react-icons/ai';
  import { IoCalendarOutline } from 'react-icons/io5';
  import { LiaBookSolid, LiaCogSolid } from 'react-icons/lia';
  import { FaInbox, FaRegCircleUser } from 'react-icons/fa6';
  import './index.css';
  
  export default function KanbasNavigation() {
    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
      isActive ? 'list-group-item text-center border-0 nav-link active' : 'list-group-item text-center border-0 nav-link';
  
    return (
      <div
        id="wd-kanbas-navigation"
        style={{ width: 110 }}
        className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      >
        <a
          id="wd-neu-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 d-flex justify-content-center align-items-center"
          style={{ height: '100px' }}
        >
          <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
        </a>
  
        <NavLink
          id="wd-account-link"
          to="/Kanbas/Account"
          className={getLinkClass}
        >
          <FaRegCircleUser className="fs-1 account-icon" />
          <br />
          Account
        </NavLink>
  
        <NavLink
          id="wd-dashboard-link"
          to="/Kanbas/Dashboard"
          className={getLinkClass}
        >
          <AiOutlineDashboard className="fs-1" />
          <br />
          Dashboard
        </NavLink>
  
        <NavLink
          id="wd-course-link"
          to="/Kanbas/Courses/*"
          className={getLinkClass}
        >
          <LiaBookSolid className="fs-1" />
          <br />
          Courses
        </NavLink>
  
        <NavLink
          id="wd-calendar-link"
          to="/Kanbas/Calendar"
          className={getLinkClass}
        >
          <IoCalendarOutline className="fs-1" />
          <br />
          Calendar
        </NavLink>
  
        <NavLink
          id="wd-inbox-link"
          to="/Kanbas/Inbox"
          className={getLinkClass}
        >
          <FaInbox className="fs-1" />
          <br />
          Inbox
        </NavLink>
  
        <NavLink
          id="wd-labs-link"
          to="/Kanbas/Labs"
          className={getLinkClass}
        >
          <LiaCogSolid className="fs-1" />
          <br />
          Labs
        </NavLink>
      </div>
    );
  }
  
