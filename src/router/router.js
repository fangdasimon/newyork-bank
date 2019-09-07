const UserLayout = () =>
  import(/* webpackChunkName: "userLayout" */ "../layouts/UserLayout/index");
const Login = () =>
  import(/* webpackChunkName: "login" */ "../layouts/UserLayout/login");
const LoginText = () =>
  import(/* webpackChunkName: "loginText" */ "../layouts/UserLayout/text");
const LoginVerify = () =>
  import(/* webpackChunkName: "loginVerify" */ "../layouts/UserLayout/verify");
const LoginWelcome = () =>
  import(
    /* webpackChunkName: "loginWelcome" */ "../layouts/UserLayout/welcome"
  );

const BasicLayout = () =>
  import(/* webpackChunkName: "basicLayout" */ "../layouts/BasicLayout/index");
const Overview = () =>
  import(/* webpackChunkName: "overview" */ "../views/account/overview/index");
const Activity = () =>
  import(
    /* webpackChunkName: "depositAccount" */ "../views/account/activity/DepositAccount"
  );
const RetiringAccount = () =>
  import(
    /* webpackChunkName: "retiringAccount" */ "../views/account/activity/RetiringAccount"
  );
const CDAccount = () =>
  import(
    /* webpackChunkName: "cDAccount" */ "../views/account/activity/CDAccount"
  );
const LoanAccount = () =>
  import(
    /* webpackChunkName: "loanAccount" */ "../views/account/activity/LoanAccount"
  );

const TransferActivity = () =>
  import(
    /* webpackChunkName: "transferActivity" */ "../views/transfer/Activity"
  );
const TransferSetting = () =>
  import(/* webpackChunkName: "transferSetting" */ "../views/transfer/Setting");
const Pay = () => import(/* webpackChunkName: "pay" */ "../views/pay");
const Profile = () =>
  import(/* webpackChunkName: "profile" */ "../views/profile");

export default [
  {
    path: "/user",
    component: UserLayout,
    hideInMenu: true,
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: Login
      },
      {
        path: "/user/login-text",
        name: "login-text",
        component: LoginText
      },
      {
        path: "/user/login-verify",
        name: "login-verify",
        component: LoginVerify
      },
      {
        path: "/user/login-welcome",
        name: "login-welcome",
        component: LoginWelcome
      }
    ]
  },
  {
    path: "/",
    redirect: "/account",
    hideInMenu: true
  },
  {
    path: "/account",
    name: "Account",
    meta: { title: "Account", icon: "account" },
    component: BasicLayout,
    children: [
      {
        path: "/account",
        redirect: "/account/overview"
      },
      {
        path: "/account/overview",
        name: "Overview",
        meta: { title: "Overview" },
        component: Overview
      },
      {
        path: "/account/activity",
        name: "DepositAccount",
        meta: { title: "Activity" },
        component: Activity
      },
      {
        path: "/account/loan-account",
        name: "LoanAccount",
        meta: { title: "loan-account" },
        component: LoanAccount
      },
      {
        path: "/account/retiring-account",
        name: "RetiringAccount",
        meta: { title: "retiring-account" },
        component: RetiringAccount
      },
      {
        path: "/account/cd-account",
        name: "CDAccount",
        meta: { title: "cd-account" },
        component: CDAccount
      }
    ]
  },
  {
    path: "/pay",
    name: "Pay",
    meta: { title: "Bill Pay", icon: "bill" },
    component: BasicLayout,
    children: [
      {
        path: "/pay/index",
        name: "Pay",
        meta: { title: "Pay" },
        component: Pay
      }
    ]
  },
  {
    path: "/transfer",
    name: "Transfer",
    meta: { title: "Transfer & Remittance", icon: "transfer" },
    component: BasicLayout,
    children: [
      {
        path: "/transfer/index",
        name: "transfer activity",
        meta: { title: "transfer activity" },
        component: TransferActivity
      },
      {
        path: "/transfer/setting",
        name: "transfer setting",
        meta: { title: "transfer setting" },
        component: TransferSetting
      }
    ]
  },
  {
    path: "/setting",
    name: "Setting",
    meta: { title: "Profile & Setting", icon: "profile" },
    component: BasicLayout,
    children: [
      {
        path: "/setting/index",
        name: "Profile",
        meta: { title: "Profile" },
        component: Profile
      }
    ]
  }
];
