import React, { useState } from "react";
import Head from "next/head";
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { getAllFilesFrontMatter } from "../lib/mdx";
import NavBar from "../components/NavBar";
import BlogPost from "../components/BlogPost";
import { SearchIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer"

export default function Widgets({ posts }) {
    const [searchValue, setSearchValue] = useState("");

    const filteredBlogPosts = posts
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    return (
        <>
            <Head>
                <title>Widgets - Flutter code</title>
            </Head>
            <NavBar>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Widgets ({posts.length} in total)
                        </Heading>
                        <InputGroup mb={4} mr={4} w="100%">
                            <Input
                                aria-label="Search by title"
                                placeholder="Search by title"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <InputRightElement>
                                <SearchIcon color="gray.300" />
                            </InputRightElement>
                        </InputGroup>
                        {!filteredBlogPosts.length && "No widgets found :(("}
                        {filteredBlogPosts.map((frontMatter) => (
                            <BlogPost key={frontMatter.title} {...frontMatter} />
                        ))}
                    </Flex>
                    <Footer />
                </Stack>
            </NavBar>
        </>
    );
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("widgets");

    return { props: { posts } };
}
