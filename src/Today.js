import React, { useState } from "react"

import { Heading, Box } from "@chakra-ui/react"

const Today = ({ today }) => {
  return (
    <Box my={10}>
      <Heading>Hari ini</Heading>
      <Heading> {today}</Heading>
    </Box>
  )
}

export default Today
