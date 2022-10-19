import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif !important;
  }
  
  body {
    #components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #535353;
}
.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-summary > table > tfoot > tr > td {
border-right:  none;
}
  }
`;

export default GlobalStyle;
