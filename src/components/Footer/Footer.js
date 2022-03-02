export const Footer = ({ children }) => {
  return (
    <footer className="Footer container">
      {children}
      <style jsx="true">{`
        .Footer {
          grid-template-columns: repeat(auto-fit, 100%);
          border-top: solid rgb(0, 0, 0, 0.15) 0.01rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </footer>
  );
};
