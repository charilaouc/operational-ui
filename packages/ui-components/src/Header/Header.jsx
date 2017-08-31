// @flow
import React from "react"
import type { Node } from "react"
import glamorous from "glamorous"

import { hexOrColor, readableTextColor } from "contiamo-ui-utils"

import HeaderItem from "./Item/HeaderItem"
import HeaderTitle from "./Title/HeaderTitle"
import HeaderSeparator from "./Separator/HeaderSeparator"

const Header = ({ className, children }: { className: string, children: Node }): React$Element<*> =>
    <div className={className}>
      {children}
    </div>,
  style = ({ theme, color }: { theme: THEME, color: string }): {} => {
    const backgroundColor = color ? hexOrColor(color)(theme.colors ? theme.colors[color] : "white") : "white"

    return {
      display: "flex",
      minHeight: 50,
      alignItems: "center",
      padding: `${theme.spacing / 2}px ${theme.spacing}px`,
      backgroundColor,
      color: readableTextColor(backgroundColor)(["black", "white"])
    }
  }

export default glamorous(Header)(style)
export { Header, HeaderItem, HeaderSeparator, HeaderTitle, style }