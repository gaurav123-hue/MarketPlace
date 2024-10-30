import React from 'react';
import { useState } from 'react';
import Filter from '../components/Filter';
import { listData } from '../dummyData';
import Card from '../components/Card';
import Map from '../components/Map';




export default function ListPage() {
  const data = listData;
  return (
    <section className='md:grid grid-cols-6 grid-flow-col sm:h-custom-h bg-stone-50 overflow-y-auto  sm:px-20 md:px-24 scrollbarNone'>
      {/* Cards Section */}
      <section className='col-span-4 flex flex-col overflow-y-auto px-4 scrollbarNone'>
        <div className="">
          <div className="">
            <Filter />
          </div>

          {/* Scrollable Card Section */}
          <div className="flex flex-col gap-y-4 sm:gap-y-3 mt-4 pb-6  ">
            {data.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='md:col-span-2 hidden md:block'>
            <Map items={data} height={"calc(100vh - 80px)"}/>
      </section>
    </section>




  )
}
