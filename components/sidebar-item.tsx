"use client"
import {Button} from "@/components/ui/button"
import  Link  from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

type Props = {
    href: string
    label: string
    iconSrc: string
}

export const SidebarItem = ({ href, label, iconSrc }: Props) => {

    const pathName = usePathname()
    const active = pathName === href

    return (
        <Button
        variant={active ? "sideBarOutline" : "sideBar"} className="justify-start h-[3.25rem]"
        asChild>
            <Link href={href}>
                <Image
                    src={iconSrc}
                    alt={label}
                    width={32}                
                    height={32}     
                    className="mr-5"
                />
        {label}
            </Link>
        </Button>
    )
}       