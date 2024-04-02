import React, { useState} from "react";
import "./App.css";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

import heroImage from "./Contents/IMG/heroIMG.png";
import companyImage1 from "./Contents/IMG/companyIMG1.png";
import companyImage2 from "./Contents/IMG/companyIMG2.png";
import companyImage3 from "./Contents/IMG/companyIMG3.png";
import imageProj1 from './Contents/IMG/imageProj1.png';
import imageProj2 from './Contents/IMG/imageProj2.png';
import imageProj3 from './Contents/IMG/imageProj3.png';
import imageProj4 from './Contents/IMG/imageProj4.png';
import imageProj5 from './Contents/IMG/imageProj5.png';

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
            <h1 className="flex flex-col text-[64px] leading-[64px] font-thin uppercase">
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
      <div className="flex flex-col ml-[45rem] gap-[40px] py-[30px]">
        <h2 className="text-[64px] font-light leading-[64px]">Про компанію</h2>
        <p className="w-[400px] text-[16px] leading-[25px]">
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

function MainTask() {
  return (
    <div>
      <h2 className="text-[64px] font-light text-[#bdbdbd]">Основные задачи</h2>
      <ul className="flex justify-center gap-[180px]">
        <li className="flex items-center items-top w-[413px] gap-[20px]">
          <h4 className="text-[200px] leading-[238.67px] mr-[20px] font-black text-[#F2F2F2]">1</h4>
          <p className="text-[22px] leading-[36px] text-[#333333]">Создание комфортных условий и повышение качества обслуживания клиентов</p>
        </li>
        <li className="flex items-center items-top w-[570px] gap-[20px]">
          <h4 className="text-[200px] leading-[238.67px] font-black text-[#F2F2F2]">2</h4>
          <p className="text-[22px] leading-[36px] text-[#333333]">Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</p>
        </li>
      </ul>
    </div>
  )
}

function OurProjects() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <h2 className="text-[64px] font-light text-[#bdbdbd]">Наши проекты</h2>
      <div className="flex justify-center gap-[30px] mb-[30px]">
        <div
          className="relative overflow-hidden" 
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <img
            className="w-[570px] h-[255px] object-cover"
            src={imageProj1}
            alt=""/>
          {isShown && <div
            className={`absolute transition-transform translate-y-full top-0 
            left-0 h-full w-full bg-slate-800 
            hover:translate-y-0 hover:overflow-visible`}>
            </div>}
        </div>

        <img
          className="w-[570px] h-[255px] object-cover"
          src={imageProj2}
          alt=""
        />
      </div>
      <div className="flex justify-center gap-[30px]">
        <img
          className="w-[270px] h-[255px] object-cover"
          src={imageProj3}
          alt=""
        />
        <img
          className="w-[470px] h-[255px] object-cover"
          src={imageProj4}
          alt=""
        />
        <img
          className="w-[370px] h-[255px] object-cover"
          src={imageProj5}
          alt=""
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App px-[360px]">
      <Header />
      <HeroSection />
      <CompanySection />
      <MainTask />
      <OurProjects />
    </div>
  );
}
