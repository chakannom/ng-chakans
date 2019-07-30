# cks-navbar component

Navbar can be created using cks-navbar component:

```html
<cks-navbar [brand]="brand" [menuItems]="menuItems"></cks-navbar>
```

## Manual configuration

It accepts the following inputs:

* `brand`: 
```tsx
{
  title: {
    label: 'Title',
    translateKey: 'global.title'
  },
  version: 'v0.0.1-SNAPSHOT'
}
```
* `menuItems`: 
```tsx
[
  { // callback
    navigation: () => {},
    icon: ['fa', 'link'], // fontawesome
    name: {
      label: 'Link',
      translateKey: 'global.link'
    }
  },
  { // redirect 
    navigation: 'http://localhost',
    icon: ['fa', 'link'],
    name: {
      label: 'Link',
      translateKey: 'global.link'
    }
  },
  { // link to specific routes in your app
    navigation: { 
      routerLink: ['/link'],
      queryParams: { param: 'param' },
      fragment: 'fragment'
    },
    icon: ['fa', 'link'],
    name: {
      label: 'Link',
      translateKey: 'global.link'
    }
  },
  { // dropdown menu
    id: 'dropdown-menu',
    icon: ['fa', 'link'],
    name: {
      label: 'Link',
      translateKey: 'global.link'
    },
    subItems: [
      {
        navigation: 'http://localhost',
        icon: ['fa', 'link'],
        name: {
          label: 'Link',
          translateKey: 'global.link'
        }
      }
    ]
  }
]
```
