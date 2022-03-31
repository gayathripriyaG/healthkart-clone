import React, { useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Rating from '@mui/material/Rating';
import styles from "./LandingPage.module.css"
import DoneIcon from '@mui/icons-material/Done';
import { positions } from '@mui/system';

export const Container = ({item}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    if(open){
        var displayDetails = {
            display: "block",
            position: "absolute",
            // filter: "brightness(90%)"
        }
        var containerHover = {
            boxShadow: "10px 0px 5px black"
        }
    }
  return (
<div>
        <div key={item.id} >
            <div className={styles.container} style={containerHover} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                    <div className={styles.benefitsWrapper} style={displayDetails}>
                        <h5>Benefits</h5>
                        <div>
                            <div className={styles.benefitsTitles}>
                                {item.Benefits.map((benefit)=><div className={styles.benefitsList}><DoneIcon sx={{color: "#00AFAE", fontSize: "12px"}}/> <p>{benefit}</p></div>)}
                            </div>
                            <div className={styles.ingredientsWrapper}>
                                <p style={{textAlign: "left", marginLeft: "5px"}}>{item.productDetails}</p>
                                <div className={styles.ingredients}>
                                    {item.containsWeight.map((val)=><h6>{val}</h6>)}
                                </div>
                                <div className={styles.ingredients}>
                                    {item.containsCal.map((val)=><h5>{val}</h5>)}
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.imageWrapper}>
                        <div className={styles.wishlistIcon}><img src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/heart_plus.svg" alt="wishlist-icon" /></div>
                        <img src={item.img_url} className={styles.itemImage} alt="Item-Images"></img>
                        <div><button className={styles.discountBtn}>{item.discount} off</button></div>
                    </div>        
                    <div className={styles.detailsWrapper}>
                        <h5 className={styles.title}>{item.title}</h5>
                        <div className={styles.ratingWrapper}><Rating value={item.rating} readOnly precision={0.1} size="small" sx={{color: "#008497"}}></Rating><h6 className={styles.rating}>{item.rating}</h6></div>
                        <div className={styles.priceAndAdd}>
                            <div className={styles.price}>
                                <h5 className={styles.discountPrice}><CurrencyRupeeIcon sx={{color: "black", fontSize: "12px"}}/>{item.discountedPrice}</h5>
                                <h5 className={styles.originalPrice}><CurrencyRupeeIcon sx={{color: "#929495", fontSize: "10px"}}/>{item.originalPrice}</h5>
                            </div>
                            <div>
                                <button className={styles.addBtn}><div style={{display: "flex", width: "35px", margin: "auto"}}><AddShoppingCartIcon sx={{color: "#004b5d", fontSize: "12px"
                            }}/><p style={{margin: "2px"}}>ADD</p></div></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.premiumPriceBox}>
                    <h5 style={{margin: "0px"}}>Premium Price: <CurrencyRupeeIcon sx={{color: "black", fontSize: "14px"}}/>{item.premiumPrice}</h5>
                    <LockOutlinedIcon sx={{fontSize: "12px"}}/>
                </div>
                </div>           
        </div>
    )
}
