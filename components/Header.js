import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';

export default function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <Link class="navbar-brand" href="/">
                        <Image src='/images/logo.svg' width={50} height={50} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <Link href="/">
                                <p class="nav-link" >home</p>
                            </Link>
                            <Link href="tshirt">
                                <p class="nav-link" >tshirt</p>
                            </Link>
                            <Link href="mugs">
                                <p class="nav-link" >mugs</p>
                            </Link>
                            <Link href="about">
                                <p class="nav-link" >about</p>
                            </Link>
                            <Link href="contact">
                                <p class="nav-link" >contact</p>
                            </Link>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button class="btn btn-primary ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <FaShoppingCart />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="sidebar">
                <div class="offcanvas offcanvas-end pb-3 overflow-scroll" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ol>
                            <li>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <Image src='/images/mug.webp' width={80} height={80} />
                                        <span className=''>Mug</span>
                                        <span className='ms-3'>$500</span>
                                    </div>
                                    <div>
                                        <span><FaPlusCircle /> 1 <FaMinusCircle /></span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="offcanvas-footer">
                        <button type="button" class="btn btn-primary btn-lg ms-5"><BsFillCartCheckFill/> Checkout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
