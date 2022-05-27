# Esbuild Base

This is a base repository for making simple, single-page javascript applications. It uses `esbuild` as a module bundler, and tries to leave room for expanded tooling in its build process (I tend to customize the asset pipeline on a per-project basis).

This base repo was structured after doing two, experimental, single-page website projects in the spring of 2021: an [interactive fluid simulator](https://github.com/nicschumann/fairly-fast-fluids), and [an interactive story](https://github.com/nicschumann/ray-trip). I learned a bit about how to segment the project, and how not to.

## Installation

To get this up and running, first clone the repository into your local computer. Go to the project directory in your terminal, and do:

```sh
npm install
```

This will install all of the dependencies you need for this project. Once, this is done, do:

```sh
npm run serve
```

This will to start a development server, and then visit `localhost:8080` in a browser.

There're two other scripts as well:

```sh
npm run build
```

This will compile the assets without a starting a development server. There's also:

```sh
npm run deploy-gh-pages
```

This will compile and push the public folder to a gh-pages branch, in case you quickly want to get a test-site up and running. I'd typically add an additional deploy script for a custom environment later.
