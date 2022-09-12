"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const chalk_1 = __importDefault(require("chalk"));
const ethers_1 = require("ethers");
exports.command = "create-wallet";
exports.desc = "Create Wallet";
const builder = (yargs) => yargs;
exports.builder = builder;
const handler = (argv) => {
    const wallet = ethers_1.ethers.Wallet.createRandom();
    const log = chalk_1.default.white(`address \t: ${wallet.address} \n`) +
        chalk_1.default.yellowBright(`privateKey \t: ${wallet.privateKey} \n`) +
        chalk_1.default.redBright(`mnemonic \t: ${wallet.mnemonic.phrase} \n`);
    console.log(log);
    process.exit(0);
};
exports.handler = handler;
//# sourceMappingURL=create-wallet.js.map