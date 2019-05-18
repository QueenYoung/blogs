import { Link } from 'gatsby';
import 'prismjs/themes/prism-okaidia.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import '../globalThis';
import { rhythm, scale } from '../utils/typography';
import Bio from './Bio';
import Toggle from './components/ThemeToggle';

const PostContainer = styled.section`
  color: var(--textNormal);
  background: var(--bg);
  transition: color 0.3s ease-out, background 0.3s ease-out;
  min-height: 100vh;
`;

const HomeLink = styled(Link).attrs({ to: '/' })`
  box-shadow: none;
  text-decoration: none;
  color: var(--textTitle);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
`;

const BlogTitle = ({ location, isRoot }) => {
  let title;
  if (isRoot) {
    title = (
      <h1
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <HomeLink>{title}</HomeLink>
      </h1>
    );
  } else {
    title = (
      <h3
        style={{
          fontFamily: 'sans-serif',
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <HomeLink>{title}</HomeLink>
      </h3>
    );
  }

  return title;
};

const BlogHeader = ({ location, title, isRoot }) => {
  const THEME = 'theme';
  let cacheTheme;
  const [checked, setChecked] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      cacheTheme = localStorage.getItem(THEME);
      return cacheTheme === 'dark';
    } else {
      return false;
    }
  });

  useEffect(() => {
    const colorSchemeChanged = ({ matches }) => {
      document.body.className = matches ? 'dark' : 'light';
      setChecked(matches);
    };

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media && media.addListener(colorSchemeChanged);
    colorSchemeChanged({
      matches: cacheTheme === undefined ? media.matches : checked,
    });
    return () => media && media.removeListener(colorSchemeChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header>
        <BlogTitle location={location} isRoot={isRoot} />
        <Toggle
          checked={checked}
          icons={{
            checked: <span>🌚</span>,
            unchecked: <span>🌞</span>,
          }}
          onChange={checked => {
            const theme = checked ? 'dark' : 'light';
            document.body.className = theme;
            setChecked(checked);
            localStorage.setItem(THEME, theme);
          }}
        />
      </Header>
      {isRoot && <Bio />}
    </>
  );
};

const Layout = ({ location, title, children }) => {
  let rootPath = '/';
  if (typeof globalThis.__PATH_PREFIX__ !== 'undefined') {
    rootPath = globalThis.__PATH_PREFIX__ + `/`;
  }
  const isRoot = location.pathname === rootPath;

  return (
    <PostContainer>
      <section
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <BlogHeader isRoot={isRoot} title={title} location={location} />
        {children}
      </section>
    </PostContainer>
  );
};

export default Layout;
