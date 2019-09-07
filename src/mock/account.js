import Mock from "mockjs";

let despositList = {
  USD: {
    normalAccount: Array.from({ length: 5 }, () => ({
      "type|1": [
        "checking",
        "Saving",
        "Money market",
        "Now",
        "Retiring Account"
      ],
      number: 13728478746,
      currency: "USD",
      bookblance: 1000,
      avaliableblance: 1000
    })),
    cdAccount: Array.from({ length: 1 }, () => ({
      type: "CD",
      number: 13728478746,
      currency: "USD",
      valdate: "@date",
      matdate: "@date",
      rate: "@float(1, 9, 2, 4)",
      principal: 2000,
      apy: "@float(1, 9, 2, 2)",
      term: "12M"
    }))
  },
  RMB: {
    normalAccount: Array.from({ length: 1 }, () => ({
      "type|1": [
        "checking",
        "Saving",
        "Money market",
        "Now",
        "Retiring Account"
      ],
      number: 13728478746,
      currency: "USD",
      bookblance: 3000,
      avaliableblance: 2000
    })),
    cdAccount: Array.from({ length: 1 }, () => ({
      type: "CD",
      number: 13728478746,
      currency: "USD",
      valuedate: "@date",
      matdate: "@date",
      rate: "@float(1, 9, 2, 4)",
      principal: 1000,
      apy: "@float(1, 9, 2, 2)",
      term: "12M"
    }))
  }
};

let loanList = {
  loanAccount: Array.from({ length: 2 }, () =>
    Mock.mock({
      type: "Syndicated Loan",
      number: "DWEF8478746",
      currency: "USD",
      bal: 1000,
      bookdate: "@date",
      maturitydate: "@date",
      intRate: "@float(1, 9, 2, 2)"
    })
  )
};

export default [
  {
    url: "/account/getDepositAccount",
    type: "get",
    response: () => {
      return {
        code: 200,
        data: {
          total: despositList.length,
          list: despositList
        }
      };
    }
  },
  {
    url: "/account/getLoanAccount",
    type: "get",
    response: () => {
      return {
        code: 200,
        data: {
          total: loanList.length,
          list: loanList
        }
      };
    }
  }
];
