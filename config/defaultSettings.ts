import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#2a5caa',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  splitMenus: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'OneLibrary图书馆管理系统-Pro 1.0',
  pwa: false,
  iconfontUrl: '',
};
// {
//   navTheme: 'dark',
//     // 拂晓蓝
//     primaryColor: '#1890ff',
//       layout: 'side',
//         contentWidth: 'Fluid',
//           fixedHeader: false,
//             fixSiderbar: true,
//               colorWeak: false,
//                 menu: {
//     locale: true,
//   },
//   title: 'Ant Design Pro',
//     pwa: false,
//       iconfontUrl: '',
// };

export type { DefaultSettings };

export default proSettings;
