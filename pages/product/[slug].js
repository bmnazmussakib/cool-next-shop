import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import { FaStar, FaFacebookF, FaInstagram, FaTwitter, FaHeart, FaRegHeart } from 'react-icons/fa';

export default function productDetails() {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <Image src='/images/bangladesh-flag-cotton-tshirt.jpg' width={500} height={500} />
                </div>
                <div className="col-6">
                    <div className="product-info" style={{ maxWidth: '300px' }}>
                        <p>Brand Name</p>
                        <h4>Tshirt Flag 1971 (Cotton)</h4>
                        <div className="review d-flex justify-content-between">
                            <div className="star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <p>4 Review</p>
                            <div className="social-icon"><FaFacebookF className='me-1' /><FaInstagram className='me-1' /><FaTwitter /></div>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nisi, quis aperiam optio doloribus voluptas animi facere, aliquid, rem maxime fugit et illum quisquam dolores maiores? Voluptatibus veniam distinctio optio eum debitis ratione accusamus officiis molestias fugiat quas corrupti quasi voluptas, minus itaque explicabo earum, ea ipsum, similique ullam voluptate!</p>
                        </div>
                        <div className="color-size d-flex justify-content-start mb-5">
                            <div className="color me-3">
                                <span>Color: </span>
                                <button className='me-2' style={{ background: 'red', width: '30px', height: '30px', border: 'none', borderRadius: '50% 50% 50% 50%' }}></button>
                                <button className='me-2' style={{ background: 'green', width: '30px', height: '30px', border: 'none', borderRadius: '50% 50% 50% 50%' }}></button>
                                <button className='' style={{ background: 'blue', width: '30px', height: '30px', border: 'none', borderRadius: '50% 50% 50% 50%' }}></button>
                            </div>
                            <div className="size">
                                <select class="form-select" aria-label="Default select example">
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                        </div>
                        <div className="price-cart-btn d-flex justify-content-between align-items-center">
                            <h5>$ 500.00</h5>
                            <button className='btn btn-primary'>Add to cart</button>
                            <button className='' style={{background: '#cbcbcb', width: '30px', height: '30px', border: 'none', borderRadius: '50% 50% 50% 50%' }}><FaHeart style={{color: 'red' }}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
