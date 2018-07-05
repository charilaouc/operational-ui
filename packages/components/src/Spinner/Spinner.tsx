import * as React from "react"
import styled, { keyframes } from "react-emotion"
import { OperationalStyleConstants, expandColor } from "../utils/constants"
import { WithTheme, Css, CssStatic } from "../types"

export interface Props {
  id?: string
  color?: string
}

const spin = keyframes({
  "0%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(0.75)",
  },
})

const size = 20
const animationTimeUnit: number = 0.6
const f: number = 0.25

const Container = styled("div")({
  label: "spinner",
  width: size,
  height: size,
})

const PulsingCube = styled("div")(({ color, theme }: { theme?: OperationalStyleConstants; color?: string }) => {
  const backgroundColor: string = expandColor(theme, color) || "currentColor"
  return {
    backgroundColor,
    fontSize: 0,
    letterSpacing: 0,
    float: "left",
    wordSpacing: 0,
    width: size / 2 - 2,
    height: size / 2 - 2,
    margin: 1,
    animationName: spin,
    animationDuration: `${animationTimeUnit}s`,
    animationTimingFunction: "ease-in-out",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
    // Increasing the negative animation delay clockwise
    "&:nth-child(1)": {
      animationDelay: "0s",
    },
    "&:nth-child(2)": {
      animationDelay: `${-1 * f * animationTimeUnit}s`,
    },
    "&:nth-child(4)": {
      animationDelay: `${-2 * f * animationTimeUnit}s`,
    },
    "&:nth-child(3)": {
      animationDelay: `${-3 * f * animationTimeUnit}s`,
    },
  }
})

const Spinner = (props: Props) => (
  <Container {...props}>{[0, 1, 2, 3].map(index => <PulsingCube key={index} color={props.color} />)}</Container>
)

export default Spinner
