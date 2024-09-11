import React from 'react';
import { useState } from 'react';
import Filter from '../components/Filter';
import { listData } from '../dummyData';
import Card from '../components/Card';




export default function ListPage() {
  const data = listData;
  return (
    <section className='sm:grid grid-cols-6 grid-flow-col px-4 pt-4 h-custom-h '>
      {/* Cards Section */}
      <section className='col-span-4 flex flex-col overflow-y-auto'>
        <div className="">
          <div className="">
            <Filter />
          </div>

          {/* Scrollable Card Section */}
          <div className="flex flex-col gap-y-4 sm:gap-y-3 mt-4 pb-6">
            {data.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='sm:col-span-2 '>
        <div className="">
          Map
        </div>
      </section>
    </section>




  )
}
