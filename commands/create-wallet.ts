import type { Arguments, CommandBuilder } from "yargs";
import chalk from "chalk";
import { ethers } from "ethers";

type Options = {};

export const command: string = "create-wallet";
export const desc: string = "Create Wallet";

export const builder: CommandBuilder<Options, Options> = (yargs) => yargs;

export const handler = (argv: Arguments<Options>): void => {
  const wallet = ethers.Wallet.createRandom();

  const log =
    chalk.white(`address \t: ${wallet.address} \n`) +
    chalk.yellowBright(`privateKey \t: ${wallet.privateKey} \n`) +
    chalk.redBright(`mnemonic \t: ${wallet.mnemonic.phrase} \n`);

  console.log(log);
  process.exit(0);
};
