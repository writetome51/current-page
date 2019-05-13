# PageLoader

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
   
    batchPaginator: { currentPageNumber: number, currentPage: any[], data: any[] },
        // Setting its  `currentPageNumber` must automatically update its `currentPage`.
 
    bch2pgTranslator: BatchToPageTranslator,
        // Automatically included as a dependency.
        // https://www.npmjs.com/package/@writetome51/batch-to-page-translator
 
    getBatch: {
        // Accesses the data source.
        
        containingPage: (pageNumber) => any[];
        
        byForce_containingPage: (pageNumber) => any[];
            // This must load the batch containing `pageNumber` even if that batch is 
            // already currently loaded.
    }
) 
```
</details>


## Properties
```
loadedPage: any[] // read-only
    // All items in the loaded page.
```


## Methods
<details>
<summary>view methods</summary>

```ts
loadPage(pageNumber): void
    // Loads the batch containing pageNumber, and pageNumber is assigned to
    // this.loadedPage

forceLoadPage(pageNumber): void
    // Even if pageNumber is already the page currently being viewed, the 
    // batch containing that page is reloaded, and pageNumber is assigned to 
    // this.loadedPage
```
</details>


## Installation

`npm install @writetome51/page-loader`

## Loading
```ts
// if using TypeScript:
import { PageLoader } from '@writetome51/page-loader';
// if using ES5 JavaScript:
var PageLoader = require('@writetome51/page-loader').PageLoader;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
