import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold">
        MAS
        <span className="text-target">.</span>
      </p>
    </Link>
  )
}
