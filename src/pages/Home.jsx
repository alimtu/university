import React from 'react';
import SwiperComponent from '../components/Swiper';
import { Col, Image, Row, Typography } from 'antd';
import Slide_One from '../assets/images/slide_1.jpg';

const { Text, Title } = Typography;

const Home = () => {
  const items = [
    {
      name: 'سامانه تغذیه',
      path: '',
      icon: '',
    },
    {
      name: 'صندوق رفاه دانشجویی',
      path: '',
      icon: '',
    },
    {
      name: 'سامانه کتابخانه ها',
      path: '',
      icon: '',
    },
    {
      name: 'سامانه بهستان',
      path: '',
      icon: '',
    },
  ];

  let articles = [
    { title: 'بخش اول مقاله' },
    { title: 'بخش دوم مقاله' },
    { title: 'بخش سوم مقاله' },
    { title: 'بخش چهارم مقاله' },
    { title: 'بخش پنجم مقاله' },
  ];

  const texts = [
    'سامانه مدیریت نشریات علمی آیین نامه ها',
    'پایگاه استنادی علوم جهان اسلام (ISC)',
    'سامانه نان (سامانه نظام ایده ها و نیازها)',
    'سامانه ساتع (سامانه اجرایی تقاضا و عرضه)',
    'سامانه مپفا (مدیریت پژوهش و فناوری ایران)',
    'سامانه ساجد (سامانه ارتباط جامعه و دانشگاه)',
    'سامانه شاعا (شبکه آزمایشگاه های علمی ایران)',
    'سامانه پرتال نشریات علمی',
  ];

  return (
    <div className="flex flex-col gap-16 overflow-y-auto">
      <SwiperComponent />

      {/* <div className="w-fullitems-center justify-center flex">
        <div className="w-full md:w-3/4 flex flex-wrap items-center justify-between">
          {items.map((item) => {
            return (
              <div className="flex flex-col gap-4 items-center w-1/2 md:w-1/4 p-2">
                <div className="outer-container">
                  <div className="inner-container">Icon</div>
                </div>
                <div className="text-primary-600 font-bold">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div> */}

      <Row className="w-full px-12" gutter={24}>
        <Col md={18}>
          <div className="mb-12">
            <Title style={{ fontSize: 24 }}>
              نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع
              انقلاب اسلامی
            </Title>
            <Text>
              متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن
              برای تست میباشد متن برای تست میباشد متن برای تست میباشد
            </Text>
          </div>

          <div className="mb-12">
            <Title style={{ fontSize: 24 }}>فهرست مطالب</Title>

            <div className="w-full h-56 bg-white rounded-md p-4 mt-8 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {articles.map((item) => {
                  return (
                    <Text className="text-primary-500 font-bold cursor-pointer">
                      {item.title}
                    </Text>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <Title style={{ fontSize: 24 }}>
              نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع
              انقلاب اسلامی
            </Title>
            <Text>
              متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن
              برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای
              تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست
              میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد
              متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن
              برای تست میباشد . متن برای تست میباشد متن برای تست میباشد متن برای
              تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست
              میباشد متن برای تست میباشد متن برای تست میباشد. متن برای تست
              میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد
              متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن
              برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای
              تست میباشد متن برای تست میباشد .
            </Text>
          </div>

          <div className="mb-12 flex flex-col gap-8">
            <Image
              src={Slide_One}
              className="w-full rounded-md"
              height="500px"
              width="100%"
            />
            <Text>
              متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن
              برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای
              تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست
              میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد
              متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن
              برای تست میباشد . متن برای تست میباشد متن برای تست میباشد متن برای
              تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست
              میباشد متن برای تست میباشد متن برای تست میباشد. متن برای تست
              میباشد متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد
              متن برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن
              برای تست میباشد متن برای تست میباشد متن برای تست میباشد متن برای
              تست میباشد متن برای تست میباشد .
            </Text>
          </div>
        </Col>

        <Col md={6}>
          <div className="mb-12 flex flex-col">
            <Title style={{ fontSize: 24 }}>پیوند های مفید</Title>

            <div className="w-full  bg-white rounded-md p-2 py-4 mt-4 gap-4 flex flex-col">
              <div>
                <Image
                  src={Slide_One}
                  width={'100%'}
                  height={'200px'}
                  className="rounded-md"
                />
              </div>

              <div className="flex flex-col gap-3">
                {texts.map((item) => {
                  return (
                    <Text className="font-bold text-primary-400 cursor-pointerf">
                      {item}
                    </Text>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
