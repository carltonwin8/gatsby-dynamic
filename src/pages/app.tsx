import React from "react"
import { Router as MyRouter } from "@reach/router"

import { RandomPerson } from "../modules/RandomPerson"

const Router = () => {
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/:results" />
    </MyRouter>
  )
}

export default Router
