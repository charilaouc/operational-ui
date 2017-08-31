// @flow
import React from "react"
import type { Node } from "react"
import glamorous from "glamorous"

import { hexOrColor, readableTextColor, darken } from "contiamo-ui-utils"

const SelectOption = ({
    className,
    selected,
    onClick,
    children
  }: {
    className: string,
    selected?: boolean,
    onClick?: () => mixed,
    children?: Node,
  }) =>
    <div
      className={`${className} Select__option${selected ? " Select__option_selected" : ""}`}
      tabIndex="-2"
      role="option"
      aria-selected={selected}
      onClick={onClick}
    >
      {children}
    </div>,
  style = ({ theme, color }: { theme: THEME, color: string }) => {
    const backgroundColor = color && theme.colors ? hexOrColor(color)(theme.colors[color]) : "white"

    return {
      padding: theme.spacing ? theme.spacing / 2 : 8,
      backgroundColor,
      color: readableTextColor(backgroundColor)(["black", "white"]),
      outline: "none",

      ":hover": {
        backgroundColor: darken(backgroundColor)(5),
        color: readableTextColor(darken(backgroundColor)(5))(["black", "white"])
      },

      "& + .Select__option": {
        borderTop: "1px solid",
        borderColor: darken(backgroundColor)(10)
      },

      "&.Select__option_selected": {
        color: readableTextColor(backgroundColor)(["#aaa"])
      }
    }
  }

SelectOption.defaultProps = {
  selected: false
}

export default glamorous(SelectOption)(style)
export { SelectOption }