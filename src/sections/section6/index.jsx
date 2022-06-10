import React from 'react'
import Card from '../../components/Card'

const Section6 = () => {
  return (
    <div className="container min-h-[900px] flex flex-col gap-10">
      <div className=" text-4xl md:text-3xl lg:text-7xl font-light">
        <span className="text-primary">Events</span> Calendar
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:gap-12 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Section6