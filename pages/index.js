import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack, Link } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import HomeFooter from "../components/HomeFooter";
import Footer from "../components/Footer";
import Stats from "../components/Stats";


export default function Index() {
  const { colorMode } = useColorMode();

  const linkColor = {
    light: "#1D9BF0",
    dark: "#1D9BF0",
  }
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <NavBar>
      <Head>
        <title>Home -Flutter Templates</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Flutter Widget and Template components</Heading>
          <Text color={colorSecondary[colorMode]}>
            Welcome to my Flutter template website! It has a collection of high-quality templates to help
            you build stunning mobile apps with ease. These templates are updated regularly every once in a while to
            stay current with the latest dart code. Experience smooth and seamless user experiences with the power
            of Flutter. I welcome other developers to <Link color={linkColor[colorMode]} >contribute</Link> and expand the collection.
          </Text>
        </Flex>
        <Stats />
        <HomeFooter />
        <Footer />

      </Stack>

    </NavBar>
  );
}
