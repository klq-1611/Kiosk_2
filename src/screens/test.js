// import axios from 'axios';
// import { Alert } from 'react-native';
// // import { storage } from '../helpers/storage';
// // import { SET_IS_LOGGED_OUT } from 'src/modules/Auth/login/AuthState';
// // import { store } from 'src/redux/store';
// // import { logoutAction } from './session/sessionActions';

// let checkLogin = 1;

// function baseApi(baseURL, useApiV3) {
//     let baser = axios.create({
//         baseURL: 'https://jsonplaceholder.typicode.com',
//         timeout: 10000,
//     });

//     // baser.interceptors.response.use(
//     //     async function (response) {
//     //         if (!response.data?.success && response.data?.err_code === 402) {
//     //             checkLogin = 2;
//     //             const token = await storage.get('token');

//     //             if (checkLogin === 2 && token) {
//     //                 await storage.remove('token');
//     //                 await storage.remove('iid');
//     //                 await storage.remove('id');
//     //                 await storage.remove('domain');
//     //                 // await storage.remove('endPoint')
//     //                 store.dispatch({
//     //                     type: SET_IS_LOGGED_OUT,
//     //                 });
//     //                 Alert.alert(
//     //                     'Phiên của bạn đã kết thúc',
//     //                     'Vui lòng đăng nhập lại ',
//     //                     [
//     //                         {
//     //                             text: 'OK',
//     //                             onPress: () => {
//     //                                 checkLogin = 1;
//     //                             },
//     //                         },
//     //                     ],
//     //                     { cancelable: false },
//     //                 );
//     //                 return Promise.reject(response.data);
//     //             }
//     //         }
//     //         // Any status code that lie within the range of 2xx cause this function to trigger
//     //         // Do something with response data
//     //         return response;
//     //     },
//     //     async function (error) {
//     //         // Any status codes that falls outside the range of 2xx cause this function to trigger
//     //         // Do something with response error
//     //         if (error.response.status == '401') {
//     //             await storage.remove('token');
//     //             store.dispatch(logoutAction());
//     //         }
//     //         return Promise.reject(error);
//     //     },
//     // );

//     //baser.interceptors.request.use(LogInterceptor.requestLog);
//     //baser.interceptors.response.use(LogInterceptor.responseLog);

//     return baser;
// }

// export const exceptionExtractError = (exception) => {
//     if (!exception.Errors) {
//         return false;
//     }
//     let error = false;
//     const errorKeys = Object.keys(exception.Errors);
//     if (errorKeys.length > 0) {
//         error = exception.Errors[errorKeys[0]][0].message;
//     }
//     return error;
// };

// export { baseApi };
