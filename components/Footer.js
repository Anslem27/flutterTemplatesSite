import { Flex, Link, HStack, Icon, Divider, Text } from "@chakra-ui/react";
import {
    RedditLogo,
    GithubLogo, TwitterLogo, Coins
} from "phosphor-react";

const FooterIcon = ({ title, icon, link }) => (
    <Link
        href={link}
        isExternal
        data-splitbee-event={title}
        data-splitbee-event-type="Social"
        aria-label={title}
    >
        <Icon
            fontSize="lg"
            transition="150ms ease-in-out"
            _hover={{ color: "cyan.600" }}
            as={icon}
        />
    </Link>
);

const Footer = () => {
    return (
        <Flex flexDirection="column" alignItems="center" flex-grow={1}>
            <Divider />
            <Flex h="12vh" >
                <Flex w="full" justifyContent="flex-end" >
                    <HStack>
                        <FooterIcon
                            title="twitter"
                            icon={TwitterLogo}
                            link="https://twitter.com/anslemAnsy"
                        />
                        <FooterIcon
                            title="reddit"
                            icon={RedditLogo}
                            link="https://www.reddit.com/user/Infamous-Date-355/"
                        />
                        <FooterIcon
                            title="github"
                            icon={GithubLogo}
                            link="https://github.com/Anslem27"
                        />
                        <FooterIcon
                            title="sponsor"
                            icon={Coins}
                            link=""
                        />
                        <Text>&copy; {new Date().getFullYear()} Anslem Seguya </Text>
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;