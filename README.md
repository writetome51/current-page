# CurrentPage

A TypeScript/Javascript class intended to help a separate Paginator  
paginate data that can't all be stored in memory at once.

## Instantiation

```ts
let currentPage = getInstance_CurrentPage(
    params: {
        dataSource: {

            // If `isLastLoad` is true, it must only return the remaining items in the dataset and
            // ignore `itemsPerLoad`.

            getLoad: (
                loadNumber: number, itemsPerLoad: number, isLastLoad: boolean
            ) => Promise<any[]>;
        },

        pageInfo: { getTotalPages: () => number },

        loadInfo: {
            getCurrentLoadNumber: () => number,
            setCurrentLoadNumber: (num) => void,
            getItemsPerLoad: () => number,
            currentLoadIsLast: () => boolean,
            getPagesPerLoad: () => number
        }
    }
);
```



## Methods
<details>
<summary>view methods</summary>

```ts
set(pageNumber): Promise<void>
    // After calling this, get the page's data by calling this.get().

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
