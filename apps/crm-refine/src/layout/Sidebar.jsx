import React from 'react';

import { Box, Flex, Separator, Stack, Text } from '@chakra-ui/react';
import NavGroup from "@/layout/NavGroup.jsx";
import { FaUserTie } from "react-icons/fa";
import { NavItem } from "@/layout/NavItem.jsx";

export const Sidebar = () => {
    return (
        <Box
            as="nav"
            // 定位與尺寸
            position="fixed"
            left="20px"
            top="20px"
            bottom="20px"
            w="260px"

            // 卡片外觀 (核心修正點)
            bg="white/70"                // 半透明背景
            backdropFilter="blur(20px)"  // 毛玻璃效果
            borderRadius="20px"          // 大圓角
            border="1px solid"
            borderColor="white/20"       // 極細微的亮邊，增加立體感
            boxShadow="0px 20px 27px rgba(0, 0, 0, 0.05)" // 柔軟陰影

            // 內部佈局
            p="16px"
            zIndex="1000"
        >
            <Flex direction="column" h="full">
                {/* Logo 或 標題區 */}
                <Box p="20px" textAlign="center">
                    <Text fontWeight="bold" fontSize="sm" letterSpacing="1px">
                        DASHBOARD
                    </Text>
                </Box>

                <Separator mb="20px" bg='black'  />

                {/* 選單內容區 */}
                <Stack gap="2" overflowY="auto" flex="1" px="2">
                    <NavGroup icon={FaUserTie} title="客戶管理" active>
                        <NavItem title="客戶設定" path='/customers' active />
                        <NavItem title="客戶設定" path='/' />
                    </NavGroup>
                </Stack>
            </Flex>
        </Box>
    );
};