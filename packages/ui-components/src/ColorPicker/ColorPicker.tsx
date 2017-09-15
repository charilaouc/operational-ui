import * as React from "react"
import { SketchPicker, RGBColor } from "react-color"
import glamorous from "glamorous"

type Props = {
  color?: string
  size?: number
  theme?: Theme
  onChange?: (color: { hex: string; rgb: RGBColor }) => any
}

type State = {
  isPickerOpen: boolean
  color?: string
  position: { top?: number; left?: number }
}

type ColorSquareProps = {
  color: string
  size: number
  theme: Theme
}

const ColorSquare = glamorous.div(
  {
    border: `3px solid white`,
    borderRadius: 2,
    cursor: "pointer",
  },
  ({ color, size, theme }: ColorSquareProps) => ({
    width: size,
    height: size,
    boxShadow: `0 0 0 1px ${theme.greys["30"]}`,
    backgroundColor: color,
  })
)

type PickerContainerProps = {
  top: number
  left: number
}

const PickerContainer = glamorous.div(
  {
    position: "fixed",
  },
  ({ top, left }: PickerContainerProps) => ({
    top: top + 8,
    left: left + 8,
  })
)

class ColorPicker extends React.Component<Props, State> {
  static defaultProps = {
    color: "#03f",
    size: 16,
  }

  state = {
    isPickerOpen: false,
    color: this.props.color,
    position: {
      top: 0,
      left: 0,
    },
  }

  containerEl: HTMLDivElement | null = null

  // This implements "click outside to close" behavior
  handleClickOutside = (e: MouseEvent) => {
    const el = this.containerEl

    // if we're somehow not working with a DOM node (flowtype is fun!)
    if (!(e.target instanceof Node)) {
      return
    }
    // if we're clicking on the Select itself,
    if (el && el.contains(e.target)) {
      return
    }

    // if we're clicking outside,
    this.close()
  }

  handleEsc = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.close()
    }
  }

  componentDidMount() {
    this.setState(() => ({ position: this.containerEl.getBoundingClientRect() }))
    window.addEventListener("click", this.handleClickOutside, true)
    window.addEventListener("keyup", this.handleEsc, true)
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickOutside, true)
    window.removeEventListener("keyup", this.handleEsc, true)
  }

  togglePicker() {
    this.setState(prevState => ({ isPickerOpen: !prevState.isPickerOpen }))
  }

  close() {
    this.setState(() => ({ isPickerOpen: false }))
  }

  async onColorChange(color: { hex: string; rgb: RGBColor }) {
    if (this.props.onChange) {
      await this.props.onChange(color)
    }
    this.setState(() => ({ color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})` }))
  }

  render() {
    const { size, theme, color } = this.props
    return (
      <div ref={containerEl => (this.containerEl = containerEl)} onClick={() => this.togglePicker()}>
        <ColorSquare size={size} theme={theme} color={this.state.color} />
        {this.state.isPickerOpen && (
          <PickerContainer
            top={this.state.position.top}
            left={this.state.position.left}
            onClick={(e: React.SyntheticEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <SketchPicker color={this.state.color} onChangeComplete={color => this.onColorChange(color)} />
          </PickerContainer>
        )}
      </div>
    )
  }
}

export default ColorPicker
