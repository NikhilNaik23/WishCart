import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMoon,IoSunnyOutline  } from "react-icons/io5";

import { useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const {colorMode,toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          textStyle={{ base: "xl", md: "2xl" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.600"
          bgClip={"text"}
        >
          <Link to={"/"}>WishCart 🛒</Link>
        </Text>
        <HStack alignItems="center">
          <Link to="/create">
            <Button aria-label="Add Product" textStyle={"sm"}>
              <FaRegPlusSquare  />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon />:<IoSunnyOutline  />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
