import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        // Colors
        --clr-primary: #dcdcdc;
        --clr-primary-light: #dcdcdc66;
        --clr-secondary: #232323;
        --clr-success: #81a123;
        --clr-danger: #ef6837;
        --clr-info: #f4ac06;
        // Font-Family
        --ff-sansSerif: 'Merriweather Sans', sans-serif;
        // Font-size
        --fs: 56.25%;
        // Font-weights
        --fw-light: 300;
        --fw-normal: 400;
        --fw-bold: 900;
    }

    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-family: var(--ff-sansSerif);
        font-size: var(--fs);
        font-weight: var(--fw-normal);
    }

    body {
        box-sizing: border-box;
        background-color: var(--clr-secondary);
        color: var(--clr-primary);
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }
`;

export default GlobalStyles;
