# Rollup Test

This repo holds a basic test of [Rollup](http://rollupjs.org/) to compile ReactJS Components.

### Install and run

1. Clone this repository with `git clone https://github.com/kevingimbel/rolluptest.git`
2. Install Rollup with `npm install -g rollup`
3. Install all dependencies (npm install)
4. Start a simple http server, e.g. `python -m SimpleHTTPServer`, [`goserve`](https://github.com/kevingimbel/goserve) or similar
5. Visit localhost:8000

You should see a page with some cards and some images inside these cards, similar to the one below.

!["Screenshot of the running demo page"](/img/screenshot.png)


### Playing around

To play around run `rollup -c -w`. This tells rollup to use the config file (`-c`) and watch (`-w`) for changes. You can then make changes to the components inside the `components` directory.
