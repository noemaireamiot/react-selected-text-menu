# react-selected-text-menu
Modulable menu for text selection in React

## Installation

`npm --save react-selected-text-menu`

## Introduction
Search words or expressions directly on your favorite website.

![](resources/reactSelectedText.gif)
## How it works

```jsx
import SelectedText from 'react-selected-text-menu';
// In the render :
<SelectedText items={['google', 'wikipedia', 'clippy']}>
  Lorem ipsum dolor sit amet
</SelectedText>
```
`items` props is a string array which can have (at this time) :
  - `google`
  - `wikipedia`
  - `clippy`

## Try the demo

```sh
git clone https://github.com/noemaireamiot/react-selected-text-menu.git
cd react-selected-text-menu
npm install
npm start
```

## Items to-do list

- [x] Google
- [x] Wikipedia
- [x] Copy to clipboard
- [ ] GitHub
- [ ] Yahoo
- [ ] Bing
- [ ] Pinterest
- [ ] Amazon
- [ ] Many others...
