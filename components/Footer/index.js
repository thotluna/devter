import GitHub from "components/Icons/GitHub"
import Logo from "components/Icons/Logo"

import styles from "components/Footer/styles"

import { colors } from "styles/theme"

export default function Footer() {
  return (
    <>
      <div>
        <GitHub fill={colors.primary} width={24} />
        <Logo fill={colors.primary} width={24} />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
