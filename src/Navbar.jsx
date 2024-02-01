import { Link } from "react-router-dom";
function NavBar() {
    const onHover=" hover:text-white active:text-white focus:text-white";
    return (
      <nav className='flex justify-between p-5 bg-green-600 items-center gap-10'>
        <Link className={"font-extrabold text-xl" + onHover} to="/home">Home</Link>
        <ul className="flex gap-5 list-none">
          <li><Link className={onHover} to="/store">Store</Link></li>
          <li><Link className={onHover} to="/cart">Cart</Link></li>
        </ul>
      </nav>
    )
  }
  
  export default NavBar