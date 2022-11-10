import React from 'react';
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-12 bg-blue-100">

                <div>
                    <span className="footer-title">Company</span>
                    <a href="#!" className="link link-hover">About us</a>
                    <a href="#!" className="link link-hover">Contact</a>
                    <a href="#!" className="link link-hover">Jobs</a>
                    <a href="#!" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="#!" className="link link-hover">Terms of use</a>
                    <a href="#!" className="link link-hover">Privacy policy</a>
                    <a href="#!" className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control  w-auto">
                        <label className="label">
                            <span className="label-text text-primary">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="abc@site.com" className="input input-bordered w-full  text-black pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer px-12 py-4 border-t bg-blue-100 border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='rounded-full' width="50" height="50" viewBox="0 0 24 24" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.15752-9/312998608_1119357315637915_1625530611637288377_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF1860yQJGklr6tOScGPFl89XH0Q5cRvU31cfRDlxG9TSILs-Xpf_t_A5ZQSVWtKGNkUrSeOaYTldvm2zq83Uo3&_nc_ohc=qGWixmLcYQEAX_NAj_9&tn=kOUXZcSFpKQWWLns&_nc_ht=scontent.fdac24-2.fna&oh=03_AdRhr25qtybkPiqNCsovaNSY7bPWjsAI1Bg46wqR9Ft33Q&oe=639144D1" alt="" />

                    <p>Architec Artifice. <br /> ©2022 All rights reserved</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid text-primary grid-flow-col gap-2">
                        <FaFacebook style={{ height: "30px", width: "30px" }} />
                        <FaTwitter style={{ height: "30px", width: "30px" }} />
                        <FaLinkedin style={{ height: "30px", width: "30px" }} />
                        <FaYoutube style={{ height: "30px", width: "30px" }} />
                        <FaSkype style={{ height: "30px", width: "30px" }} />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;