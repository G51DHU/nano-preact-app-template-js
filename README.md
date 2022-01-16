# Nano Preact App Default Javascript Template
The default template project for [nano-preact-app](https://github.com/G51DHU/nano-preact-app-template-js).

---

>**Note:**

  - "`.js`" files wont be parsed as `.jsx`, so make sure to rename `.js` files containing `jsx` syntax to end with "`.jsx`" `instead of` "`.js`".

  - Both `npm run start` and `npm run preview` run on port 3000 by default. You can change this within `package.json`

---


# Commands

1) This command starts the development version of the server, runs on port `3000` and on your local network.
```
npm run start
```

2) Build the website.
```   
npm run build
```

3) Build the website/app, everytime a file is saved.
```
npm run wbuild
```

4) Run the built version of the website, runs on port `3000` and on your local network.
```
npm run preview
```

5)You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- --port 1234
```

6)Or edit the `start` script directly:

```
vite --port 1234
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements anywhere in your Javascript:

```js
import "./index.css";
```

# Whats used, and what the files do.

## What is Preact?
Fast 3kB alternative to React with the same modern API.

> Key points
- Closer to the DOM
- Lightweight
- One of the fastest DOM Libraries
- Ecosystem Compatible


## What is Vite?

Vite is a frontend tool

> Some features are
- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 📦 Optimized Build
- 🔑 Fully Typed APIs

[Read the Docs to Learn More](https://vitejs.dev).


# Purpose of each file.
When starting out a project, it's always a good idea to get an idea of the file structure.
So you should know what each file does, and the general location for where files go.

## [Vite.config.js](https://vitejs.dev/config/)
[<span style="color:lightblue">Helpful link 1</span>](https://vitejs.dev/config/) |

When running vite from the command line, Vite will automatically try to resolve a config file named vite.config.js inside project root.

## [Package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

[<span style="color:lightblue">Helpful link 1</span>](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) |
[<span style="color:lightblue">Helpful link 2</span>](https://nodejs.dev/learn/the-package-json-guide) |
[<span style="color:lightblue">Helpful link 3</span>](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)

This file contains information about a project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information and even configuration data.

## [Index.html](https://www.thoughtco.com/index-html-page-3466505)

[<span style="color:lightblue">Helpful link 1</span>](https://www.thoughtco.com/index-html-page-3466505) | [<span style="color:lightblue">Helpful link 2</span>](https://discuss.codecademy.com/t/purpose-of-index-page-s/337540/2) |

This file acts as the entry into the whole website. 
When the application starts this is the first page that is loaded. This file has a line of code ```<div id=”root”></div>```. This line is very significant since all the application components are loaded into this div.

## App.jsx

This file is like the gateway to the rest of the project. It encapsulates everything else you want and need, like other components. 

Unlike "`npx create-react-app`", with "`npx nano-react-app`" the "index.jsx" and the "app.jsx" have been combined.
And `ReactDOM.render` is replaced by `render()`.