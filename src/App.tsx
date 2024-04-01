import React from "react";
import "./App.css";
import heroImage from "./Contents/IMG/heroIMG.png";
import companyImage1 from "./Contents/IMG/companyIMG1.png";
import companyImage2 from "./Contents/IMG/companyIMG2.png";
import companyImage3 from "./Contents/IMG/companyIMG3.png";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Header() {
  return (
    <header className="App-header p-10">
      <div className="flex justify-between">
        <div className="logo mr-72">
          <a href="@">Digital Project</a>
        </div>
        <ul className="flex gap-20">
          <li className="headerLink">
            <a href="@">Головна</a>
          </li>
          <li className="headerLink">
            <a href="@">Галерея</a>
          </li>
          <li className="headerLink">
            <a href="@">Проекти</a>
          </li>
          <li className="headerLink">
            <a href="@">Сертифікати</a>
          </li>
          <li className="headerLink">
            <a href="@">Контакти</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="flex justify-between mb-[120px]">
          <div className="flex flex-col gap-16 justify-center">
            <h1 className="flex flex-col text-6xl font-thin uppercase">
              project<span className="heroTitleSecond font-black">home</span>
            </h1>
            <ul className="flex gap-6">
              <li>
                <button className="flex w-14 h-14 border border-[#f2f2f2] items-center justify-center hover:bg-[#f9f9f9] duration-500">
                  <HiArrowLongLeft />
                </button>
              </li>
              <li>
                <button className="flex w-14 h-14 border border-[#f2f2f2] items-center justify-center hover:bg-[#f9f9f9] duration-500">
                  <HiArrowLongRight />
                </button>
              </li>
            </ul>
            <ul className="flex text-[#BDBDBD] gap-5">
              <li className="text-2xl">01</li>
              <li>
                <div className="w-11 -rotate-45 border border-BDBDBD inline-block align-middle"></div>
              </li>
              <li className="text-2xl">02</li>
            </ul>
          </div>
          <div>
            <img className="w-[48rem] h-[51rem]" src={heroImage} alt="" />
          </div>
        </section>
  )
}

function CompanySection() {
  return (
    <div className="card bg-[#fbfbfb] mb-[150px]">
      <div className="companyImages relative">
        <img
          className="w-[270px] h-[265px] absolute top-[30px] bottom-[140px] left-[100px]"
          src={companyImage1}
          alt=""
        />
        <img
          className="w-[270px] h-[140px] absolute top-[325px] left-[100px]"
          src={companyImage2}
          alt=""
        />
        <img
          className="w-[270px] h-[345px] absolute top-[60px] left-[400px]"
          src={companyImage3}
          alt=""
        />
      </div>
      <div className="flex flex-col ml-[45rem] gap-[40px] py-[45px]">
        <h2 className="text-5xl font-light">Про компанію</h2>
        <p className="text-m w-[500px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="bg-white w-56 h-16 hover:bg-[#BDBDBD] duration-500">
          <div className="flex font-light uppercase items-center gap-4 justify-center">
            <p>Читати</p>
            <HiArrowLongRight />
          </div>
        </button>
      </div>
    </div>
  );
}



export default function App() {
  return (
    <div className="App px-36">
      <Header/>
      <HeroSection/>
      <CompanySection/>
    </div>
  );
}
