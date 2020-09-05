// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },

        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/dashboard/analysis',
            },
            {
              path: '/dashboard',
              name: '首页',
              icon: 'dashboard',
              routes: [
                {
                  name: 'analysis',
                  icon: 'smile',
                  path: '/dashboard/analysis',
                  component: './dashboard/analysis',
                },
                {
                  name: 'monitor',
                  icon: 'smile',
                  path: '/dashboard/monitor',
                  component: './dashboard/monitor',
                },
                {
                  name: 'workplace',
                  icon: 'smile',
                  path: '/dashboard/workplace',
                  component: './dashboard/workplace',
                },
              ],
            },
            {
              path: '/book',
              name: '图书管理',
              icon: 'ReadOutlined',
              routes: [
                {
                  name: '图书查询',
                  icon: 'FileSearchOutlined',
                  path: '/book/search',
                  component: './list/search/projects',
                },
                {
                  name: '添加图书',
                  icon: 'FileAddOutlined',
                  path: '/book/add',
                  component: './list/search/projects',
                },
                {
                  name: '已删除图书',
                  icon: 'FileExcelOutlined',
                  path: '/book/delete',
                  component: './list/search/projects',
                },
              ],
            },
            {
              path: '/borrow',
              name: '借阅管理',
              icon: 'FileSyncOutlined',
              routes: [
                {
                  name: '借阅列表',
                  icon: 'BankOutlined',
                  path: '/borrow/list',
                  component: './list/search/projects',
                },
                {
                  name: '还书列表',
                  icon: 'ClusterOutlined',
                  path: '/borrow/return',
                  component: './list/search/projects',
                },
                {
                  name: '超期图书',
                  icon: 'TeamOutlined',
                  path: '/borrow/overdue',
                  component: './list/search/projects',
                },
                {
                  name: '罚款列表',
                  icon: 'TeamOutlined',
                  path: '/borrow/fine',
                  component: './list/search/projects',
                },
                {
                  name: '通知列表',
                  icon: 'TeamOutlined',
                  path: '/borrow/notice',
                  component: './list/search/projects',
                },
              ],
            },
            {
              path: '/buy',
              name: '图书采购',
              icon: 'ShoppingCartOutlined',
              routes: [
                {
                  name: '采购申请',
                  icon: 'SnippetsOutlined',
                  path: '/buy/request',
                  component: './list/search/projects',
                },
                {
                  name: '采购计划',
                  icon: 'FileDoneOutlined',
                  path: '/buy/plan',
                  component: './list/search/projects',
                },
              ],
            },
            {
              path: '/duty',
              name: '值班管理',
              icon: 'AuditOutlined',
              routes: [
                {
                  name: '值班登记',
                  icon: 'SnippetsOutlined',
                  path: '/duty/on',
                  component: './list/search/projects',
                },
                {
                  name: '值班预约',
                  icon: 'FileDoneOutlined',
                  path: '/duty/book',
                  component: './list/search/projects',
                },
                {
                  name: '值班记录',
                  icon: 'SolutionOutlined',
                  path: '/duty/history',
                  component: './list/search/projects',
                },
                {
                  name: '奖励记录',
                  icon: 'DiffOutlined',
                  path: '/duty/gift',
                  component: './list/search/projects',
                },
              ],
            },
            {
              path: '/system',
              name: '系统管理',
              icon: 'SettingOutlined',
              routes: [
                {
                  name: '系统设置',
                  icon: 'WindowsOutlined',
                  path: '/system/system',
                  component: './list/search/projects',
                },
                {
                  name: '用户管理',
                  icon: 'WindowsOutlined',
                  path: '/system/users',
                  component: './list/search/projects',
                },
                {
                  name: '管理员管理',
                  icon: 'WindowsOutlined',
                  path: '/system/managers',
                  component: './list/search/projects',
                },
              ],
            },
            /*
            {
              path: '/form',
              icon: 'form',
              name: 'form',
              routes: [
                {
                  name: 'basic-form',
                  icon: 'smile',
                  path: '/form/basic-form',
                  component: './form/basic-form',
                },
                {
                  name: 'step-form',
                  icon: 'smile',
                  path: '/form/step-form',
                  component: './form/step-form',
                },
                {
                  name: 'advanced-form',
                  icon: 'smile',
                  path: '/form/advanced-form',
                  component: './form/advanced-form',
                },
              ],
            },
            {
              path: '/list',
              icon: 'table',
              name: 'list',
              routes: [
                {
                  path: '/list/search',
                  name: 'search-list',
                  component: './list/search',
                  routes: [
                    {
                      path: '/list/search',
                      redirect: '/list/search/articles',
                    },
                    {
                      name: 'articles',
                      icon: 'smile',
                      path: '/list/search/articles',
                      component: './list/search/articles',
                    },
                    {
                      name: 'projects',
                      icon: 'smile',
                      path: '/list/search/projects',
                      component: './list/search/projects',
                    },
                    {
                      name: 'applications',
                      icon: 'smile',
                      path: '/list/search/applications',
                      component: './list/search/applications',
                    },
                  ],
                },
                {
                  name: 'table-list',
                  icon: 'smile',
                  path: '/list/table-list',
                  component: './list/table-list',
                },
                {
                  name: 'basic-list',
                  icon: 'smile',
                  path: '/list/basic-list',
                  component: './list/basic-list',
                },
                {
                  name: 'card-list',
                  icon: 'smile',
                  path: '/list/card-list',
                  component: './list/card-list',
                },
              ],
            },
            {
              path: '/profile',
              name: 'profile',
              icon: 'profile',
              routes: [
                {
                  name: 'basic',
                  icon: 'smile',
                  path: '/profile/basic',
                  component: './profile/basic',
                },
                {
                  name: 'advanced',
                  icon: 'smile',
                  path: '/profile/advanced',
                  component: './profile/advanced',
                },
              ],
            },
            {
              name: 'result',
              icon: 'CheckCircleOutlined',
              path: '/result',
              routes: [
                {
                  name: 'success',
                  icon: 'smile',
                  path: '/result/success',
                  component: './result/success',
                },
                {
                  name: 'fail',
                  icon: 'smile',
                  path: '/result/fail',
                  component: './result/fail',
                },
              ],
            },
            {
              name: 'exception',
              icon: 'warning',
              path: '/exception',
              routes: [
                {
                  name: '403',
                  icon: 'smile',
                  path: '/exception/403',
                  component: './exception/403',
                },
                {
                  name: '404',
                  icon: 'smile',
                  path: '/exception/404',
                  component: './exception/404',
                },
                {
                  name: '500',
                  icon: 'smile',
                  path: '/exception/500',
                  component: './exception/500',
                },
              ],
            },
            {
              name: 'account',
              icon: 'user',
              path: '/account',
              routes: [
                {
                  name: 'center',
                  icon: 'smile',
                  path: '/account/center',
                  component: './account/center',
                },
                {
                  name: 'settings',
                  icon: 'smile',
                  path: '/account/settings',
                  component: './account/settings',
                },
              ],
            },
            {
              name: 'editor',
              icon: 'highlight',
              path: '/editor',
              routes: [
                {
                  name: 'flow',
                  icon: 'smile',
                  path: '/editor/flow',
                  component: './editor/flow',
                },
                {
                  name: 'mind',
                  icon: 'smile',
                  path: '/editor/mind',
                  component: './editor/mind',
                },
                {
                  name: 'koni',
                  icon: 'smile',
                  path: '/editor/koni',
                  component: './editor/koni',
                },
              ],
            },
            */
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  // https://github.com/ant-design/ant-design/blob/f964abc7f432b6b56521e52b9b1b1da03d078887/components/layout/style/index.less
  // https://github.com/ant-design/ant-design/blob/f964abc7f432b6b56521e52b9b1b1da03d078887/components/menu/style/index.less
  // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
    'layout-header-background': defaultSettings.layoutHeaderBackground,
    'layout-trigger-background': '#2a5caa',
    // 'layout-sider-background': '#43639c',
    // 'menu-item-active-bg': '#afb4db',
    // 'heading-color-dark': '#43639c',
    // 'menu-highlight-color': '#ffffff',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
