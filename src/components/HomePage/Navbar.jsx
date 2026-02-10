import React, { useState } from "react";
import './Navbar.css'
import bg1 from './image/bg1.jpg'
import bg2 from './image/bg2.jpg'
export default function ({ onType }) {
    const handleInputChange = (value) => {
        onType(value)
    }
    const leftClick = () => {
        setIndex((prev) => (prev === 0)? images.length-1: prev-1)
    }
    const rightClick = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
    const images = [bg1, bg2]
    const [index, setIndex] = useState(0)
    return (
        <div>
            <ul className="p-2 text-white flex w-full justify-around" id="navbar">
                <ul className="w-1/3  flex justify-evenly">
                    <li className="text-3xl ">Amazon</li>
                    <li className="p-2">location</li>
                </ul>
                <li className="w-2/3 flex items-center">
                    <select name="" id="inputdropdown" className="">

                    </select>
                    <input type="text" className="p-2 border-1 bg-white text-black border-black rounded-xl w-full" placeholder="Search for products" onChange={(e) => handleInputChange(e.target.value)} />
                    <button className="p-2 text-black rounded-xl" id="GoButton">Go</button>
                </li>
                <ul className="w-1/3 p-2 flex justify-evenly">
                    <li>language</li>
                    <li>sign in</li>
                    <li>returns and orders</li>
                    <li>cart</li>
                </ul>
            </ul>
            <ul className="flex justify-evenly text-white" id="navBar2">
                <li><button>All</button></li>
                <ul className="flex">
                    <li><a href="">Fresh</a></li>
                    <li><select name="Fresh" id=""></select></li>
                </ul>
                <li><a href="">MX Player</a></li>
                <li><a href="">Sell</a></li>
                <li><a href="">BestSellers</a></li>
                <li><a href="">Today's Deals</a></li>
                <li><a href="">Mobiles</a></li>
                <li><a href="">Customer Service</a></li>
                <li><a href="">New Releases</a></li>
                <li><a href="">Prime</a></li>
                <li><a href="">Fashion</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Amazon Pay</a></li>
                <li><a href="">Home & Kitchen</a></li>
                <li><a href="">Computers</a></li>
                <li><a href="">Book</a></li>
                <li><a href="">Gift Cards</a></li>
            </ul>
            <div id="mainContainer" className="relative w-full ">
                <div id="images" className="h-125">
                    <img
                    src={images[index]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                    src={images[index]}
                    alt=""
                    
                    className="absolute inset-0 w-full h-full object-cover"
                />
                </div>
                <div className="absolute inset-0 flex justify-between items-center text-white" id="buttons">
                    <button
                    onClick={leftClick}
                    className="px-6 text-6xl backdrop-blur-sm ">
                        &lt;
                    </button>
                    <button 
                    onClick={rightClick}
                    className="px-6 text-6xl backdrop-blur-sm ">
                        &gt;
                    </button>
                </div>
                <div id="containers" className="absolute text-black inset-0">
                    <ul className="flex gap-10  flex-wrap" id="extrasContainer">
                        <li className="extras">
                            <div className="extrasTitle">Continue your shopping style</div>
                            <div className="extrasLinks" id="CustomImages">
                                <a href=""><img src="https://m.media-amazon.com/images/I/51e6hqRHuNL._AC_SY145_.jpg" alt="" /></a>
                                <a href=""><img src="https://m.media-amazon.com/images/I/41iJuWAGm-L._AC_SY145_.jpg" alt="" /></a>
                                <a href=""><img src="https://m.media-amazon.com/images/I/41wOv8v9hBL._AC_SY145_.jpg" alt="" /></a>
                                <a href=""><img src="https://m.media-amazon.com/images/I/6139Gs3+FAL._AC_SY145_.jpg"  alt="" /></a>
                            </div>
                            <div className="extrasBottom" ><a  href="">See More Deals</a></div>
                        </li>
                        <li className="extras">
                            <div className="extrasTitle">Revamp your home in style</div>
                            <div className="extrasLinks">
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="" /><div className="hi">Cushion bedsheets & more</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" alt="" /><div className="hi">Figurines, vases & more</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" alt="" /><div className="hi">Home storage</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" alt="" /><div className="hi">Lighting solution</div></a>
                            </div>
                            <div className="extrasBottom"><a href="">Explore all</a></div>
                        </li>
                        <li className="extras">
                            <div className="extrasTitle">Bulk order discounts + Up to 18% GST savings</div>
                            <div className="extrasLinks">
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/Laptops_186_116_10._SY116_CB777673831_.jpg" alt="" /><div className="hi">Upto 45% off | Laptops</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/KitchenAppliances_186_116_10._SY116_CB777673831_.jpg" alt="" /><div className="hi">Upto 60% off | Kitchen appliances</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/OfficeChairs_186_116_10._SY116_CB777673831_.jpg" alt="" /><div className="hi">Min. 50% off | Office furnitures</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/dec/bau/ain/gw/ABdelivery_186_116._SY116_CB776314701_.jpg" alt="" /><div className="hi">Up to 60% off | for business purchases</div></a>
                            </div>
                            <div className="extrasBottom">Create a free account</div>
                        </li>
                        <li className="extras" style={{height: "fit-content"}}>
                            <div className="extrasTitle">
                                Sign in For best experience
                            </div>
                            <button className="p-4 rounded-xl" style={{backgroundColor: "#f4a339"}}>Sign in securely</button>
                        </li>
                        <li className="extras">
                            <div className="extrasTitle">Appliances for your home | Up to 55% off</div>
                            <div className="extrasLinks">
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" /><div className="hi">Air Conditioners</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" /><div className="hi">Refrigerators</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" /><div className="hi">Microwaves</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" /><div className="hi">Washing Machines</div></a>
                            </div>
                            <div className="extrasBottom">See More</div>
                        </li>
                        <li className="extras">
                            <div className="extrasTitle">Starting ₹49 | Deals on home essentials</div>
                            <div className="extrasLinks">
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" alt="" /><div className="hi">Cleaning supplies</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" alt="" /><div className="hi">Bathroom accessories</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" alt="" /><div className="hi">Home tools</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" alt="" /><div className="hi">Wallpapers</div></a>
                            </div>
                            <div className="extrasBottom">Explore all</div>
                        </li>
                        <li className="extras">
                            <div className="extrasTitle">Starting ₹199 | Amazon Brands & more</div>
                            <div className="extrasLinks">
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg" alt="" /><div className="hi">Starting ₹199 | Bedsheets</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg" alt="" /><div className="hi">Starting ₹199 | Curtains</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg" alt="" /><div className="hi">Minimum 40% off | Ironing board & more</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg" alt="" /><div className="hi">Up to 60% off | Home decor</div></a>
                            </div>
                            <div className="extrasBottom">See more</div>
                        </li>
                        <li className="extras">
                            <div className="extrasTitle">Automotive essentials | Up to 60% off</div>
                            <div className="extrasLinks">
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" /><div className="hi">Cleaning accessories</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" alt="" /><div className="hi">Tyre & rim care</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" alt="" /><div className="hi">Helmets</div></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" alt="" /><div className="hi">Vacuum cleaner</div></a>
                            </div>
                            <div className="extrasBottom">See more</div>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
            
            
        </div>
    )
}