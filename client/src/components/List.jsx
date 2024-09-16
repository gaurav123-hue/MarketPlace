import React from 'react';
import { listData } from '../dummyData';
import Card from './Card'

export default function List() {
  return (
    <div className="flex flex-col gap-y-2">
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}
