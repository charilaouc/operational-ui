import * as React from "react"
import styled, { Interpolation, Themed } from "react-emotion"
import Icon, { IconName } from "../Icon/Icon"
import { Consumer as OperationalContext } from "../OperationalUI/OperationalUI"
import { isModifiedEvent } from "../utils"
import { OperationalStyleConstants } from "../utils/constants"

export interface Props {
  id?: string
  className?: string
  onClick?: () => void
  /** Navigation property à la react-router <Link/> */
  to?: string
  active?: boolean
  icon?: IconName | React.ReactNode
  label: string
}

const size: number = 36

const containerStyles: Interpolation<
  Themed<
    {
      isActive: boolean
    },
    OperationalStyleConstants
  >
> = ({ theme, isActive }) => ({
  display: "flex",
  padding: `0 ${theme.space.content * 0.5}px`,
  height: size,
  cursor: "pointer",
  position: "relative",
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  whiteSpace: "nowrap",
  userSelect: "none",
  fontSize: theme.font.size.body,
  color: isActive ? theme.color.primary : theme.color.text.lightest,
  fontWeight: theme.font.weight.regular,
  // Specificity is piled up here to override default styles
  "a:link&, a:visited&": {
    textDecoration: "none",
    color: isActive ? theme.color.primary : theme.color.text.lightest,
  },
  "&:hover": {
    backgroundColor: theme.color.background.lighter,
    color: isActive ? theme.color.primary : theme.color.text.dark,
  },
})

const Container = styled("div")(containerStyles)
const ContainerLink = styled("a")(containerStyles)

const IconContainer = styled("span")({
  width: size,
  height: size,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: `0 0 ${size}px`,
})

const Label = styled("span")(({ theme }) => ({
  display: "inline-block",
  paddingLeft: theme.space.base,
}))

const SidenavItem = (props: Props) => {
  const ContainerComponent = props.to ? ContainerLink : Container
  const isActive = !!props.active
  return (
    <OperationalContext>
      {ctx => (
        <ContainerComponent
          href={props.to}
          id={props.id}
          className={props.className}
          onClick={(ev: React.SyntheticEvent<Node>) => {
            ev.stopPropagation()
            if (props.onClick) {
              props.onClick()
            }

            if (!isModifiedEvent(ev) && props.to && ctx.pushState) {
              ev.preventDefault()
              ctx.pushState(props.to)
            }
          }}
          isActive={isActive}
        >
          <IconContainer>
            {props.icon === String(props.icon) ? <Icon name={props.icon as IconName} size={18} /> : props.icon}
          </IconContainer>
          <Label>{props.label}</Label>
        </ContainerComponent>
      )}
    </OperationalContext>
  )
}

export default SidenavItem