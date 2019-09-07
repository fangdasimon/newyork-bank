import request from "@/util/request";

// import qs from 'qs';
// 默认情况下axios将JavaScript对象序列化为JSON。 要以application/x-www-form-urlencoded
// 格式发送数据可以使用qs库编码数据

export function getDepositAccount() {
  return request({
    url: "/account/getDepositAccount",
    method: "get"
  });
}

export function getLoanAccount() {
  return request({
    url: "/account/getLoanAccount",
    method: "get"
  });
}

// export function collectVideo(data) {
//   return request({
//     url: "/table/collectVideo",
//     method: "post",
//     // headers: { 'content-type': 'application/x-www-form-urlencoded' },
//     // data: qs.stringify(data),
//     data
//   });
// }
