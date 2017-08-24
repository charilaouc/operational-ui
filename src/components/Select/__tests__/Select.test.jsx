import React from "react"
import { shallow, mount, render } from "enzyme"
import { jsdom } from "jsdom"

import { Select } from "../Select"
import style from "../Select.style"

import { options } from "../__mocks__/Select.mock"

/*
  We need a DOM in order to test:
  - Click outside to close
  - Press escape to close
  - Filters
*/
global.document = jsdom(
  "<!doctype html><html><body><div id=\"root\"></div></body></html>"
)
global.window = document.parentWindow

describe("Select", () => {
  let comp
  beforeEach(() => {
    comp = mount(<Select options={options} />, {
      attachTo: document.getElementById("root")
    })
  })

  it("Should render correctly", () => {
    expect(
      mount(
        <Select
          options={options}
          disabled
          filterable
          multiple
          placeholder="Select me"
        />
      )
    ).toMatchSnapshot()
  })

  it("Should be toggled on click", () => {
    comp.simulate("click")
    expect(comp.state().open).toBe(true)

    comp.simulate("click")
    expect(comp.state().open).toBe(false)
  })

  it("Should support asynchronous toggle hooks", async() => {
    const myFunc = () => new Promise(resolve => setTimeout(resolve, 10))

    comp = mount(<Select options={options} onClick={myFunc} />)
    comp.simulate("click")
    expect(comp.state().updating).toEqual(true)

    await myFunc()
    expect(comp.state().open).toEqual(true)
    expect(comp.state().updating).toEqual(false)
  })

  it("Should close on press of Esc", () => {
    const pressEsc = new KeyboardEvent("keyup", { keyCode: 27 })

    comp.simulate("click")
    expect(comp.state().open).toBe(true)

    document.dispatchEvent(pressEsc)
    expect(comp.state().open).toBe(false)
  })

  it("Should close on click outside", () => {
    const clickOutside = new MouseEvent("click")

    comp.simulate("click")
    expect(comp.state().open).toBe(true)

    document.dispatchEvent(clickOutside)
    expect(comp.state().open).toBe(false)
  })

  it("Should select options", () => {
    // Default option is an empty string if no placeholder.
    expect(comp.state().value).toMatchObject({ label: "" })

    comp.simulate("click")

    comp.find(".Select__option").last().simulate("click")

    expect(comp.state().value).toMatchObject({
      id: 4,
      label: "Chandler",
      value: [{ alive: true }]
    })
  })

  it("Should multi-select options", () => {
    comp = mount(<Select options={options} multiple />)

    // Initial value is an empty array for multi-select boxes.
    expect(comp.state().value).toEqual([{ label: "", placeholder: true }])

    // Open and select one open.
    comp.simulate("click")
    comp.find(".Select__option").first().simulate("click")

    // Open and select another option.
    comp.simulate("click")
    comp.find(".Select__option").last().simulate("click")

    // Expect two options to be selected.
    expect(comp.state().value).toMatchObject([
      { id: 1, label: "John", value: -10 },
      { id: 4, label: "Chandler", value: [{ alive: true }] }
    ])

    // Open and unselect one option.
    comp.simulate("click")
    comp.find(".Select__option").last().simulate("click")

    // Expect one less option to be selected.
    expect(comp.state().value).toMatchObject([
      { id: 1, label: "John", value: -10 }
    ])
  })

  it("Should filter options", () => {
    comp = mount(<Select options={options} filterable />)
    comp.simulate("click") // open it.

    const filterInput = comp.find(".Select__filter")
    filterInput.node.value = "hi"
    filterInput.simulate("change")

    expect(comp.state().filter).toEqual(/hi/i)
  })

  it("Should support asynchronous pre-filter hooks", async() => {
    const myFunc = () => new Promise(resolve => setTimeout(resolve, 10))

    comp = mount(<Select options={options} onFilter={myFunc} filterable />)
    comp.simulate("click")

    const filterInput = comp.find(".Select__filter")
    filterInput.node.value = "hi"
    filterInput.simulate("change")

    expect(comp.state().updating).toEqual(true)

    await myFunc()

    expect(comp.state().filter).toEqual(/hi/i)
    expect(comp.state().open).toEqual(true)
    expect(comp.state().updating).toEqual(false)
  })

  it("Should gracefully unmount", () => {
    expect(comp.unmount().component.state.mount).toBe(false)
  })

  it("Should receive proper styles", () => {
    expect(style({ theme: {} })).toMatchObject({})
  })
})
