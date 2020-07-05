# CurrentPage

A TypeScript/Javascript class intended to help a separate Paginator  
paginate data that can't all be stored in memory at once.

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
    __loadPaginator: {
        getPage: (pageNumber) => any[];
        data: any[];
    },

    __load2pgTranslator: LoadToPageTranslator,

    __pageLoadAccess: {
        getLoadContainingPage: (pageNumber) => Promise<any[]>;
        getRefreshedLoadContainingPage: (pageNumber) => Promise<any[]>;
    }
)
```
</details>


## Methods
<details>
<summary>view methods</summary>

```ts
set(pageNumber): Promise<void>
    // After calling it, the page's data can be gotten by calling this.get().

reset(pageNumber): Promise<void>
    // Even if `pageNumber` is already the current page, the 
    // data containing that page is reloaded from the source.

get(): any[]
    // returns the contents of the page.
```
</details>


## Installation

`npm i @writetome51/current-page`

## Loading
```ts
// if using TypeScript:
import { CurrentPage } from '@writetome51/current-page';
// if using ES5 JavaScript:
var CurrentPage = require('@writetome51/current-page').CurrentPage;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
