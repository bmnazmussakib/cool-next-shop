import Image from 'next/image'
import React from 'react'

export default function mugs() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <Image src="/images/mug.webp" class="card-img-top img-fluid" alt="..." width={960} height={960}/>
              <div class="card-body">
                <h5 class="card-title">SPONGEBOB SQUAREPANTS YELLOW BIG FACE MUG</h5>
                <h6 className="price">Price: $ 100</h6>
                <p className="size">XS SM M L XL XXL</p>
                <button className="btn" style={{backgroundColor: '#0d1323', color: '#ffffff'}}>Add to cart</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
