import Link from "next/link"
import GitHub from "components/Icons/GitHub"
import Logo from "components/Icons/Logo"
import HomeIcon from "components/Icons/HomeIcon"

import styles from "components/Footer/styles"
import { colors } from "styles/theme"

export default function Footer() {
  return (
    <>
      <nav>
        <Link href="/composes/tweet">
          <a>
            <HomeIcon width={28} height={28} fill={colors.primary} />
          </a>
        </Link>
        <GitHub fill={colors.primary} width={24} />
        <Logo fill={colors.primary} width={24} />
      </nav>
      <style jsx>{styles}</style>
    </>
  )
}
