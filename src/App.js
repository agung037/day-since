import React, { useState } from "react"
import Today from "./Today"
import After from "./After"
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import moment from "moment-with-locales-es6"

const App = () => {
  let today = moment(new Date())
  const [result, setResult] = useState(false)

  let getAfterDate = async (date) => {
    count(date)
  }

  let count = (after) => {
    let a = moment(after)
    let b = today
    var duration = moment.duration(a.diff(b)).asDays()
    setResult(Math.round(duration))
  }

  return (
    <Container>
      <Box>
        <Today today={today.locale("id").format("dddd, D MMMM YYYY")} />

        <SimpleGrid columns={1} spacing={10}>
          <After getAfterDate={getAfterDate} />
        </SimpleGrid>

        <Heading my={10}>
          {result > 0 && Math.abs(result) + " hari lagi"}
          {result < 0 && Math.abs(result) + " hari yang lalu"}
          {result === 0 && "hari ini"}
        </Heading>
      </Box>
    </Container>
  )
}

export default App
