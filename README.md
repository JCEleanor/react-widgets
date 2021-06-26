# React Widgets

## Overview
This project serves as my React playground where it combines an assortment of React components I've built while learning React. 


## Directory tree

```
src/

├── App.js
├── api                           #API folder
│   ├── wiki.js
│   └── youtube.js
├── components
│   ├── Accordion.js
│   ├── Convert.js
│   ├── Dropdown.js
│   ├── Search.js                  #Fetch Wikipedia API
│   ├── Translate.js               #Fetch Google translate API, (restricted to localhost3000)
│   ├── calendar                   #React Calendar
│   ├── infiniteScroll             #React infinite scroll, build with React-infinite-scroll-component
│   │   ├── ImageCard.js
│   │   ├── ImageList.css
│   │   ├── ImageList.js
│   │   ├── Infinite.js
│   │   ├── Loader.css
│   │   └── Loader.js
│   ├── shoppingCart               #Shopping cart demo
│   │   ├── Cart.js
│   │   ├── Item.js
│   │   ├── OrderList.js
│   │   ├── Summary.js
│   │   └── cart.css
│   ├── todo                       #Todo list
│   │   ├── Todo.js
│   │   ├── TodoApp.js
│   │   ├── TodoList.js
│   │   ├── Todoform.js
│   │   └── todo.css
│   └── youtube                    #Fetch Youtube API
│       ├── SearchBar.js
│       ├── VideoDetail.js
│       ├── VideoItem.css
│       ├── VideoItem.js
│       ├── VideoList.js
│       └── Youtube.js
├── hooks                          #custom hooks to fetch youtube API
│   └── useVideos.js
└── index.js
```

## Getting Started

`npm install`
