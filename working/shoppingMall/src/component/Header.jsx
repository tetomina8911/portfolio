import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faSistrix } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = ( {authenticate, setAuthenticate} ) => {
  const menuList = [
    {
      id: 0,
      name: 'shop'
    },
    {
      id: 1,
      name: 'blog'
    },
    {
      id: 2,
      name: 'Our Story'
    },
  ]
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }
  const goMain = () => {
    navigate("/")
  }
  const goToLogout = () => {
    setAuthenticate(false);
    navigate('/')
  }

  const search = (event) => {
    // console.log("presss")
    if(event.key === "Enter"){
      let keyword = event.target.value;
      // console.log("enter :", keyword)
      navigate(`/?q=${keyword}`)
    }
  }
  const searchItem = document.getElementById("searchItem")

  if(searchItem){
    searchItem.addEventListener("focus", function(){
      searchItem.value = "";
    })
  }



  return (
    <header id="header">
      <h1 id="logo" onClick={goMain}><span>S</span>HOPPE</h1>
      <nav id="nav">
        <ul className='menu'>
          {menuList.map(menu => 
            <li key={menu.id}>{menu.name}</li>
          )}          
        </ul>
        <ul className='rightShorcut'>
          <li><FontAwesomeIcon icon={faSistrix} />
            <input id="searchItem" type="text" placeholder='Search' onKeyDown={(event)=>search(event)} />
          </li>
          { authenticate === true ? <li onClick={goToLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></li>
          : <li onClick={goToLogin}><FontAwesomeIcon icon={faUser} /></li> }
          <li><FontAwesomeIcon icon={faHeart} /></li>
          <li><FontAwesomeIcon icon={faCartShopping} /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header