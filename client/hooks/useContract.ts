import { useEffect, useState } from "react";
import { initializeWeb3 } from "utils/web3Util";
import ItemFactoryContract from 'contracts/ItemFactory.json'
import { Contract } from 'web3-eth-contract'

export const useContract = () => {
  const [contract, setContract] = useState<Contract | null>(null)
  const [accounts, setAccounts] = useState<string[]>([])

  useEffect(() => { init() }, [])

  const init = async () => {
    try {
      const web3 = await initializeWeb3()
      const networkId = await web3.eth.net.getId()
      const deployedNetworks = ItemFactoryContract.networks[networkId]
      const accounts = await web3.eth.getAccounts()
      const contract = new web3.eth.Contract(
        ItemFactoryContract.abi,
        deployedNetworks && deployedNetworks.address
      )
      setContract(contract)
      setAccounts(accounts)
    } catch (error) {
      alert("Failed connect contracts")
    }
  }

  return { contract, accounts }
}
