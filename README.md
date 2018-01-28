# \<casper-context-menu\>

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/casper2020/casper-context-menu)


Simple pop-up menu with an icon for each item. Section headers can be created with `<h1>` elements. 

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-icons/iron-icons.html">
    <link rel="import" href="../paper-button/paper-button.html">
    <link rel="import" href="casper-context-menu.html">
    <custom-style>
      <style is="custom-style" include="demo-pages-shared-styles">  
        casper-context-menu, paper-button, h4  {
            font-family: 'Roboto', 'Noto', sans-serif;
            font-weight: normal;
            font-size: 14px;
            -webkit-font-smoothing: antialiased;
        }
        .header {
          display: flex;
          align-items: center;
          height: 32px;
        }
      </style>
      <script>
      function type(text) {
        typed.textContent = "Menu typed "+text;
      }
    </script>
    </custom-style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<div class="header"><paper-button raised onclick="settings.open()">Open Menu</paper-button><h4 id="typed">-</h4></div>
<casper-context-menu id="settings" no-overlap vertical-align="auto" horizontal-align="left">
  <h1>Section 1 links</h1>
  <casper-menu-item icon="icons:home" href="https://github.com/casper2020/casper-context-menu">Open Github repo</casper-menu-item>
  <casper-menu-item icon="icons:cloud" href="http://cloudware.pt">Open Cloudware site</casper-menu-item>
  <casper-menu-item icon="icons:visibility-off" separator disabled>Having a blue day</casper-menu-item>
  <h1>Section 2 clicks</h1>
  <casper-menu-item icon="icons:language" onclick="type('hello')">Type Hello</casper-menu-item>
  <casper-menu-item icon="icons:pan-tool" onclick="type('World')">Type World</casper-menu-item>
</casper-context-menu>
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
