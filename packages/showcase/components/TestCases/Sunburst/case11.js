import Layout from "../../../components/Layout"
import { Sunburst } from "@operational/visualizations"
import Marathon from "../../../components/Marathon"
import { Card, CardHeader } from "@operational/components"
import { operational } from "@operational/theme"

const config = {
  sort: false
}

const data = {
  name: "All",
  value: "178390",
  children: [
    {
      name: "Europe",
      value: 50000,
      children: [
        {
          name: "UK",
          value: 11500
        },
        {
          name: "Germany",
          value: 9240
        },
        {
          name: "Spain",
          value: 12345
        },
        {
          name: "Italy",
          value: 1830
        }
      ]
    },
    {
      name: "Asia",
      value: 38400,
      children: [
        {
          name: "Japan",
          value: 8230
        },
        {
          name: "China",
          value: 13000
        },
        {
          name: "Thailand",
          value: 2548
        },
        {
          name: "India",
          value: 1800
        },
        {
          name: "Malaysia",
          value: 1423
        }
      ]
    },
    {
      name: "Australia",
      value: 18000
    },
    {
      name: "North America",
      value: 45700,
      children: [
        {
          name: "USA",
          value: "33218",
          children: [
            {
              name: "Washington DC",
              value: 5742
            },
            {
              name: "California",
              value: 19200,
              children: [
                {
                  name: "San Fransisco",
                  value: 4298
                },
                {
                  name: "Los Angeles",
                  value: 6528
                },
                {
                  name: "Sacramento",
                  value: 3908
                }
              ]
            },
            {
              name: "New York City",
              value: 8276
            }
          ]
        },
        {
          name: "Canada",
          value: 6714,
          children: [
            {
              name: "Toronto",
              value: 2456
            },
            {
              name: "Vancouver",
              value: 4258
            }
          ]
        }
      ]
    },
    {
      name: "Africa",
      value: 25200
    }
  ]
}

export const marathon = ({ test, afterAll, container }) => {
  const viz = new Sunburst(container)

  test("Renders a sunburst chart with automatic color assignment", () => {
    viz.data(data)
    viz.config(config)
    viz.draw()
  })

  test("Set colors manually", () => {
    const palette = operational.colors.visualizationPalette
    viz.accessors("series", {
      color: (d): string => (d.value > 20000 ? palette[0] : palette[1])
    })
    viz.draw()
  })

  test("Turn off color propagation", () => {
    viz.config({ propagateColors: false })
    viz.draw()
  })

  test("Change color palette", () => {
    viz.config({ palette: [operational.colors.warning, operational.colors.error] })
    viz.draw()
  })
}

export const title = "Series accessors"
