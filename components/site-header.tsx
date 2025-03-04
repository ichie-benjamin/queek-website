"use client"

import { siteConfig } from "@/config/site";
import {logFunction} from "@/lib/utils";
import Link from "next/link";

import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

import React from "react";

import {Navigation} from "@/components/navigation";
import Image from "next/image";
import {useAuthModal} from "@/stores/useAuthModal";
export function SiteHeader(){

    const openAuthModal = useAuthModal(state => state.open)

    const openModal = () => {
        openAuthModal(() => {
            // This will run after successful login
            logFunction('auth', 'Login')
        })
    }

    return (
        <header className="z-40 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container justify-between flex py-2 max-w-screen-2xl items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">{siteConfig.name}</span>
                </Link>

                <nav className="hidden sm:flex items-center space-x-4 lg:space-x-6">

                    {/*<Navbar className="top-2" />*/}

                    <Navigation />

                </nav>

                {/*<MainNav />*/}
                <div className="flex flex-1_ items-center justify-end space-x-2">
                    <nav className="flex items-center">


                        <button
                            onClick={() => openModal()}
                            className={`flexCenter gap-3 btn_dark_green rounded-full border `}
                            type="button"
                        >
                            <Image src='/images/user.svg' alt={'login'} width={24} height={24} />
                            <label className="bold-16 whitespace-nowrap cursor-pointer">Login</label>
                        </button>

                        <ModeToggle />
                        <MobileNav />
                    </nav>
                </div>
            </div>

        </header>
    )
}

// function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);
//     return (
//         <div
//             className={cn("fixed_ top-10_ inset-x-0 max-w-2xl mx-auto z-50_", className)}
//         >
//             <Menu setActive={setActive}>
//                 { NAV_LINKS.map((menu) => (
//                     <>
//                         {menu.sub_menu && menu.sub_menu.length > 0 ? (
//                             <MenuItem key={menu.key} setActive={setActive} active={active} item={menu.label}>
//                                 <div className="grid grid-cols-2 justify-between space-y-4_ gap-3 text-sm">
//                                     { menu?.sub_menu ?  menu.sub_menu.map((sub) => (
//                                         <>
//                                             { sub.image ? (
//                                                 <ProductItem
//                                                     key={sub.key}
//                                                     title={ sub.label }
//                                                     href={sub.href}
//                                                     src={sub.image}
//                                                     description={sub.description}
//                                                 />
//                                             ) : (
//                                                 <HoveredLink href="/web-dev">Web Development</HoveredLink>
//                                             )}
//                                         </>
//                                     )) : null}
//
//                                 </div>
//                             </MenuItem>
//                             ) : (
//                             <HoveredLink key={menu.key} href={menu.href}>{ menu.label }</HoveredLink>
//                         ) }
//                     </>
//
//                 ))}
//                 {/*<MenuItem setActive={setActive} active={active} item="Service">*/}
//                 {/*    <div className="flex flex-col space-y-4 text-sm">*/}
//                 {/*        <HoveredLink href="/web-dev">Web Development</HoveredLink>*/}
//                 {/*        <HoveredLink href="/interface-design">Interface Design</HoveredLink>*/}
//                 {/*        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>*/}
//                 {/*        <HoveredLink href="/branding">Branding</HoveredLink>*/}
//                 {/*    </div>*/}
//                 {/*</MenuItem>*/}
//
//                 {/*<MenuItem setActive={setActive} active={active} item="Pricing">*/}
//                 {/*    <div className="flex flex-col space-y-4 text-sm">*/}
//                 {/*        <HoveredLink href="/hobby">Hobby</HoveredLink>*/}
//                 {/*        <HoveredLink href="/individual">Individual</HoveredLink>*/}
//                 {/*        <HoveredLink href="/team">Team</HoveredLink>*/}
//                 {/*        <HoveredLink href="/enterprise">Enterprise</HoveredLink>*/}
//                 {/*    </div>*/}
//                 {/*</MenuItem>*/}
//
//
//                 {/*<MenuItem setActive={setActive} active={active} item="Pricings" />*/}
//
//             </Menu>
//         </div>
//     );
// }
