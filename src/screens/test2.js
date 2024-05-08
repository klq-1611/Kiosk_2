// import axios from 'axios';
// import { baseApi } from './test';
// // import * as sessionSelectors from './session/selectors';
// // import { storage } from 'src/helpers/storage';
// // import { baseApi, fetchApi } from './baseApi';

// export function postApi(endpoint, data) {
//     return apiCall(endpoint, 'post', {}, data);
// }

// export function deleteApi(endpoint, data) {
//     return apiCall(endpoint, 'delete', {}, {});
// }

// export function getApi(endpoint, params) {
//     return apiCall(endpoint, 'get', params);
// }

// const apiCall = async (endPoint, method, params = {}, payload = {}, headers = {}, forceReturn) => {
//     const effectiveParams = Object.assign(params, {
//         //domain: params.domain || (await storage.get('domain')) || '',
//     });

//     const effectivePayload = Object.assign(payload, {
//         //domain: params.domain || (await storage.get('domain')) || '',
//     });

//     // const userToken = sessionSelectors.get()?.authToken;

//     // if (userToken) {
//     //     headers.Authorization = `Bearer ${userToken}`;
//     // }

//     if (method === 'post') {
//         return post(endPoint, effectivePayload, headers, forceReturn);
//     } else if (method === 'delete') {
//         return deleteRequest(endPoint, effectivePayload, headers, forceReturn);
//     } else {
//         return get(endPoint, effectiveParams, headers, forceReturn);
//     }
// };

// const post = async (endPoint, params = {}, headers = {}, forceReturn) => {
//     let newBase = baseApi();
//     try {
//         return newBase
//             .post(`${endPoint}`, params, {
//                 headers: {
//                     'Content-Type': `application/json`,
//                     ...headers,
//                 },
//             })
//             .then((res) => {
//                 if (forceReturn) return res?.data;
//                 if (res.data.success === false) {
//                     return res.data;
//                 }
//                 return res;
//             })
//             .catch((error) => {
//                 throw error;
//             });
//     } catch (error) {
//         throw error;
//     }
// };

// const get = async (endPoint, params = {}, headers = {}, forceReturn, useApiV3) => {
//     let newBase = baseApi();
//     let effectiveEndPoint = `${endPoint}?`;
//     Object.keys(params).forEach(function (key) {
//         effectiveEndPoint = effectiveEndPoint + `&${key}=${params[key]}`;
//     });

//     try {
//         return newBase
//             .get(effectiveEndPoint, {
//                 headers: {
//                     ...headers,
//                 },
//             })
//             .then((res) => {
//                 if (res.data.success === false) {
//                     return res.data;
//                 }
//                 return res;
//             })
//             .catch((error) => {
//                 throw error;
//             });
//     } catch (error) {
//         throw error;
//     }
// };

// const deleteRequest = async (endPoint, params = {}, headers = {}, forceReturn, useApiV3) => {
//     let newBase = baseApi(u);
//     let effectiveEndPoint = `${endPoint}?`;
//     Object.keys(params).forEach(function (key) {
//         effectiveEndPoint = effectiveEndPoint + `&${key}=${params[key]}`;
//     });

//     try {
//         return newBase
//             .delete(effectiveEndPoint, {
//                 headers: {
//                     ...headers,
//                 },
//             })
//             .then((res) => {
//                 if (res.data.success === false) {
//                     return res.data;
//                 }
//                 return res;
//             })
//             .catch((error) => {
//                 throw error;
//             });
//     } catch (error) {
//         throw error;
//     }
// };
