import { Link, NavLink } from "react-router-dom";
import {FiSearch} from 'react-icons/fi'
import {ImMenu} from 'react-icons/im'


const Navigation = () => {
    return (<>
        <div>
            <div className="">
                <div className="d-flex fw-bold p-3" style={{ zIndex:'3',justifyContent: 'space-between', backgroundColor: 'rgba(191, 191, 166, 0.9)',width:'100%', position:'fixed'}}>
                    <div className="">
                        <NavLink className='Header' to='/pharmarcyapp/'>Header</NavLink>
                    </div>
                    <div className=" d-none d-md-block">
                        <div className="d-flex MainNav" style={{ gap: '20px'}}>
                            <NavLink id='link' to='/pharmarcyapp/Aboutus' >About us</NavLink>
                            <NavLink id='link' to='/pharmarcyapp/ContactUs' >Contact us</NavLink>
                            <NavLink id='link' to='/pharmarcyapp/OurServices' >Our Services</NavLink>
                            <NavLink id='link' to='/pharmarcyapp/OurPartners' >Our Partners</NavLink>
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <div className="d-flex  bg-white px-2 p-1 rounded-4">
                            <div><FiSearch size={20} /></div>
                            <div className="ps-2" style={{color:'#ddd'}}>Need Something</div>
                        </div>
                    </div>
                    <div className="d-flex d-md-none justify-content-center flex-column">
                        <ImMenu size={30}/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default Navigation;