import Link from "next/link"
import LogoIcon from 'public/img/logo.svg'

const Logo = () => {

  return (
    <a className="logo-wrap" href={`/`}>
      <LogoIcon />
    </a>
  )
}

export default Logo