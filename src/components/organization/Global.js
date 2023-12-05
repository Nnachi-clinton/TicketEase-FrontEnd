import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-mulish: Mulish;
--font-helvetica-neue: 'Helvetica Neue';

/* font sizes */
--font-size-sm: 14px;
--font-size-xs: 12px;
--font-size-5xl: 24px;
--font-size-base: 16px;

/* Colors */
--color-gray-100: #1d2126;
--color-gray-200: #1d2125;
--color-gray-300: #031839;
--color-black: #000;
--color-white: #fff;
--color-gainsboro-100: #e5e5e5;
--color-darkslategray: #21334f;
--color-silver-100: #c4c4c4;
--color-silver-200: #bdbdbd;
--color-steelblue-100: #505f98;
--color-steelblue-200: rgba(80, 95, 152, 0.05);
--color-limegreen: #14a800;

/* Gaps */
--gap-7xs: 6px;

/* Paddings */
--padding-3xs: 10px;

/* Border radiuses */
--br-9xs: 4px;
--br-7xs: 6px;
--br-11xs: 2px;
--br-12xs: 1px;
--br-11xs-5: 1.5px;

}
`;
