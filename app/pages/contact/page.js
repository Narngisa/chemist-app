'use client'
import AppHeader from "@/app/components/AppHeader";
import { members } from "@/app/data/member-data";
import ContactItem from "./components/contactItem";
import RateForm from "./components/rateForm";
import { useEffect, useState } from "react";

export default function Page() {
    const contactElements = members.map((member) => {
        return <ContactItem key={member.id} member={member} />
    })

    const [latestScroll, setLatestScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setLatestScroll(scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <AppHeader latestScroll={latestScroll}/>
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-[100vw] h-[100vh] fixed z-[-999]"></div>
            <div className="flex flex-col laptop-l:flex-row justify-center items-center space-y-8 laptop-l:space-y-0 laptop-l:space-x-8 laptop-l:px-16 w-full h-[100vh]">
                {contactElements}
            </div>
            <div className="h-[100vh] pt-12 flex justify-center items-center" id="website rating">
                <RateForm />
            </div>
            {latestScroll > 200 ? <p onClick={() => {window.scrollTo(0, 0)}} className="fixed bottom-4 right-4 bg-gray-900 px-4 py-[5px] rounded-lg text-[12px] laptop-l:text-lg">กลับสู่ด้านบน</p> : <a href="#website rating" className="fixed bottom-4 right-4 bg-gray-900 px-4 py-[5px] rounded-lg text-[12px] laptop-l:text-lg">ให้คะแนนเว็บไซต์</a>}
        </div>
    )
}