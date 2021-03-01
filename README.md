# LoadedPage

A TypeScript/Javascript class intended to help a separate Paginator  
paginate data that can't all be stored in memory at once.

## Instantiation

```ts
// Use this factory function:

getInstance_LoadedPage(
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
): LoadedPage
```



## Methods
<details>
<summary>view methods</summary>

```ts
set(pageNumber): Promise<void>
    // After calling this, get the page's contents by calling this.get().

reset(pageNumber): Promise<void>
    // Even if 'pageNumber' is already the loaded page, the 
    // data containing that page is reloaded from the source.

get(): any[]
    // returns the page contents.

getNumber(): number
    // returns page number.
```
</details>


## Installation

`npm i @writetome51/loaded-page`

## Loading
```js
import { LoadedPage, getInstance_LoadedPage } from '@writetome51/loaded-page';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
