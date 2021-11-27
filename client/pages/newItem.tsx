import type { NextPage } from 'next';
import { useState } from 'react';
import { useContract } from 'hooks/useContract';

type Item = {
  name: string
  price: number
  imageURL: string
  description: string
}

const newItem: NextPage = () => {
  const [item, setItem] = useState<Item>({ name: "", price: 0, imageURL: "", description: "" })
  const { contract, accounts } = useContract()

  const handleSubmit = async () => {
    await contract?.methods
      .createItem(item.name, item.price, item.description, item.imageURL)
      .send({ from: accounts[0] })
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
        <label>Item imageURL</label><br />
        <input type="text" onChange={(e) => setItem({ ...item, imageURL: e.target.value })} />
      </div>

      <div>
        <label>Item description </label><br />
        <textarea onChange={(e) => setItem({ ...item, description: e.target.value })} />
      </div>

      <button onClick={handleSubmit}>Register</button>
    </>
  )
}

export default newItem
