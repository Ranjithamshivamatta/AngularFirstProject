// // import { Pipe, PipeTransform } from '@angular/core';

// // @Pipe({
// //   name: 'search'
// // })
// // export class SearchPipe implements PipeTransform {

// //   transform(value: any, args?: any): any {
// //     return null;
// //   }

// // }



// import { Pipe, PipeTransform } from '@angular/core';
// import { Label } from '../model/label';


// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {

//   transform(labels: Label[], searchValue: any): any {
//     console.log(labels, searchValue);
//     if (!searchValue) {
//       return labels;
//     } else {
//       return labels.filter(({ labelName }) => {
//         return labelName.includes(searchValue);
//       });
//     }
//   }

// }
