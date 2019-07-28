CksSidebarComponent

- headerTemplate: TemplateRef
- contentTemplate: TemplateRef
- footerTemplate: TemplateRef
- menu: array

```json
menu = [
    {
        href: {
            routerLink: ['/home'],
            queryParams: { query: query },
            fragment: 'fragment'
        },
        icon: ['fa', 'home'],
        name: {
            label: 'Home',
            translateKey: 'sidebar.menu.home'
        }
    },
    {
        name: {
            label: 'Home'
        },
        subItems: [
            {
                href: {
                    routerLink: ['/']
                },
                icon: ['fa', 'home'],
                name: {
                    label: 'Home'
                },
                ext: {
                    href: {
                        routerLink: ['/']
                    },
                    icon: ['fa', 'home']
                }
            },
            {
                href: {
                    routerLink: ['/']
                },
                icon: ['fa', 'home'],
                name: {
                    label: 'Home'
                }
            }
        ]
    }
];
```
