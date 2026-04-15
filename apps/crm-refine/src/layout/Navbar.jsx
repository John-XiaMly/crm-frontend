import React from 'react';
import { Breadcrumb, Flex, IconButton, Input, InputGroup, Text, Group } from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { FiBell, FiSearch, FiSettings } from "react-icons/fi";

export const Navbar = () => {
    return (
        <Flex
            position="sticky"
            top="10px"
            bg="white/50" // v3 支援透明度簡寫
            backdropFilter="blur(15px)"
            borderRadius="xl"
            p="4"
            justify="space-between"
            align="center"
            shadow="sm"
            zIndex="10"
        >
            {/* 左側：麵包屑與標題 */}
            <Flex direction="column">
                <Breadcrumb.Root size="sm" color="gray.500">
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">Pages</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#" color="gray.700">Default</Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>
                <Text fontWeight="bold" fontSize="md" color="gray.700">
                    Default
                </Text>
            </Flex>

            {/* 右側：搜索與功能 */}
            <Flex align="center" gap="4">
                {/* v3 使用 InputGroup snippet 處理圖示 */}
                <InputGroup
                    flex="1"
                    startElement={<FiSearch color="gray.400" />}
                    width="200px"
                >
                    <Input
                        placeholder="Type here..."
                        variant="outline"
                        bg="white"
                        borderRadius="15px"
                        size="sm"
                        _focus={{ borderColor: "teal.500", ring: "1px", ringColor: "teal.500" }}
                    />
                </InputGroup>

                <Group gap="1">
                    <IconButton variant="ghost" aria-label="user" borderRadius="lg">
                        <MdPerson size="20" />
                    </IconButton>
                    <IconButton variant="ghost" aria-label="settings" borderRadius="lg">
                        <FiSettings />
                    </IconButton>
                    <IconButton variant="ghost" aria-label="notifications" borderRadius="lg">
                        <FiBell />
                    </IconButton>
                </Group>
            </Flex>
        </Flex>
    );
};