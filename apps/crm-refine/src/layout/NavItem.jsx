import React from 'react';
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export const NavItem = ({ title, path, active = false }) => {
    return (
        <Flex
            align="center"
            py="8px"
            ps="64px"
            borderRadius="12px"
            cursor="pointer"
            _hover={{ color: "teal.400" }}
            transition="0.2s"
            color={active ? "teal.500" : "gray.500"}
            fontWeight={active ? "bold" : "normal"}
            fontSize="xs"
        >
            <Link to={path}>
                <Text fontSize='sm'>{title}</Text>
            </Link>
        </Flex>
    );
};