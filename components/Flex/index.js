export default function Flex({
  children,
  direction,
  alingItem,
  justifyContent,
}) {
  return (
    <>
      <div>{children}</div>

      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          flex-direction: ${direction || "row"};
          align-items: ${alingItem || "strech"};
          justify-content: ${justifyContent || "start"};
        }
      `}</style>
    </>
  )
}
