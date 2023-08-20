import Link from 'next/link'
interface Nft {
  id: string;
  name: string;
  file: string;
  description: string;
  price: string;
  createdAt: string;
  owner: string;
}
export default function NftCard({ nfts }: { nfts: Nft[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {nfts?.map(({ id, name, file, description, price, createdAt, owner }) => (
        <Link
          key={id}
          className="relative flex flex-col group "
          href={`/nft/${id}`}
        >
          <div className="card bg-base-100 shadow-sm hover:shadow-xl">
            <figure>
              <img className="h-64" src={`https://ehruraasnyjkzwhvetmu.supabase.co/storage/v1/object/public/images/${file}`} alt="NFT" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{price} CBAK</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}