import Flex from "components/Flex"
import CommentIcon from "components/Icons/CommentIcon"
import IlikeIcon from "components/Icons/IlikeIcon"
import RedevitIcon from "components/Icons/RedevitIcon"
import SharedIcon from "components/Icons/SharedIcon"

export default function FooterDevit() {
  return (
    <>
      <Flex alingItem="center" justifyContent="space-between">
        <a href="#">
          <CommentIcon fill="#ccc" />
        </a>
        <a href="#">
          <RedevitIcon fill="#ccc" />
        </a>
        <a href="#">
          <IlikeIcon fill="#ccc" />
        </a>
        <a href="#">
          <SharedIcon fill="#ccc" />
        </a>
      </Flex>
    </>
  )
}
