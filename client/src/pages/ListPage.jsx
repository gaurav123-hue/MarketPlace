import React from 'react';
import { useState } from 'react';



export default function ListPage() {
  const [value, setValue] = useState();
  return (
    <section className='grid grid-cols-6 grid-flow-col cols px-4 pt-4 bg-yellow-50' >
      <section
        className='col-span-4'>
        <div>
          <span
            className='text-2xl font-thin'>
            Search results for
          </span>
          {/* search query div */}
          <div>
          

          </div>
        </div>
      </section>
      <section
        className='col-span-2'>
        Map
      </section>
    </section>
  )
}
