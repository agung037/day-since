import React, { useState } from "react"
import Today from "./Today"
import After from "./After"
import { Button, Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import moment from "moment-with-locales-es6"

const App = () => {
  let today = moment(new Date())
  const [after, setAfter] = useState(0)
  const [result, setResult] = useState(false)

  let getAfterDate = (date) => {
    setAfter(date)
  }

  let count = () => {
    let a = moment(after)
    let b = today
    console.log("menghitung durasi", a, "dan", b)
    var duration = moment.duration(a.diff(b)).asDays()
    setResult(Math.round(duration))
  }

  return (
    <Container>
      <Box>
        <Today today={today.locale("id").format("dddd, D MMMM YYYY")} />

        <SimpleGrid columns={2} spacing={10}>
          <After getAfterDate={getAfterDate} />
          <Button onClick={count} colorScheme="facebook" size="md">
            Hitung
          </Button>
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
