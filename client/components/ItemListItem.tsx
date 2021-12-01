import detectEthereumProvider from '@metamask/detect-provider';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import ItemContract from 'contracts/Item.json';

type Item = {
  name: string
  price: number
  imageURL: string
  description: string
}

type PropsType = {
  hashedItem: string
}

export const ItemListItem: React.FC<PropsType> = ({ hashedItem }) => {
  const [item, setItem] = useState<Item>({})

  useEffect(() => { init() }, [])

  const init = async () => {
    const provider = await detectEthereumProvider()
    const web3 = new Web3(provider)
    const networkId = await web3.eth.net.getId()
    const accounts = await web3.eth.getAccounts()
    const itemContract = new web3.eth.Contract(ItemContract.abi, hashedItem)
    setItem({
      name: await itemContract.methods.name().call(),
      price: await itemContract.methods.price().call(),
      imageURL: await itemContract.methods.imageURL().call(),
      description: await itemContract.methods.description().call(),
    })
  }
  return (
    <li key={item.name}>
      {item.name}/{item.imageURL}/{item.price}/{item.description}
    </li>
  )
}
