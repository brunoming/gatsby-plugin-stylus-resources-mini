# gatsby-plugin-stylus-resources-mini

Stylus resources (e.g. variables, mixins etc.) plugin for Gatsby

## Install

`npm install --save gatsby-plugin-stylus gatsby-plugin-stylus-resources-mini`

## How to use

1.  Include the plugin in your `gatsby-config.js` file.
2.  Write your resources stylesheets in `.styl` and include it in the resources list in the options as shown below.

```javascript
// in gatsby-config.js
plugins: [{
  resolve: `gatsby-plugin-stylus-resources-mini`,
  options: {
    resources: ['./path/to/*.styl']
  }
}]
```

Inspired by [gatsby-plugin-stylus-resources](https://github.com/JimmyBeldone/gatsby-plugin-stylus-resources)
Built using [sass-resources-loader](https://github.com/shakacode/sass-resources-loader)