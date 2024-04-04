import React, { useEffect } from "react";
import "./App.css";
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

//Images
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
import formImage from './Contents/IMG/guy.png';
import logo from './Contents/IMG/logo.svg';
import logo2 from './Contents/IMG/logo2.svg'

function Header() {
  return (
    <header className="App-header p-[25px] px-[360px]">
      <div className="flex items-center">
        <div className="logo mr-[18rem]">
          <a href="@">
            <img className="w-[80px] h-[45px] relative" src={logo} alt="" />
            <img className="w-[100px] h-[15px] absolute left-[350px] top-[60px]" src={logo2} alt="" />
          </a>
        </div>
        <ul className="flex gap-20">
          <li className="headerLink">
            <a className="text-[#333333] uppercase hover:border-y-2 hover:border-[#333333]" href="@">Головна</a>
          </li>
          <li className="headerLink">
            <a className="text-[#333333] uppercase hover:border-y-2 hover:border-[#333333]" href="@">Галерея</a>
          </li>
          <li className="headerLink">
            <a className="text-[#333333] uppercase hover:border-y-2 hover:border-[#333333]" href="@">Проекти</a>
          </li>
          <li className="headerLink">
            <a className="text-[#333333] uppercase hover:border-y-2 hover:border-[#333333]" href="@">Сертифікати</a>
          </li>
          <li className="headerLink">
            <a className="text-[#333333] uppercase hover:border-y-2 hover:border-[#333333]" href="@">Контакти</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <div className="px-[360px]">
      <div className="flex justify-between mb-[120px]">
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
        <img className="w-[48rem] h-[51rem]" src={heroImage} alt="" />
      </div>
    </div>
  );
}

function CompanySection() {
  return (
    <div className="px-[360px]">
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
    </div>
    
  );
}

function MainTask() {
  return (
    <div className="px-[360px]">
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
  return (
    <div className="px-[360px]">
      <h2 className="text-[64px] font-light text-[#bdbdbd]">Наши проекты</h2>
      <div>
        <div className="flex justify-center gap-[30px] mb-[30px]">
          <div className="picture_hover1 relative">
            <motion.div
              className="absolute w-full h-full bg-[#333333] px-[79px] py-[48px]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8, transition: { duration: 0.7 } }}
            >
              <p className="text-[64px] leading-[64px] text-white font-bold">
                ДОСУГОВЫЙ ЦЕНТР
              </p>
              <button className="w-56 h-16">
                <div className="flex font-light uppercase items-center gap-4">
                  <p className="text-white">подробнее</p>
                  <HiArrowLongRight className="text-white" />
                </div>
              </button>
            </motion.div>
            <img
              className="w-[570px] h-[255px] object-cover"
              src={imageProj1}
              alt=""
            />
          </div>
          <div className="picture_hover2 relative">
            <motion.div
              className="absolute w-full h-full bg-[#333333] px-[79px] py-[48px]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8, transition: { duration: 0.7 } }}
            ></motion.div>
            <img
              className="w-[570px] h-[255px] object-cover"
              src={imageProj2}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center gap-[30px]">
          <div className="picture_hover3 relative">
            <motion.div
              className="absolute w-full h-full bg-[#333333] px-[79px] py-[48px]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8, transition: { duration: 0.7 } }}
            ></motion.div>
            <img
              className="w-[270px] h-[255px] object-cover"
              src={imageProj3}
              alt=""
            />
          </div>
          <div className="picture_hover4 relative">
            <motion.div
              className="absolute w-full h-full bg-[#333333] px-[79px] py-[48px]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8, transition: { duration: 0.7 } }}
            ></motion.div>
            <img
              className="w-[470px] h-[255px] object-cover"
              src={imageProj4}
              alt=""
            />
          </div>
          <div className="picture_hover5 relative">
            <motion.div
              className="absolute w-full h-full bg-[#333333] px-[79px] py-[48px]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8, transition: { duration: 0.7 } }}
            ></motion.div>
            <img
              className="w-[370px] h-[255px] object-cover"
              src={imageProj5}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-[#333333] w-[222px] h-[71px] mt-[30px] hover:bg-[#222222] duration-500">
            <div className="flex font-light uppercase items-center gap-4 justify-center">
              <p className="text-white text-[12px]">ВСЕ ПРОЕКТЫ</p>
              <HiArrowLongRight className="text-white"/>
            </div>
          </button>
      </div>
      
    </div>
  );
}

function Feedback() {
  return (
    <div className="px-[360px]">
      <h2 className="text-[64px] font-light text-[#bdbdbd]">
        Связаться с нами
      </h2>
      <div className="flex justify-between">
        <form className="flex flex-col gap-[10px]" action="">
          <input
            className="w-[390px] h-[46px] bg-[#F3F3F3] p-4"
            type="text"
            placeholder="Имя"
          />
          <input
            className="w-[390px] h-[46px] bg-[#F3F3F3] p-4"
            type="tel"
            placeholder="Номер телефона"
            required
          />
          <input
            className="w-[390px] h-[46px] bg-[#F3F3F3] p-4"
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            className="w-[390px] h-[46px] bg-[#F3F3F3] p-4"
            type="text"
            placeholder="Интересующий товар/услуга"
          />
          <textarea
            className="w-[390px] h-[147px] bg-[#F3F3F3] p-4 text-wrap resize-none"
            placeholder="Сообщение"
            required
          />

          <div className="flex gap-5 items-center p-3">
            <input type="checkbox" value="" className="w-4 h-4 checked:accent-[#333333]"
              name="checkbox"
              id="checkbox_id"
            />
            <label className="text-[14px] leading-[17.43px] text-[#333333] w-[310px] select-none" htmlFor="checkbox_id">
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </label>
          </div>

          <button className="bg-[#333333] w-[222px] h-[71px] hover:bg-[#222222] duration-500">
            <div className="flex font-light uppercase items-center gap-4 justify-center">
              <p className="text-white text-[12px]">ВСЕ ПРОЕКТЫ</p>
              <HiArrowLongRight className="text-white" />
            </div>
          </button>
        </form>
        <img className="w-[750px] h-[370px] object-cover" src={formImage} alt="" />
      </div>
    </div>
  );
} 

function Footer() {
  return (
    <footer>
      <div></div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CompanySection />
      <MainTask />
      <OurProjects />
      <Feedback />
    </div>
  );
}
