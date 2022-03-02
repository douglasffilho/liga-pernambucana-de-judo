export const Icon = ({ children, direction, title, link, openInNewTab }) => {
  return (
    <div className={`Icon ${direction || 'top'}`} title={title}>
      <a
        href={link ?? '#'}
        target={openInNewTab ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {children}
      </a>
      <style jsx="true">{`
        .Icon {
          width: 1rem;
          max-width: 1rem;
          height: 1rem;
          max-height: 1rem;
          color: var(--black);
          background-color: transparent;
          z-index: 1;
          cursor: pointer;
        }

        .right {
          transform: rotateZ(90deg);
        }

        .left {
          transform: rotateZ(-90deg);
        }

        .top {
          transform: rotateZ(0deg);
        }

        .down {
          transform: rotateZ(180deg);
        }

        .Icon object {
          z-index: 0;
        }
      `}</style>
    </div>
  );
};
