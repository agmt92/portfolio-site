"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-6 dark:bg-gray-100 dark:text-gray-700 bg-neutral-950">
	<div className="container px-6 mx-auto space-y-6 divide-y dark:divide-cyan-900 divide-cyan-100  md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="col-span-full md:col-span-6">
				<Link rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-64 h-64 rounded-ful">
						<Image src="/logo/logo.svg" alt="Logo" 
                        width={100} 
                        height={100}
                        className="w-64 h-64 rounded-full"
                        style={{marginTop: '-9rem'}}
                        />
					</div>
					<span className="self-start text-2xl font-semibold">Mohamed Tarek AbdelGhani</span>
				</Link>
			</div>
			<div className="col-span-6 lg:col-span-2 lg:col-start-9 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Legal</p>
				<ul>
                    <li>
                        <Link href="/privacy" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                    <Link href="/license" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                        License
                    </Link>
                    </li>
                    <li>
                        <Link href="/attr" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                            Attributes
                        </Link>
                    </li>
				</ul>
			</div>
			<div className="col-span-6 lg:col-span-2 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">About</p>
				<ul>
                    <li>
                        <Link href="/contact" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:agmt@dr.com" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800" aria-label="Send an email to agmt@dr.com">
                            Email
                        </Link>
                    </li>
                    <li>
                        <Link href="tel:+4369010674084" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800" aria-label="Call +4369010674084">
                            Phone
                        </Link>
                    </li>
                    <li>
                        <Link href="https://wa.me/4369010674084" className="hover:text-slate-200 dark:hover:text-slate-300 dark:text-slate-800" aria-label="Send a WhatsApp message to +4369010674084">
                            WhatsApp
                        </Link>
                    </li>
                            
				</ul>
			</div>
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2024 All rights reserved</span>
				<Link rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</Link>
				<Link rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</Link>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<Link rel="noopener noreferrer" href="mailto:agmt@dr.com" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:text-neutral-500">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</Link>
				<Link rel="noopener noreferrer" href="https://x.com/CitiClix" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full  dark:text-neutral-500">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-10 h-10">
						<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
					</svg>
				</Link>
				<Link rel="noopener noreferrer" href="https://github.com/agmt92" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full  dark:text-neutral-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</Link>
                <Link rel="noopener noreferrer" href="https://www.instagram.com/CitiClix/" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:text-neutral-500">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
						<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
					</svg>
				</Link>
			</div>
		</div>
	</div>
</footer>
    );
}