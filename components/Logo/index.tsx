import Image from "next/image"
import Link from "next/link"
import LogoIcon from 'public/img/logo.svg'

const Logo = () => {
  return (
    <Link className="logo-wrap" href="/">
      <LogoIcon />
    </Link>
  )
}

export default Logo