
import {
    Box,
    useColorModeValue,
    VStack,
    Text,
    AspectRatio,
    HStack,
} from "@chakra-ui/react";
import { GithubLogo } from "phosphor-react";



const WorkflowCard = ({ title, publishedAt, summary, slug }) => {

    return (
        <Box


            cursor="pointer"
        >
            <VStack
                w="100%"
                rounded="lg"
                borderWidth="1px"
                bg={useColorModeValue("white", "neutralD.100")}
                borderColor={useColorModeValue("neutral.400", "neutralD.400")}
                transition="all 0.25s"
                transition-timing-function="spring(1 100 10 10)"
                _hover={{
                    transform: "translateY(-4px)",
                    shadow: "lg",
                    textDecoration: "none",
                }}
                overflow="hidden"
                align="start"
                spacing={0}
            >
                <Box position="relative" w="100%">
                    <AspectRatio
                        ratio={1.85 / 1}
                        maxW="400px"
                        w="100%"
                        borderBottomWidth="1px"
                        borderColor={useColorModeValue("neutral.400", "neutralD.400")}
                    >
                        <GithubLogo />
                    </AspectRatio>

                </Box>

                <VStack py={2} px={4} spacing={0} align="start">
                    <Text fontSize="sm" noOfLines={1} fontWeight="500">
                        {title}
                    </Text>
                    <HStack spacing={1}>
                        <Text
                            fontSize="xs"
                            fontWeight="500"
                            color={"#1D9BF0"}
                            textTransform="capitalize"
                        >
                            Workflow
                        </Text>
                        <Text
                            fontSize="xs"
                            fontWeight="400"
                            color={useColorModeValue("neutral.900", "neutralD.900")}
                        >
                            – {publishedAt}
                        </Text>
                    </HStack>

                </VStack>
            </VStack>

        </Box>
    );
};

export default WorkflowCard;