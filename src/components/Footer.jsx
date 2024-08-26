// src/components/Footer.js
import React from 'react';

import { Image, Layout, Typography } from 'antd';

import UniversityImage from '../assets/images/uni-logo.png';

const { Header, Footer, Sider, Content } = Layout;

const { Text, Title } = Typography;

const socialOne = ['اینستاگرام', 'ایتا', 'واتس آپ'];

const socialTwo = ['دفترچه تلفن', 'تماس با ریاست', 'خبرنامه'];

const FooterComponent = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className=" h-16 bg-primary-200 flex flex-row items-center justify-center w-full">
        <div className=" w-9/12 self-center flex items-center justify-center ">
          <div className="w-full items-start justify-start gap-16 flex font-bold">
            {socialOne.map((item) => {
              return <Text className="text-white">{item}</Text>;
            })}
          </div>

          <div className="w-full items-end justify-end flex gap-16 font-bold">
            {socialTwo.map((item) => {
              return <Text className="text-white">{item}</Text>;
            })}
          </div>
        </div>
      </div>

      <Footer
        className="w-full bg-university flex border-t-white z-modal py-8"
        style={{ backgroundColor: '#002051', borderTop: '1px solid white' }}
      >
        <div className=" mx-0 px-2 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div className="flex flex-col items-center justify-center">
            <Image src={UniversityImage} width="120px" height="120px" />
            <Title className="text-white font-bold  text-sm mt-4">
              دانشگاه جامع انقلاب اسلامی
            </Title>

            <p className="text-xs mt-2">تمدن ساز، نوآور، تحول‌گرا</p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-bold mb-4 text-white">دسترسی آسان</h2>
            <ul className="space-y-2 text-white">
              <li>ریاست محترم دانشگاه</li>
              <li>معاونت آموزشی و پژوهشی</li>
              <li>پست الکترونیک دانشگاه</li>
              <li>معاونت پژوهش و فناوری</li>
              <li>فناوری اطلاعات و ارتباطات</li>
              <li>سامانه پاسخگویی به شکایات</li>
            </ul>
          </div>

          <div className="flex flex-col items-start text-white">
            <h2 className="font-bold mb-4 ">ارتباط با ما</h2>
            <div className="mb-2">
              <span className="font-bold">نشانی:</span>
              <p>
                تهران، میدان سپاه، خیابان حضرت ولی‌عصر، دانشگاه جامع انقلاب
                اسلامی
              </p>
            </div>
            <div className="mb-2">
              <span className="font-bold">کد پستی:</span>
              <p>555555555-55555555</p>
            </div>
            <div className="mb-2">
              <span className="font-bold">ایمیل:</span>
              <p>info@university.ir</p>
            </div>
            <div>
              <span className="font-bold">شماره تماس:</span>
              <p>021-12345678, 021-12345678</p>
            </div>
          </div>

          <div className="flex flex-col items-start text-white">
            <div className="mb-4">
              <p className="text-sm mb-2">دانشگاه جامع انقلاب اسلامی</p>
              <p className="text-xs">تمدن ساز، نوآور، تحول‌گرا</p>
            </div>
            <div className="bg-gray-300 w-full  flex items-center justify-center rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7264125853712!2d51.43750317583713!3d35.70834957257852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e030010002c51%3A0xc45695c5c466d892!2sIslamic%20Revolution%20University!5e0!3m2!1sen!2s!4v1724630195351!5m2!1sen!2s"
                width="300px"
                height="200px"
                style={{ borderRadius: '8px' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#072B49] py-4 mt-8">
        <div className="container mx-auto text-center text-sm">
          کلیه حقوق مادی و معنوی برای دانشگاه جامع انقلاب اسلامی محفوظ می‌باشد.
        </div>
      </div> */}
      </Footer>

      <div
        className=" h-12 flex flex-row items-center justify-center w-full"
        style={{ backgroundColor: '#002051', borderTop: '1px solid white' }}
      >
        <Text className="font-bold text-white">
          © کلیه حقوق مادی و معنوی برای دانشگاه جامع انقلاب اسلامی محفوظ
          می‌باشد.{' '}
        </Text>
      </div>
    </div>
  );
};

export default FooterComponent;
