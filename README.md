# PageLoader

A TypeScript/Javascript class that has properties that give information about a  
dataset too big to be loaded all at once that is stored in memory one batch  
at-a-time, with the intention of paginating the batch.

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
 
) 
```
</details>


## Methods
<details>
<summary>view methods</summary>

```ts
loadPage(pageNumber): void

reloadPage(pageNumber): void
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
