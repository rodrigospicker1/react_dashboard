import "./navbar.scss";

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="logo">
      <img src="logo.svg"/>
      <span>Lamadmin</span>
    </div>
    <div className="icons">
      <img src="/search.svg" />
      <img src="/app.svg" />
      <img src="/expand.svg" />
      <div className="notifications">
        <img src="/notifications.svg" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="" />
        <span>Jane</span>
      </div>
    </div>
   </div>
  )
}

export default Navbar