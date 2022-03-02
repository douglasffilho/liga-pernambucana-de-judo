import { Footer, Header, Icon, Logo } from 'components';
import {
  ChatIcon,
  ExploreIcon,
  HomeIcon,
  LikeIcon,
} from 'components/Assets/Icons';
import Head from 'next/head';

export const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Head>
        <title>Devgram</title>
      </Head>
      <Header>
        <Logo text="Devgram" />
        <div className="remove-843" />
        <div className="Icons container small">
          <Icon title="Página Inicial" link="/">
            <HomeIcon />
          </Icon>

          <Icon
            title="Fale Comigo"
            link="https://wa.me/5581986778644?text=Olá"
            openInNewTab="true"
          >
            <ChatIcon />
          </Icon>

          <Icon
            title="Me acompanhe no LinkedIn"
            link="https://www.linkedin.com/in/douglas-fernandes-4175a585/"
            openInNewTab="true"
          >
            <ExploreIcon />
          </Icon>

          <Icon
            title="Me acompanhe no Github"
            link="https://github.com/douglasffilho"
            openInNewTab="true"
          >
            <LikeIcon />
          </Icon>
        </div>
      </Header>
      <main>{children}</main>
      <Footer>
        <p>Developed by Douglas Filho</p>
      </Footer>
      <style jsx="true">{`
        .PageTemplate {
          padding: 0.5rem 1rem 0rem 1rem;
          max-width: 45rem;
          margin: auto;
        }

        .PageTemplate .Icons {
          grid-template-columns: repeat(auto-fit, 8.5%);
          height: 1rem;
        }
      `}</style>
    </div>
  );
};
