# react-selected-text-menu
Modulable menu for text selection in React.

## Installation

`npm install --save react-selected-text-menu`

## Introduction
Search words or expressions that you selected directly on your favorite website.

![](resources/reactSelectedText.gif)
## How it works

```jsx
import SelectedText from 'react-selected-text-menu';
// In the render :
<SelectedText items={['google', 'wikipedia', 'clippy']}>
  Lorem ipsum dolor sit amet
</SelectedText>
```
You can choose modules with the `items` prop.</br></br>
Example :</br></br>
`items=['google', 'wikipedia', 'clippy', 'github', 'amazon', 'yahoo, 'pinterest', 'youtube', 'lastfm', 'maps', 'yelp', 'tripadvisor', 'soundcloud', 'reddit']`</br></br>
  ![](resources/items.png)

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
- [x] GitHub
- [x] Yahoo
- [x] Pinterest
- [x] Amazon
- [x] Maps
- [x] Yelp
- [x] Youtube
- [x] Lastfm
- [x] Tripadvisor
- [x] Soundcloud
- [x] Reddit
- [ ] Bing
- [ ] Many others...
