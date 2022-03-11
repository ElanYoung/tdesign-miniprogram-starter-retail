const userInfo = {
  avatarUrl:
    'https://cdn-we-retail.ym.tencent.com/miniapp/usercenter/icon-user-center-avatar@2x.png',
  nickName: 'Tdesign 🌟',
  phoneNumber: '13438358888',
  gender: 1,
};
const countsData = [
  {
    num: 2,
    name: '积分',
    type: 'point',
  },
  {
    num: 10,
    name: '优惠券',
    type: 'coupon',
  },
];

const orderTagInfos = [
  {
    title: '待付款',
    iconName: 'credit_card',
    orderNum: 1,
    tabType: 5,
    status: 1,
  },
  {
    title: '待发货',
    iconName: 'deliver',
    orderNum: 1,
    tabType: 10,
    status: 1,
  },
  {
    title: '待收货',
    iconName: 'package',
    orderNum: 1,
    tabType: 40,
    status: 1,
  },
  // {
  //   title: '待评价',
  //   iconName: 'comment',
  //   orderNum: 3,
  //   tabType: 60,
  //   status: 1,
  // },
  {
    title: '退款/售后',
    iconName: 'exchang',
    orderNum: 0,
    tabType: 0,
    status: 1,
  },
];

const customerServiceInfo = {
  servicePhone: '4006336868',
  serviceTimeDuration: '每周三至周五 9:00-12:00  13:00-15:00',
};

export const genSimpleUserInfo = () => ({ ...userInfo });

export const genUsercenter = () => ({
  userInfo,
  countsData,
  orderTagInfos,
  customerServiceInfo,
});
