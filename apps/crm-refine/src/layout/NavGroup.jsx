import React, { useState } from 'react';
import { Button, Collapsible, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const NavGroup = ({ icon, title, children, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <Collapsible.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Collapsible.Trigger asChild>
                <Button
                    variant="ghost"
                    width="full"
                    justifyContent="space-between"
                    py="25px"
                    px="12px"
                    borderRadius="10px"
                    _hover={{ bg: "gray.100" }}
                >
                    <Flex align="center">
                        <Flex
                            bg="white"
                            color="teal.300"
                            p="8px"
                            borderRadius="12px"
                            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
                            mr="12px"
                        >
                            <Icon as={icon} />
                        </Flex>
                        <Text color={open ? 'teal.500' : 'gray.700'} fontWeight="bold" fontSize="md">
                            {title}
                        </Text>
                    </Flex>
                    <Icon
                        as={LuChevronDown}
                        transition="transform 0.2s"
                        transform={open ? "rotate(180deg)" : "none"}
                        color="gray.400"
                    />
                </Button>
            </Collapsible.Trigger>

            <Collapsible.Content>
                <Stack gap="1" mt="1">
                    {children}
                </Stack>
            </Collapsible.Content>
        </Collapsible.Root>
    );
};

export default NavGroup;