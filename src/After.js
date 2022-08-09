import React, { useState } from "react"
import { Input, Box } from "@chakra-ui/react"

const After = ({ getAfterDate }) => {
  const [date, setDate] = useState(0)
  let handleChange = (e) => {
    getAfterDate(e.target.value)
    setDate(e.target.value)
  }
  return (
    <Box maxW="300px">
      <Input type="date" onChange={handleChange} value={date} />
    </Box>
  )
}

export default After
