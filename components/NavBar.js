import React from "react";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkModeSwitch from "./DarkModeSwitch";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Code } from "phosphor-react";

const NavBar = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "#fbd38d",
    dark: "gray.200",
  };

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s line-height 0.5s;
  `;

  const color = {
    light: "black",
    dark: "white",
  };
  return (
    <>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
            <MenuList color={color[colorMode]}>
              <MenuItem as="a" icon={<ChevronDownIcon />} href="/template_view" passHref>
                Templates
              </MenuItem>
              <MenuItem as="a" icon={<Code />} href="/" passHref>
                Widgets
              </MenuItem>
              <MenuItem as="a" icon={<ChevronDownIcon />} href="/" passHref>
                Workflows
              </MenuItem>
            </MenuList>
          </Menu>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode], p: "2" }}
            >
              Home
            </Button>
          </NextLink>

        </Box>
        <DarkModeSwitch />
      </StickNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[4, 4, 4]}
        mt={[4, 8, 8]}
      >

        {children}
      </Flex>
    </>
  );
};

export default NavBar;

