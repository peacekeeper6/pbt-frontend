import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (

    <Flex align='center' direction='column'>
      <Text h='56px' 
            w='225px' 
            my='32px'
            fontWeight='bold'
            color={textColor}
            fontSize='22px'
            textAlign='start'>
            Private Budgeting Tracker
          </Text>
      {/* <Flex h='26px' w='175px' my='32px' >
        Private Budgeting Tracker
      </Flex> */}
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <HSeparator mb='20px' />
    </Flex>

  );
}

export default SidebarBrand;
