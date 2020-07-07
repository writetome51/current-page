# CurrentPage

A TypeScript/Javascript class intended to help a separate Paginator  
paginate data that can't all be stored in memory at once.

## Instantiation

```ts
// Use this factory function:

getInstance_CurrentPage(
    params: {
        dataSource: {

            // If `isLastLoad` is true, it must only return the remaining items in the dataset and
            // ignore `itemsPerLoad`.

            getLoad: (
                loadNumber: number, itemsPerLoad: number, isLastLoad: boolean
            ) => Promise<any[]>;
        };

        pageInfo: {
            setItemsPerPage: (num) => void;
            getItemsPerPage: () => number;
            getTotalPages: () => number;        
        };

        loadInfo: {
            getCurrentLoadNumber: () => number;
            setCurrentLoadNumber: (num) => void;
            getItemsPerLoad: () => number;
            currentLoadIsLast: () => boolean;
            getPagesPerLoad: () => number;
        };
    }
): CurrentPage
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
import { CurrentPage, getInstance_CurrentPage } from '@writetome51/current-page';
// if using ES5 JavaScript:
var mod = require('@writetome51/current-page');
var CurrentPage = mod.CurrentPage;
var getInstance_CurrentPage = mod.getInstance_CurrentPage;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
