/** @jsxImportSource @emotion/react */

import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { Work } from './work';

const globalStyles = css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
`;

const App = () => (
  <div>
    <Global styles={globalStyles} />
    <Work />
  </div>
);

export default App;
