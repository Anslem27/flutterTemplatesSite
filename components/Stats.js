import {
    Box,
    Text,
    HStack,
    Icon,
    Stack,
    Link,
} from "@chakra-ui/react";
import { Bookmarks, Code, CodesandboxLogo } from "phosphor-react";



const StatItem = ({ icon, title, caption, link }) => {
    return (
        <HStack spacing={4}>
            <Icon fontSize="xl" as={icon} />
            <Box>
                <Link
                    href={link}
                    _hover={{ color: "#1DA1F2" }}
                    isExternal>
                    <Text
                        fontWeight="regular"
                        maxW={["320px", null, "150px"]}
                        minW="120px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {title}
                    </Text>
                    <Text fontSize="sm" color="trueGray.500">
                        {caption}
                    </Text>
                </Link>
            </Box>
        </HStack>
    );
};



const Stats = () => {

    return (
        <Box pt={"5"} pb={"5"} >
            <Stack
                spacing={8}
                direction={["column", null, "row"]}
                justifyContent="space-between"

                flex="1"
            >

                <StatItem
                    icon={Code}
                    title={"Code Templates"}
                    caption={"12 templates"}
                    link={"Link"}
                />


                <StatItem
                    icon={Bookmarks}
                    title={"Widgets"}
                    caption={"5 Widgets"}
                    link=""
                />

                <StatItem
                    link=""
                    icon={CodesandboxLogo}
                    title={"Workflows"}
                    caption={"2 workflows"}
                />
            </Stack>
        </Box>
    );
};

export default Stats;