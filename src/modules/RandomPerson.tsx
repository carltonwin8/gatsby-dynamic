import React from "react"
import { RouteComponentProps } from "@reach/router"

interface Props
  extends RouteComponentProps<{
    results: string
  }> {}

export const RandomPerson: React.FC<Props> = ({ results = "1" }) => {
  const [person, personSet] = React.useState()

  React.useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then(x => x.json())
      .then(x => personSet(x))
  }, [])
  return (
    <div>
      <p>Saw results: {results}</p>
      <p>
        hello <pre>{JSON.stringify(person, null, 2)}</pre>
      </p>
    </div>
  )
}
