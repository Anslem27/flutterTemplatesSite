import {
    useColorMode, Flex, Heading, Text, Link, Box, Spacer, Button, Stack, Container, Alert,

} from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { GithubLogo } from "phosphor-react";


const HomeFooter = () => {
    const { colorMode } = useColorMode();
    const linkColor = {
        light: "#1D9BF0",
        dark: "#1D9BF0",
    }
    const colorSecondary = {
        light: "gray.700",
        dark: "gray.400",
    };
    const cardColor = {
        light: "#1D9BF0",
        dark: "gray.400",
    }

    return (
        <Flex

            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Heading as={"h4"} mb={"5"} fontSize={"20"}>
                <Link color={linkColor[colorMode]}>Support</Link>
            </Heading>
            <Text color={colorSecondary[colorMode]}>
                This project is clearly an individualy maintained project, and i may find it hard to always make changes
                , so any assistance is welcomed.
            </Text>
            <Box pt="8" pb="10" >
                <Flex flexDirection="row" >
                    <Heading
                        as={"h2"}
                        fontSize={"18"}
                    >Explorer ready to use Flutter Templates
                    </Heading>
                    <Box width={"80%"} />
                    <Stack direction='row' marginLeft={"auto"}>
                        <Button rightIcon={<ArrowForwardIcon />}
                            colorScheme='blue' variant='outline'
                        >
                            Explorer now.
                        </Button>
                    </Stack>
                </Flex>
            </Box>
            <Container maxW={"100%"} px={[2, 2, 2]}
                align="start"
                py={[3, 3, 3]}
                padding={[5, 7, 7]} pb={"5"}
                borderWidth={"0.5px"}
                borderColor={colorSecondary[colorMode]}
                borderRadius={5}
            >


                <Heading as={"h2"}
                    fontSize={"18"}
                    pb="2"
                ><Alert
                    status='success'
                    borderRadius={8}>
                        <GithubLogo
                            height={25}
                            width={25}
                            pl={3}
                        />
                        Didnt Find what you were looking for?
                    </Alert>
                </Heading>
                <Stack direction='row'
                    marginLeft={"auto"}
                    padding={3}>
                    <Button rightIcon={<ArrowForwardIcon />}
                        colorScheme='blue'
                        variant='outline'
                        href="https://github.com/Anslem27/flutterTemplatesSite"
                        as="a"
                    >
                        Contribute Component.
                    </Button>
                </Stack>
            </Container>
            <Box pt={5} />
            <Link
                href="https://twitter.com/anslemAnsy"
                _hover={{ textDecoration: "none" }}
                isExternal
            >
                <SecondaryBtn icon={<ExternalLinkIcon />}>
                    DM me on Twitter
                </SecondaryBtn>
            </Link>
            <Link
                href="https://github.com/Anslem27"
                _hover={{ textDecoration: "none" }}
                isExternal
            >
                <SecondaryBtn icon={<ExternalLinkIcon />}>
                    Github
                </SecondaryBtn>
            </Link>
            <Link
                href="mailto:anslemBarn@gmail.com"
                _hover={{ textDecoration: "none" }}
                isExternal
            >
                <SecondaryBtn icon={<ExternalLinkIcon />}>
                    Email
                </SecondaryBtn>
            </Link>
        </Flex >

    )
}

export default HomeFooter


const SecondaryBtn = ({ children, icon, ...rest }) => {
    const { colorMode } = useColorMode();
    return (
        <Button
            variant="link"
            color="trueGray.500"
            fontWeight="regular"
            leftIcon={icon}
            _hover={{
                color: colorMode === "light" ? "blueGray.900" : "blueGray.50",
            }}
            {...rest}
        >
            {children}
        </Button>
    );
};