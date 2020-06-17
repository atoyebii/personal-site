import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <h1 style={{ marginTop: '10vh', color: 'white', fontSize: '70px' }}>
        Hey! I'm James 👋 <br />
      </h1>
      <h2 style={{ color: 'white', fontSize: '50px' }}>
        I am software engineer working in Toronto, specialising in front end.
      </h2>
      <p style={{ color: 'white' }}>I enjoy building delightfully fast, and engaging digital projects. I'm currently exploring ways to integrate static site generators (like Hugo and Gatsby) into more projects with the wonderful team at <a target="_blank" rel="noopener" href="https://points.com">Points</a>. In my spare time I'm building native apps with things l
        ike Ionic Framework and Angular.</p>
      <p style={{ color: 'white' }}>On this site you can find some <Link to="/posts/">posts</Link> about various things I've been working on. You can find more examples of my work on my <a rel="noopener" href="https://github.com/jamesrwilliams">GitHub</a> profile. If you have an interesting project you'd like to work together on, let's <a href="/hire/">work together</a>.</p>
    </Layout>
  );
};

export default IndexPage;