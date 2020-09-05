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
              path: '/tests',
              name: '图书管理',
              icon: 'FundProjectionScreenOutlined',
              routes: [
                {
                  name: '图书查询',
                  icon: 'SnippetsOutlined',
                  path: '/tests/daydayexam',
                  component: './tests/manager',
                },
                {
                  name: '添加图书',
                  icon: 'FileDoneOutlined',
                  path: '/tests/answers',
                  component: './tests/manager',
                },
                {
                  name: '已删除图书',
                  icon: 'SolutionOutlined',
                  path: '/tests/scores',
                  component: './tests/manager',
                },
                {
                  name: '试卷管理',
                  icon: 'DiffOutlined',
                  path: '/tests/exams',
                  component: './tests/manager',
                },
                {
                  name: '题库管理',
                  icon: 'ProfileOutlined',
                  path: '/tests/questions',
                  component: './tests/manager',
                },
              ],
            },
            {
              path: '/schools',
              name: '借阅管理',
              icon: 'ApartmentOutlined',
              routes: [
                {
                  name: '借阅列表',
                  icon: 'BankOutlined',
                  path: '/schools/manager',
                  component: './schools/manager',
                },
                {
                  name: '还书列表',
                  icon: 'ClusterOutlined',
                  path: '/schools/classes',
                  component: './schools/manager',
                },
                {
                  name: '超期图书',
                  icon: 'TeamOutlined',
                  path: '/schools/students',
                  component: './schools/manager',
                },
                {
                  name: '罚款列表',
                  icon: 'TeamOutlined',
                  path: '/schools/students',
                  component: './schools/manager',
                },
                {
                  name: '通知列表',
                  icon: 'TeamOutlined',
                  path: '/schools/students',
                  component: './schools/manager',
                },
              ],
            },
            {
              path: '/tests',
              name: '图书采购',
              icon: 'FundProjectionScreenOutlined',
              routes: [
                {
                  name: '采购申请',
                  icon: 'SnippetsOutlined',
                  path: '/tests/daydayexam',
                  component: './tests/manager',
                },
                {
                  name: '采购计划',
                  icon: 'FileDoneOutlined',
                  path: '/tests/answers',
                  component: './tests/manager',
                },
              ],
            },
            {
              path: '/tests',
              name: '值班管理',
              icon: 'FundProjectionScreenOutlined',
              routes: [
                {
                  name: '值班登记',
                  icon: 'SnippetsOutlined',
                  path: '/tests/daydayexam',
                  component: './tests/manager',
                },
                {
                  name: '值班预约',
                  icon: 'FileDoneOutlined',
                  path: '/tests/answers',
                  component: './tests/manager',
                },
                {
                  name: '值班记录',
                  icon: 'SolutionOutlined',
                  path: '/tests/scores',
                  component: './tests/manager',
                },
                {
                  name: '奖励记录',
                  icon: 'DiffOutlined',
                  path: '/tests/exams',
                  component: './tests/manager',
                },
              ],
            },
            {
              path: '/setting',
              name: '系统管理',
              icon: 'SettingOutlined',
              routes: [
                {
                  name: '系统设置',
                  icon: 'WindowsOutlined',
                  path: '/setting/manager',
                  component: './setting/manager',
                },
                {
                  name: '用户管理',
                  icon: 'WindowsOutlined',
                  path: '/setting/manager',
                  component: './setting/manager',
                },
                {
                  name: '管理员管理',
                  icon: 'WindowsOutlined',
                  path: '/setting/manager',
                  component: './setting/manager',
                },
              ],
            },
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
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
    'layout-header-background': defaultSettings.layoutHeaderBackground,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
