import { graphql } from 'gatsby';
import React from 'react';
import { rhythm, scale } from '../utils/typography';
import Bio from './Bio';
import PageNavigation from './components/PageNavigation';
import { Detail } from './components/Transition';
import Layout from './Layout';

const BlogPostTemplate = ({
  location,
  pageContext,
  data: { markdownRemark: post, site },
}) => {
  const siteTitle = site.siteMetadata.title;

  console.count(1313);
  return (
    <Detail>
      <Layout location={location} title={siteTitle}>
        <hgroup>
          <h1
            style={{
              color: 'var(--textTitle)',
              transition: 'color 0.3s ease-out, background 0.3s ease-out',
            }}
          >
            {post.frontmatter.title}
          </h1>
          <time
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </time>
        </hgroup>
        <main dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
          <br />
          <PageNavigation {...pageContext} />
        </footer>
      </Layout>
    </Detail>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        spoiler
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`;
