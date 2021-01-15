
- [local development](http://localhost:8000)
- [graphQL playground](http://localhost:8000/___graphql)

# Adding MDX to the blog starter
0. Create a blog
```sh
$ gatsby new phil-willis-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

1. Install MDX plugins
```sh
$ npm install --save gatsby-plugin-mdx gatsby-plugin-feed-mdx @mdx-js/mdx @mdx-js/react
```

2. Update the `gatsby-config.js` file
- Replace `gatsby-transformer-remark` with `gatsby-plugin-mdx`
  ```js
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  ```
- Replace  `gatsby-plugin-feed` with  `gatsby-plugin-feed-mdx`
- Cleanup
  ```sh
  $ npm uninstall --save gatsby-transformer-remark gatsby-plugin-feed
  ```

3. Update the `gatsby-node.js` file
  - replace `allMarkdownRemark` with `allMdx`
  - replace `MarkdownRemark` with `Mdx`

4. Update `src/pages/index.js`
  - Replace `allMarkdownRemark` with `allMdx` in the render() 

5. Update the `src/templates/blog-post.js` file
  - Replace `markdownRemark` with `mdx` in the render() method.
  - Add `import { MDXRenderer } from "gatsby-plugin-mdx"`
  - Update 
    ```js
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body    // From HTML
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    ```
  - Replace 
  ```
  - <section dangerouslySetInnerHTML={{ __html: post.html }} />
  + <MDXRenderer>{post.body}</MDXRenderer>
  ```

# Adding Monokai code theming
- Go [here](https://github.com/Swaagie/prismjs-monokai) and use this or copy the raw css to your project
- If you choose to save it locally add the file here `src/themes/monokai.css`