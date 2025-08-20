import React from "react";
import styled from "styled-components";
import { technologies } from "../constants";
import Ball from "./Ball";

const Techs = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      {/* Loader Title */}
      <StyledWrapper className="mb-12 w-full px-4 sm:px-0 flex justify-center">
        <div className="card">
          <div className="loader">
            <p className="static-title">Crafting with</p>
            <div className="words">
              <span className="word">Languages</span>
              <span className="word">Frameworks</span>
              <span className="word">Libraries</span>
              <span className="word">Databases</span>
              <span className="word">Languages</span>
            </div>
            <p className="static-title">Like</p>
          </div>
        </div>
      </StyledWrapper>

      {/* Ball Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-4">
        {technologies.map((technology) => (
          <div
            className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center"
            key={technology.name}
          >
            <Ball icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card {
    --bg-color: #000;
    background-color: var(--bg-color);
    padding: 0.5rem 1rem;
    border-radius: 1.25rem;
  }

  .loader {
    color: rgb(180, 180, 180);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: clamp(1.5rem, 5vw, 2.25rem); /* Responsive: min 24px, fluid, max 36px */
    box-sizing: content-box;
    height: clamp(40px, 8vw, 60px);
    padding: 6px 10px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    text-align: center;
  }

  .static-title {
    margin-right: 10px;
    color: #fff;
    white-space: nowrap;
  }

  .words {
    overflow: hidden;
    position: relative;
    height: 100%;
    min-width: 100px;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #DC2626; /* Tailwind red-600 */
    font-weight: 700;
    animation: spin_4991 6s infinite;
  }

  @keyframes spin_4991 {
    10% {
      transform: translateY(-102%);
    }
    25% {
      transform: translateY(-100%);
    }
    35% {
      transform: translateY(-202%);
    }
    50% {
      transform: translateY(-200%);
    }
    60% {
      transform: translateY(-302%);
    }
    75% {
      transform: translateY(-300%);
    }
    85% {
      transform: translateY(-402%);
    }
    100% {
      transform: translateY(-400%);
    }
  }
`;

export default Techs;
