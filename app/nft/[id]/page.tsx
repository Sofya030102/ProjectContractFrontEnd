import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'
import Navbar from '@/components/Navbar'

import type { NftTypeDB } from "@/types/nft.type"
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'


export default async function NftPage({ params }: { params: { id: string } }) {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Получение NFT из БД
    const { data: nft, error } = await supabase
        .from('nfts')
        .select<string, NftTypeDB>().eq('id', params.id)

    return (
        <div className="w-full flex flex-col items-center">
            <Navbar />
            <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
                {nft && nft.length > 0 && nft[0]?.id ? (<div className="card w-96 bg-base-100 shadow-xl">
                    <div className="flex flex-col items-center mb-4 lg:mb-12">
                        <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
                            <strong>NFT</strong> #{nft[0].id}
                        </p>
                        <figure>
                            <img className="h-64" src={`https://ehruraasnyjkzwhvetmu.supabase.co/storage/v1/object/public/images/${nft[0].file}`} height="128" alt="NFT image" />
                        </figure>
                        <div className="card-body items-center text-center">

                            <h2 className="card-title">
                                <span>Name: {nft[0].name}</span>
                            </h2>

                            <span>Description: {nft[0].description}</span>

                            <span>Price: {nft[0].price} CBAK</span>

                            <span>Created at: <p>{nft[0].created_at}</p></span>

                            <span>Creator: <p>{nft[0].creator}</p></span>

                            <span>Owner: <p>{nft[0].owner}</p></span>
                        </div>
                    </div>
                </div>
                ) : (<strong className='flex justify-center'>NFT не найден</strong>)}
            </div>
            <Footer />
        </div>
    )
}
