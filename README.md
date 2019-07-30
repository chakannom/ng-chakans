## Development instructions

The `NgChakansModule` is located in the ng-chakans and packaged into a redistributable package with the ng-packagr tool.

## Usage

### Loading the `NgChakansModule`

Import the `NgChakansModule` from the npm package like this:

```tsx
import { NgChakansModule } from 'ng-chakans';
```

And add it to you application module:

```tsx
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgChakansModule.forRoot({
      serverApiUrl: '/'
    }) // <- Important part
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

### Using components
* [\<cks-navbar\>](/docs/contents/components/navbar.md)
* [<cks-page-ribbon>](/docs/contents/components/profiles.md)
* [<cks-sidebar>](/docs/contents/components/sidebar.md)

### Using directives
* [[cksActiveLanguage]](/docs/contents/directives/active-language.md)

### Using services
