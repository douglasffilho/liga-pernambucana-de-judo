export const Header = ({ children }) => {
  return (
    <header className="Header container">
      {children}
      <style jsx="true">{`
        .Header {
          grid-template-columns: repeat(auto-fit, 31.5%);
          border-bottom: solid rgb(0, 0, 0, 0.15) 0.01rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }

        @media only screen and (max-width: 375px) {
          .Header {
            grid-template-columns: repeat(auto-fit, 100%);
            justify-items: center;
          }
        }
      `}</style>
    </header>
  );
};
