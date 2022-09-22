require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/lkATmffZOCxfWsDcYr8MRuwNjeDD8thx",
      accounts: [
        "2dc3ad09a7a991c7c37bbc644e79edf8e43158952e3e1cf80f7a0c58a92c666b",
      ],
    },
  },
};
