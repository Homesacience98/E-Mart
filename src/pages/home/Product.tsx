import React, { useEffect } from "react";
import HeaderComp from "../../components/other/HeaderComp";
import LinksHeader from "../../components/home/nav/LinksHeader";
import Navbar from "../../components/home/nav/Navbar";
import Categories from "../../components/home/nav/Categories";
import Footer from "../../components/home/Footer";
import ProductSlider from "../../components/home/ProductSlider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaTruckPickup, FaWhatsapp } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import ProductTab from "../../components/other/ProductTab";
import SponsoredProducts from "../../components/home/SponsoredProducts";
import { useAppDispatch } from "../../store/hooks/hooks";
import { getProducts } from "../../store/asyncFns/postData";

const Product = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  const header = (
    <p>
      Home {">"} Beauty, Health & Personal Care {">"}
      <span className="text-pink-800 font-semibold"> Nails</span>
    </p>
  );
  const changeIconColor = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // e.currentTarget.backgroundColor = "rgb(255 138 76)";
  };
  return (
    <div>
      <LinksHeader />
      <Navbar />
      {/* <Categories /> */}
      <div>
        <div className="mb-1 md:mb-4">
          <HeaderComp htmlEle={header} headerText={"Nail Accessories"} />
        </div>
        <div className="px-5 lg:mx-10">
          <div
            className="flex md:justify-between 
          flex-wrap md:flex-nowrap
          bg-white md:px-auto px-1 py-2 mb-4"
          >
            <div className="w-full md:w-1/2">
              <ProductSlider />
            </div>
            <div className="w-full md:w-2/5 md:mt-auto mt-2">
              <h2 className="mb-2">Gel Nail Extension Mold</h2>
              <p className="text-sm">
                Product Code : <span className="font-bold">52087</span>
              </p>
              <div>
                <h3 className="font-bold text-2xl mt-5">₦2,000</h3>
                <div className="flex justify-between text-sm w-9/12 md:w-3/5 lg:w-1/2 xl:w-1/2 items-end gap-x-2">
                  <div className="lg:w-1/2 xl:w-2/5">
                    <p className="w-full">Quantity :</p>
                  </div>
                  <div className=" flex items-center lg:w-8/12 w-1/2">
                    <div className="shadow-md w-10/12 mt-5">
                      <button
                        className="border w-1/3 py-1 text-gray-400
                   bg-white text-sm"
                      >
                        -
                      </button>
                      <button
                        disabled
                        className="border w-1/3 py-1 text-bla
                   bg-white text-sm"
                      >
                        1
                      </button>
                      <button
                        className="border w-1/3 py-1 text-gray-400
                   bg-white text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-xs mt-5 mb-4">
                  <p className="text-gray-400 mb-0.5">
                    Call us for bulk purchases:
                  </p>
                  <p>Click here to show phone number</p>
                </div>
                <hr />
                <div className="flex my-4">
                  <button
                    className="text-white rounded-sm bg-emerald-500 hover:bg-emerald-400 py-1 text-center
                  w-1/2 font-semibold mt-1 text-base"
                  >
                    Buy Now
                  </button>
                  <div className="w-1/2 flex items-center pl-4">
                    <div
                      aria-label="add to favorites"
                      className="w-10 hover:bg-orange-400 transition-5 h-10 py-0.5 mr-2 bg-gray-400 flex items-center justify-center rounded-full"
                    >
                      <FavoriteIcon className="fav-icon text-white" />
                    </div>
                    <p className="text-xs">Save For Later</p>
                  </div>
                </div>
                <hr />
                <div className="my-4 flex gap-x-2 items-center">
                  <FaTruckPickup className="text-2xl text-pink-500" />{" "}
                  <span className="text-xs">
                    Pickup & Pay on Collection Available
                  </span>
                </div>
                <hr />
                <div className="mt-4">
                  <p className="text-xs">Share With Friends</p>
                  <div className="flex gap-x-2 mt-4">
                    <div className="h-9 w-9 border rounded-full flex items-center justify-center p-0.5">
                      <BiLogoFacebook className="text-blue-700" />
                    </div>
                    <div className="h-9 w-9 border rounded-full flex items-center justify-center p-0.5">
                      <AiOutlineTwitter className="text-sky-400" />
                    </div>
                    <div className="h-9 w-9 border rounded-full flex items-center justify-center p-0.5">
                      <FaWhatsapp className="text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 mb-4">
            <div className="bg-white py-5 flex items-center gap-x-2 pl-2">
              <Avatar sx={{ bgcolor: pink[700] }} aria-label="recipe">
                E
              </Avatar>
              <p>Sold by</p>
              <p className="text-pink-700 text-underline font-bold">
                E-Mart-Online-Stores
              </p>
            </div>
          </div>
          <div>
            <ProductTab />
          </div>
          <div className="my-5">
            <SponsoredProducts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
