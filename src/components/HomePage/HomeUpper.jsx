import React, { useState, useRef } from "react";
import './HomeUpper.css';
// Make sure these paths are correct for your project
import bg1 from './image/bg1.jpg';
import bg2 from './image/bg2.jpg';

export default function HomeUpper({ onType }) {
    const [index, setIndex] = useState(0);
    const images = [bg1, bg2];

    // ref for the scrolling carousel
    const carouselRef = useRef(null);

    const handleInputChange = (value) => {
        onType(value);
    };

    const leftClick = () => {
        setIndex((prev) => (prev === 0) ? images.length - 1 : prev - 1);
    };

    const rightClick = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Logic for the horizontal scroll buttons
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="home-wrapper">
            {/* Navbar 1 */}
            <ul className="p-2 text-white flex w-full justify-around items-center" id="navbar">
                <ul className="w-1/3 flex justify-evenly items-center">
                    <li className="text-3xl font-bold">Amazon</li>
                    <li className="p-2 cursor-pointer">Location</li>
                </ul>
                <li className="w-2/3 flex items-center bg-white rounded-md overflow-hidden">
                    <select name="" id="inputdropdown" className="bg-gray-200 border-r border-gray-300 text-black p-2 h-full outline-none">
                        <option value="All">All</option>
                    </select>
                    <input
                        type="text"
                        className="p-2 flex-grow text-black outline-none"
                        placeholder="Search for products"
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <button className="p-3 px-5 text-black" id="GoButton">Go</button>
                </li>
                <ul className="w-1/3 p-2 flex justify-evenly items-center text-sm font-medium">
                    <li>Language</li>
                    <li>Sign in</li>
                    <li>Returns & Orders</li>
                    <li>Cart</li>
                </ul>
            </ul>

            {/* Navbar 2 */}
            <ul className="flex justify-start gap-4 text-white p-2 px-4" id="navBar2">
                <li><button>All</button></li>
                <li><a href="/">Fresh</a></li>
                <li><a href="/">MX Player</a></li>
                <li><a href="/">Sell</a></li>
                <li><a href="/">Best Sellers</a></li>
                <li><a href="/">Today's Deals</a></li>
                <li><a href="/">Mobiles</a></li>
                <li><a href="/">Customer Service</a></li>
                <li><a href="/">Electronics</a></li>
            </ul>

            {/* Main Content Area */}
            <div id="mainContainer" className="relative w-full bg-gray-200">

                {/* Hero Background Images */}
                <div id="images" className="relative h-[600px] w-full">
                    <img
                        src={images[index]}
                        alt="Hero Banner"
                        className="absolute inset-0 w-full h-full object-cover mask-image-gradient"
                    />

                    {/* Hero Buttons */}
                    <div className="absolute inset-0 flex justify-between items-start pt-40 px-4 text-white z-10">
                        <button onClick={leftClick} className="px-4 py-10 text-4xl hover:border hover:border-white focus:outline-none">
                            &lt;
                        </button>
                        <button onClick={rightClick} className="px-4 py-10 text-4xl hover:border hover:border-white focus:outline-none">
                            &gt;
                        </button>
                    </div>
                </div>

                {/* Product Cards Container */}
                <div id="containers" className="relative z-20 px-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="extrasContainer">

                        {/* Card 1 */}
                        <li className="extras bg-white p-4 z-30">
                            <div className="extrasTitle">Continue your shopping style</div>
                            <div className="extrasLinks grid grid-cols-2 gap-2" id="CustomImages">
                                <a href="/"><img src="https://m.media-amazon.com/images/I/51e6hqRHuNL._AC_SY145_.jpg" alt="" /></a>
                                <a href="/"><img src="https://m.media-amazon.com/images/I/41iJuWAGm-L._AC_SY145_.jpg" alt="" /></a>
                                <a href="/"><img src="https://m.media-amazon.com/images/I/41wOv8v9hBL._AC_SY145_.jpg" alt="" /></a>
                                <a href="/"><img src="https://m.media-amazon.com/images/I/6139Gs3+FAL._AC_SY145_.jpg" alt="" /></a>
                            </div>
                            <div className="extrasBottom"><a href="/" className="text-blue-700 text-sm">See More Deals</a></div>
                        </li>

                        {/* Card 2 */}
                        <li className="extras bg-white p-4 z-30">
                            <div className="extrasTitle">Revamp your home in style</div>
                            <div className="extrasLinks grid grid-cols-2 gap-2">
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="" /><div className="hi">Furnishings</div></a>
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" alt="" /><div className="hi">Decor</div></a>
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" alt="" /><div className="hi">Storage</div></a>
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" alt="" /><div className="hi">Lighting</div></a>
                            </div>
                            <div className="extrasBottom"><a href="/" className="text-blue-700 text-sm">Explore all</a></div>
                        </li>

                        {/* Card 3 */}
                        <li className="extras bg-white p-4 z-30">
                            <div className="extrasTitle">Bulk order discounts</div>
                            <div className="extrasLinks grid grid-cols-2 gap-2">
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/Laptops_186_116_10._SY116_CB777673831_.jpg" alt="" /><div className="hi">Laptops</div></a>
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/KitchenAppliances_186_116_10._SY116_CB777673831_.jpg" alt="" /><div className="hi">Kitchen</div></a>
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/OfficeChairs_186_116_10._SY116_CB777673831_.jpg" alt="" /><div className="hi">Furniture</div></a>
                                <a href="/"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/dec/bau/ain/gw/ABdelivery_186_116._SY116_CB776314701_.jpg" alt="" /><div className="hi">Business</div></a>
                            </div>
                            <div className="extrasBottom"><a href="/" className="text-blue-700 text-sm">See more</a></div>
                        </li>

                        {/* Card 4 - Sign in */}
                        {/* FIX: Added minHeight: "unset" to override the 400px CSS rule */}
                        <li className="extras bg-white p-4 z-30 flex flex-col"
                            style={{
                                height: "fit-content",
                                minHeight: "unset",    /* This removes the 400px limit */
                                gap: "20px"            /* Creates the space between text and button */
                            }}>

                            <div className="extrasTitle">
                                Sign in for the best experience
                            </div>

                            <button className="w-full py-2 rounded-md font-bold shadow-sm" style={{ backgroundColor: "#f4a339" }}>
                                Sign in securely
                            </button>

                            
                        </li>

                        { }
                        {/* Carousel Section */}
                        {/* FIX: Added style={{ justifyContent: "flex-start" }} to stop the vertical stretching */}
                        <li className="extras bg-white p-4 col-span-1 md:col-span-2 lg:col-span-4 z-30" style={{ justifyContent: "flex-start", height: "auto", minHeight: "fit-content" }}>

                            <div className="extrasTitle flex items-center mb-4">
                                Related to items you've viewed
                                <a href="/" className="ml-4 text-sm font-normal text-blue-700">See more</a>
                            </div>

                            <div className="carousel-wrapper relative">
                                <button className="arrow left absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 h-20" onClick={scrollLeft}>
                                    ❮
                                </button>

                                <div className="carousel flex gap-4 overflow-x-hidden p-2 scroll-smooth" ref={carouselRef} id="carousel">
                                    {Array(10).fill(0).map((_, i) => (
                                        <img
                                            key={i}
                                            src="https://m.media-amazon.com/images/I/913irsXY8nL._AC_SY175_.jpg"
                                            alt={`Item ${i}`}
                                            className="h-[200px] object-contain cursor-pointer"
                                        />
                                    ))}
                                </div>

                                <button className="arrow right absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 h-20" onClick={scrollRight}>
                                    ❯
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Footer Section */}
                <div className="footer-section bg-[#232f3e] text-white mt-8">
                    <div className="back-to-top bg-[#37475a] p-4 text-center text-sm hover:bg-[#485769] cursor-pointer">
                        Back to top
                    </div>
                    <div className="p-10 grid grid-cols-4 gap-10 max-w-5xl mx-auto">
                        <div>
                            <h3 className="font-bold mb-2">Get to Know Us</h3>
                            <ul className="text-sm space-y-1 text-gray-300">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Press Releases</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Connect with Us</h3>
                            <ul className="text-sm space-y-1 text-gray-300">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Make Money with Us</h3>
                            <ul className="text-sm space-y-1 text-gray-300">
                                <li>Sell on Amazon</li>
                                <li>Protect Your Brand</li>
                                <li>Amazon Global Selling</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Let Us Help You</h3>
                            <ul className="text-sm space-y-1 text-gray-300">
                                <li>COVID-19 and Amazon</li>
                                <li>Your Account</li>
                                <li>Returns Centre</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-600 p-8 text-center text-xs">
                        © 1996-2024, Amazon.com, Inc. or its affiliates
                    </div>
                </div>

            </div>
        </div>
    );
}