import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { initializeWeb3 } from 'utils/web3Util';
import ItemFactoryContract from 'contracts/ItemFactory.json'
import { Contract } from 'web3-eth-contract'

type Item = {
  name: string
  price: number
  owner: string
  imageURL: string
  description: string
}

const newItem: NextPage = () => {
  const [contract, setContract] = useState<Contract>(null)
  const [accounts, setAccounts] = useState<string[]>([])
  const [item, setItem] = useState<Item>({ name: "", price: 0, owner: "", imageURL: "", description: "" })

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

  return (
    <>
      <h1>Register Item</h1>
      <div>
        <label>Item name</label><br />
        <input type="text" onChange={(e) => setItem({ ...item, name: e.target.value })} />
      </div>

      <div>
        <label>Item price</label><br />
        <input type="number" onChange={(e) => setItem({ ...item, price: Number(e.target.value) })} />
      </div>

      <div>
        <label>Item owner</label><br />
        <input type="text" onChange={(e) => setItem({ ...item, owner: e.target.value })} />
      </div>

      <div>
        <label>Item imageURL</label><br />
        <input type="text" onChange={(e) => setItem({ ...item, imageURL: e.target.value })} />
      </div>

      <div>
        <label>Item description </label><br />
        <textarea onChange={(e) => setItem({ ...item, description: e.target.value })} />
      </div>
    </>
  )
}

export default newItem
