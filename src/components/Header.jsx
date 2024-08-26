// src/components/Header.js
import { Col, Image, Input, Layout, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import UniversityImage from '../assets/images/uni-full-logo.svg';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const { Header } = Layout;

const { Text } = Typography;

// Original data array
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

// Helper function to generate children based on title
const generateChildren = (title) => {
  switch (title) {
    case 'دانشکده ها':
      return [
        { key: '2-1', label: 'دانشکده فنی' },
        {
          key: '2-2',
          label: 'دانشکده علوم',
          children: [
            { key: '3-1', label: 'پیام ریاست' },
            { key: '3-2', label: 'درباره ریاست' },
            { key: '3-1', label: 'پیام ریاست' },
            { key: '3-2', label: 'درباره ریاست' },
          ],
        },
        { key: '3-1', label: 'پیام ریاست' },
        { key: '3-2', label: 'درباره ریاست' },
        { key: '5-1', label: 'طرح های پژوهشی' },
        { key: '5-2', label: 'همایش ها' },
      ];
    case 'ریاست':
      return [
        { key: '3-1', label: 'پیام ریاست' },
        { key: '3-2', label: 'درباره ریاست' },
      ];
    case 'اداری و مالی':
      return [
        { key: '4-1', label: 'حسابداری' },
        { key: '4-2', label: 'مالی' },
      ];
    case 'معاونت پژوهشی':
      return [
        { key: '5-1', label: 'طرح های پژوهشی' },
        { key: '5-2', label: 'همایش ها' },
      ];
    case 'معاونت دانشجویی':
      return [
        { key: '6-1', label: 'امور خوابگاه' },
        { key: '6-2', label: 'امور تربیت بدنی' },
      ];
    case 'معاونت فرهنگی':
      return [
        { key: '7-1', label: 'نشریات فرهنگی' },
        { key: '7-2', label: 'مراسم ها' },
      ];
    case 'سامانه ها':
      return [
        { key: '8-1', label: 'سامانه ثبت نام' },
        { key: '8-2', label: 'سامانه امتحانات' },
      ];
    case 'تماس با دانشگاه':
      return [
        { key: '10-1', label: 'اطلاعات تماس' },
        { key: '10-2', label: 'نقشه دانشگاه' },
      ];
    default:
      return [];
  }
};

// Creating the items array with children
const items = headerItemSectionOne.map((item, index) => ({
  key: `${index + 1}`,
  icon: <MailOutlined />, // Icon can be customized per item if needed
  label: item.name,
  children: generateChildren(item.name), // Add children based on the title
}));

const HeaderComponent = () => {
  return (
    <div
      className="w-full  flex h-24 border-b-2 border-b-white fixed top-0 z-1001 p-0 m-0 gap-4 py-2"
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
          <Menu
            direction="rtl"
            lang="fa"
            style={{
              width: '70vw',
              backgroundColor: '#002051',
              direction: 'rtl',
            }}
            mode="horizontal"
            items={items}
          />

          {/* <Menu mode="horizontal" className="flex space-x-6">
            {headerItemSectionOne.map((item) => {
              return (
                <MenuItem className="font-bold text-white cursor-pointer">
                  {item.name}
                </MenuItem>
              );
            })}
          </Menu> */}
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
