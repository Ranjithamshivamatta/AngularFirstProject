// // import { Pipe, PipeTransform } from '@angular/core';

// // @Pipe({
// //   name: 'searchUser'
// // })
// // export class SearchUserPipe implements PipeTransform {

// //   transform(value: any, args?: any): any {
// //     return null;
// //   }

// // }



// import { Pipe, PipeTransform } from '@angular/core';
// import { User } from '../model/user';


// @Pipe({
//   name: 'searchUser'
// })
// export class SearchUserPipe implements PipeTransform {

//   transform(users: User[], searchValue: any): any {
//     console.log(users, searchValue);
//     if (!searchValue || !users.length) {
//       return null;
//     } else {
//       return users.filter(({ emailId }) => {
//         return emailId.toLowerCase().includes(searchValue.toLowerCase());
//       });
//     }
//   }

// }
