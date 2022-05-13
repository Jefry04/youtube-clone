import React from 'react';
import iconoYoutube from '../../images/brand/icon.png';
import letterYoutube from '../../images/brand/letter.png';
import Buttonaction from '../Buttonaction';
import SearchHeader from '../SearchHeader';

function Header() {
  return (
    <nav className="header">
      <div className="header__group">
        <div className="group__hamburger">
          <Buttonaction
            nameButton="header__hamburger"
            svg={
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1H0V0H18V1ZM18 6H0V7H18V6ZM18 12H0V13H18V12Z"
                  fill="#030303"
                />
              </svg>
            }
          />
        </div>
        <div className="hamburger__logo">
          <img src={iconoYoutube} alt="icon youtube" className="brand__icon" />
          <img
            src={letterYoutube}
            alt="letter youtube"
            className="brand__letter"
          />
        </div>
      </div>
      <div className="header__search">
        <SearchHeader />
        <Buttonaction
          nameButton="header__search__button"
          svg={
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.37 17.17L12.78 11.58C13.85 10.35 14.5 8.75 14.5 7C14.5 3.13 11.37 0 7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 10.87 3.63 14 7.5 14C9.25 14 10.85 13.35 12.08 12.29L17.67 17.88L18.37 17.17ZM7.5 13C4.19 13 1.5 10.31 1.5 7C1.5 3.69 4.19 1 7.5 1C10.81 1 13.5 3.69 13.5 7C13.5 10.31 10.81 13 7.5 13Z"
                fill="black"
              />
            </svg>
          }
        />
        <Buttonaction
          nameButton="header__voice"
          svg={
            <svg
              width="13"
              height="18"
              viewBox="0 0 13 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 0C4.84 0 3.5 1.37 3.5 3.07V8.93C3.5 10.63 4.84 12 6.5 12C8.16 12 9.5 10.63 9.5 8.93V3.07C9.5 1.37 8.16 0 6.5 0ZM13 9H12C12 12.03 9.53 14.5 6.5 14.5C3.47 14.5 1 12.03 1 9H0C0 12.24 2.39 14.93 5.5 15.41V18H7.5V15.41C10.61 14.93 13 12.24 13 9Z"
                fill="#030303"
              />
            </svg>
          }
        />
      </div>
      <div className="header__user">
        <Buttonaction
          nameButton="header__apps"
          svg={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0V4H16V0H12ZM15 3H13V1H15V3ZM12 6V10H16V6H12ZM15 9H13V7H15V9ZM6 0V4H10V0H6ZM9 3H7V1H9V3ZM6 6V10H10V6H6ZM9 9H7V7H9V9ZM12 12V16H16V12H12ZM15 15H13V13H15V15ZM6 12V16H10V12H6ZM9 15H7V13H9V15ZM0 0V4H4V0H0ZM3 3H1V1H3V3ZM0 6V10H4V6H0ZM3 9H1V7H3V9ZM0 12V16H4V12H0ZM3 15H1V13H3V15Z"
                fill="black"
              />
            </svg>
          }
        />
        <Buttonaction
          nameButton="header__options"
          svg={
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12.5C2.83 12.5 3.5 13.17 3.5 14C3.5 14.83 2.83 15.5 2 15.5C1.17 15.5 0.5 14.83 0.5 14C0.5 13.17 1.17 12.5 2 12.5ZM0.5 8C0.5 8.83 1.17 9.5 2 9.5C2.83 9.5 3.5 8.83 3.5 8C3.5 7.17 2.83 6.5 2 6.5C1.17 6.5 0.5 7.17 0.5 8ZM0.5 2C0.5 2.83 1.17 3.5 2 3.5C2.83 3.5 3.5 2.83 3.5 2C3.5 1.17 2.83 0.5 2 0.5C1.17 0.5 0.5 1.17 0.5 2Z"
                fill="black"
              />
            </svg>
          }
        />
        <Buttonaction
          nameButton="header__conect"
          wordkey="ACCEDER"
          svg={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 1C14.96 1 19 5.04 19 10C19 11.42 18.66 12.76 18.07 13.96C16.54 12.24 14.09 11.07 10.69 10.93C12.57 10.6 14 8.97 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 8.97 7.43 10.6 9.31 10.93C5.91 11.07 3.46 12.24 1.93 13.96C1.34 12.76 1 11.42 1 10C1 5.04 5.04 1 10 1ZM7 7C7 5.35 8.35 4 10 4C11.65 4 13 5.35 13 7C13 8.65 11.65 10 10 10C8.35 10 7 8.65 7 7ZM10 19C6.84 19 4.06 17.36 2.45 14.88C4.01 12.93 6.61 11.9 10 11.9C13.39 11.9 15.99 12.93 17.55 14.88C15.94 17.36 13.16 19 10 19Z"
                fill="#065FD4"
              />
            </svg>
          }
        />
      </div>
    </nav>
  );
}

export default Header;
