"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar({user}:SiderbarProps) {
    const pathName = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
                <Image src="/icons/logo.svg" width={34} height={34} alt="SACCO" className='size-[24px] max-xl:size-14'/>
                <h1 className='sidebar-logo'>MYSACCO</h1>
            </Link>
            {sidebarLinks.map((item) =>{
                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);
                return (
                    <Link href={item.route} key={item.label}
                      className={cn('sidebar-link', { 'bg-[#D4F1F4]': isActive })} >
                        <div className="relative size-6">
                            <Image 
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            className={cn({
                                'brightness-[0] invert-0': isActive
                            })}
                            />
                        </div>
                        <p className={cn("sidebar-label", { "!text-[#016367]": isActive })}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
            USER
        </nav>
        FOOTER
    </section>
  )
}

export default Sidebar