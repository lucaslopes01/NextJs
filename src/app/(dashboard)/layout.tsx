import React from "react"
export default function DasboardLayout({children}:{children: React.ReactNode}){
    return (
        <main className="bg-neutral h-screen">
        <div className="max-w-screen-lg mx-auto text-white pb-6">olá mundo</div>
        <div className="bg-white max-w-screen-lg mx-auto rounded-lg p-6 ">{children}</div>
        </main>
        
    )

}