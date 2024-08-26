// src/components/Header.js
import { Col, Image, Input, Layout, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import UniversityImage from '../assets/images/uni-full-logo.svg';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

const { Header } = Layout;

const { Text } = Typography;

const headerItemSectionOne = [
  { name: 'صفحه اصلی', path: '' },
  { name: 'دانشکده ها', path: '' },
  { name: 'ریاست', path: '' },
  { name: 'اداری و مالی', path: '' },
  { name: 'معاونت پژوهشی', path: '' },
  { name: 'معاونت دانشجویی', path: '' },
  { name: 'معاونت فرهنگی', path: '' },
  { name: 'سامانه ها', path: '' },
  { name: 'سامانه ها', path: '' },
  { name: 'تماس با دانشگاه', path: '' },
];

// const headerItemSectionTwo = [
//   { name: 'معاونت دانشجویی', path: '' },
//   { name: 'معاونت فرهنگی', path: '' },
//   { name: 'سامانه ها', path: '' },
//   { name: 'سامانه ها', path: '' },
//   { name: 'تماس با دانشگاه', path: '' },
// ];

const HeaderComponent = () => {
  return (
    <div
      className="w-full  flex h-24 border-b-2 border-b-white fixed top-0 z-modal p-0 m-0 gap-4 py-2"
      style={{ backgroundColor: '#002051' }}
    >
      <div className="self-center flex flex-col ">
        <div className="flex w-full justify-center items-center">
          <img
            src={UniversityImage}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="self-center flex ">
        <div className="flex justify-between text-center items-center gap-6">
          <Menu mode="horizontal" className="flex space-x-6">
            {headerItemSectionOne.map((item) => {
              return (
                <MenuItem className="font-bold text-white cursor-pointer">
                  {item.name}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-white mr-4">
          <i className="fas fa-globe"></i>
        </button>
        <div className="relative">
          <Input
            type="text"
            placeholder="جستجو"
            className="bg-white rounded-full py-1 px-4 "
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
