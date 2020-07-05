# CurrentPage

A TypeScript/Javascript class intended to be used with a separate Paginator class.  
It loads a page (array) of data into memory.  
It supports the breaking of the full dataset (the data to be paginated) into batches  
in case it's too big to load entirely (a batch is defined as the total amount of  
data the Paginator can handle at once).  The objects passed into the constructor  
make this possible. 

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
   
    loadPaginator: { currentPageNumber: number, currentPage: any[], data: any[] },
        // Setting its  `currentPageNumber` must automatically update its `currentPage`.
 
    load2pgTranslator: LoadToPageTranslator,
        // Automatically installed with this package.
        // https://www.npmjs.com/package/@writetome51/batch-to-page-translator
 
    getLoad: {
        // Accesses the data source.
        
        containingPage: (pageNumber) => Promise<any[]>;
        
        byForce_containingPage: (pageNumber) => Promise<any[]>;
            // This must load the batch containing `pageNumber` even if that batch is 
            // already currently loaded.
    }
) 
```
</details>


## Methods
<details>
<summary>view methods</summary>

```ts
async set(pageNumber): Promise<void>
    // After calling it, the page's data can be gotten by calling this.get().

async reset(pageNumber): Promise<void>
    // Even if `pageNumber` is already the current page, the 
    // data containing that page is reloaded from the source.

get(): any[]
    // returns the contents of the page.
```
</details>


## Installation

`npm install @writetome51/current-page`

## Loading
```ts
// if using TypeScript:
import { CurrentPage } from '@writetome51/current-page';
// if using ES5 JavaScript:
var CurrentPage = require('@writetome51/current-page').CurrentPage;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
