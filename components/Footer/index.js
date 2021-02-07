import GitHub from "components/Icons/GitHub"
import Logo from "components/Icons/Logo"

import { colors } from "styles/theme"

export default function Footer() {
  return (
    <>
      <div>
        <GitHub fill={colors.primary} width={24} />
        <Logo fill={colors.primary} width={24} />
      </div>
      <style jsx>{`
        div {
          position: sticky;
          top: 0;
          width: 100%;
          height: 49px;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          border-top: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}
