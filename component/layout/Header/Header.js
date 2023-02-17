import React, { useState } from "react";
import "./Header.css";
import logo from '../../../images/logo.png';
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineAlignLeft} from "react-icons/ai";
{/* <script>
$(".sidebar ul li").on('click',function(){
  $(".sidebar ul li.active").removeClass('active');
  $(this).addClass('active');
})
</script> */}
const Header = () => {
const[isExpended,setExpendState]=useState(false);


  return (
    <>
<div className="div1">
<div className="div2">
  <h2 className="logo">Logo</h2>
  <ul className="ul">
    <li className="li text-decoration-none py-3 pt-5">Home</li>
    <li className="li text-decoration-none">Home</li>

    <li className="li text-decoration-none py-3">Home</li>
    <li className="li text-decoration-none py-3">Home</li>
    <li className="li text-decoration-none py-3">Home</li>
    <li className="profile text-decoration-none pt-5">Home</li>
    


  </ul>
</div>

</div>
    </>
  )
};
export default Header;