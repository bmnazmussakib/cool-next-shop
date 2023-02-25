import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="footer-logo">
                            <Image src='/images/logo.svg' width={100} height={100} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi harum earum assumenda error suscipit odio atque, aperiam dignissimos! Nobis optio, quas dolor facere quis voluptas minima quae unde fugiat!</p>
                    </div>
                    <div className="col">
                        <ul>
                            <li>
                                <Link href='#'>First</Link>
                            </li>
                            <li>
                                <Link href='#'>Second</Link>
                            </li>
                            <li>
                                <Link href='#'>Third</Link>
                            </li>
                            <li>
                                <Link href='#'>Fourth</Link>
                            </li>
                            <li>
                                <Link href='#'>Fifth</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>
                                <Link href='#'>First</Link>
                            </li>
                            <li>
                                <Link href='#'>Second</Link>
                            </li>
                            <li>
                                <Link href='#'>Third</Link>
                            </li>
                            <li>
                                <Link href='#'>Fourth</Link>
                            </li>
                            <li>
                                <Link href='#'>Fifth</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>
                                <Link href='#'>First</Link>
                            </li>
                            <li>
                                <Link href='#'>Second</Link>
                            </li>
                            <li>
                                <Link href='#'>Third</Link>
                            </li>
                            <li>
                                <Link href='#'>Fourth</Link>
                            </li>
                            <li>
                                <Link href='#'>Fifth</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
