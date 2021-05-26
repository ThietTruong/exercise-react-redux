import React from 'react';
import { Route, Link } from 'react-router-dom';
import router from '../router';
const MenuLink = ({ label, to, activityOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activityOnlyWhenExact} children={({ match }) => {
      let active = match ? 'active-header-link' : '';
      return <div className={`header-item ${active}`} >
        <Link to={to} className="item-link">{label}</Link>
      </div>
    }} />
  )
}
function Header() {
  return (
    <div className='header'>
      {
        router.map((item, index) => {
          return (
            <MenuLink key={index} label={item.name} to={item.path} activityOnlyWhenExact={item.exact} />
          )
        })
      }
    </div>
  )
}

export default Header
