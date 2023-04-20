import Link from "next/link"
import { LangS } from "./styled"

const Lang = () => {
  return (
    <LangS>
      <ul>
        <li><Link href="/" locale="it">it</Link></li>
        <li><Link href="/" locale="cs">cs</Link></li>
      </ul>
    </LangS>
  )
}

export default Lang