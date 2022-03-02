export const Logo = ({ text }) => {
  return (
    <div className="Logo">
      <a href="/" target="_self">
        {text}
      </a>
      <style jsx="true">{`
        @font-face {
          font-family: Billabong;
          src: url('/fonts/Billabong.ttf');
        }

        .Logo {
          font-family: Billabong;
          font-size: 1.5rem;
          width: 12rem;
          max-width: 12rem;
          height: 1.5rem;
          max-height: 1.5rem;
          color: var(--black);
          background-color: transparent;
          z-index: 1;
          cursor: pointer;
          line-height: 1rem;
        }

        @media only screen and (max-width: 375px) {
          .Logo {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};
