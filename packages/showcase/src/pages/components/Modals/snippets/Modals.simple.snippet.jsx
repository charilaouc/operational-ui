import * as React from "react"
import { Modal } from "contiamo-ui-components"

// Run any code inside the IIFE, as long as a React element is returned
// (you do not need the IIFE, but it is useful to define simple state containers for stateless components)
export default (() => {
  class ContentWithModal extends React.Component {
    state = {
      isModalOpen: false
    }
    render() {
      return (
        <div>
          {this.state.isModalOpen ? (
            <Modal
              onClose={() => {
                this.setState(prevState => ({
                  isModalOpen: false
                }))
              }}
            >
              Hello
            </Modal>
          ) : null}
          <p
            onClick={ev => {
              this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
            }}
          >
            Expand your modal!
          </p>
        </div>
      )
    }
  }

  return <ContentWithModal />
})()