import React from 'react'
import { Image, Shimmer } from 'react-shimmer'

function Shimer() {
  return (
    <div>
      <Image
        src='https://source.unsplash.com/random/800x600'
        fallback={<Shimmer width={800} height={600} />}
      />
    </div>
  )
}
export default Shimer;