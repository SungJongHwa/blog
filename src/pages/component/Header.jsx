// component/Header.jsx
import React from "react";

const Header = () => {
  const goToTop = () => {
    const homeLink = document.getElementById("home-link");
    if (homeLink) {
      homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  return (
    <header
      style={{
        backgroundColor: "#20232a",
        color: "#ffffff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "3px solid #61dafb",
        position: "fixed", // Keeps the header fixed at the top
        top: 0, // Aligns the header to the top of the page
        width: "100%", // Spans the entire width of the screen
        boxSizing: "border-box", // Includes padding in the width
        zIndex: 1000, // Keeps the header above other content
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
          성종화 블로그
        </h1>
      </div>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            gap: "25px",
          }}
        >
          <li>
            <a
              onClick={goToTop}
              id="home-link"
              href="#home"
              style={{
                color: "#61dafb",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              홈
            </a>
          </li>
          <li>
            <a
              href="#blog"
              style={{
                color: "#61dafb",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              블로그
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                color: "#61dafb",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              소개
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                color: "#61dafb",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              연락처
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
