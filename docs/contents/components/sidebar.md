# cks-sidebar component

Sidebar can be created using cks-sidebar component:

```html
<cks-sidebar [menuItems]="menuItems"></cks-sidebar>
```

```html
<cks-sidebar [headerTemplate]="headerTemplate" [contentTemplate]="contentTemplate" [footerTemplate]="footerTemplate"></cks-sidebar>
```

## Manual configuration

It accepts the following inputs:

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
  { // child menu
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
        },
        ext: {
          navigation: {
            routerLink: ['/']
          },
          icon: ['fa', 'link']
        }
      }
    ]
  }
]
```
* `headerTemplate`: TemplateRef
* `contentTemplate`: TemplateRef
* `footerTemplate`: TemplateRef
