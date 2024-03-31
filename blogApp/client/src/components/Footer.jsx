import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


export default function FooterCom() {
  return (
    <Footer className='border border-t-8 border-teal-500'>
    <div className='w-full'>
            <div className="">
                <Footer.Copyright href="#" by="Learner" year={new Date().getFullYear()} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    {/* <Footer.Icon href="#" icon={BsInstagram} /> */}
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsDribbble} />
                </div>
            </div>
    </div>
    </Footer>
    );
}