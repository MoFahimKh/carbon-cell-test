import Web3 from "web3";

type Account = string;
declare global {
  interface Window {
    ethereum?: any;
  }
}
const getAccount = async (): Promise<Account[]> => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (Array.isArray(accounts) && accounts.length > 0) {
      return accounts;
    } else {
      throw new Error("No accounts found");
    }
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const getSignerAddress = async (): Promise<string> =>
  (await getAccount())[0];
export const isValidAddress = (receiversAddress: string): boolean => {
  try {
    return Web3.utils.isAddress(receiversAddress);
  } catch (error) {
    return false;
  }
};
