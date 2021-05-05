import { ThemeProvider, DefaultTheme, StylesProvider, createGenerateClassName } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Forms from './views/Forms';

const theme: DefaultTheme = {
  palette: {
    background: {
      light: "#ffffff",
      dark: "#1c1b22",
    }
  }
};

const generateClassName = createGenerateClassName({
  productionPrefix: "LCFormBuilder",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        <Forms />
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
