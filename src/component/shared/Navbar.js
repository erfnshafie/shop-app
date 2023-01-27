import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
import shopIcon from "../../icons/shop.svg";
import styles from "./Navbar.module.css";


const Navbar = () => {

const {state} = useContext(CartContext);


    return (
        <div className={styles.mainConyainer}>
                <div className={styles.container}>
                   <Link className={styles.productLink} to="/products">products </Link> 
                   <div className={styles.iconContainer}>
                    <Link to="/Cart"> <img src={shopIcon} alt="shop " /> </Link>

                    <span>{state.itemsCounter}</span>
                   </div>
                </div>            
        </div>
    );
};

export default Navbar;