import React, {useMemo, useState} from 'react';
import {
    Button,
    ButtonGroup,
    createListCollection,
    Flex,
    IconButton,
    Pagination,
    Portal,
    Select,
    Stack,
    Table,
    Text
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import {FaEdit, FaSearch, FaTrash} from "react-icons/fa";

const CustomTable = ({ columns, data }) => {
    const [sort, setSort] = useState({ key: null, direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState([10]);

    const sortedItems = useMemo(() => {
        let sortableItems = [...data];
        if (sort.key !== null) {
            sortableItems.sort((a, b) => {
                if (a[sort.key] < b[sort.key]) {
                    return sort.direction === 'asc' ? -1 : 1;
                }
                if (a[sort.key] > b[sort.key]) {
                    return sort.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sort]);

    const paginatedItems = useMemo(() => {
        const page = parseInt(currentPage) || 1;
        const size = parseInt(pageSize) || 10;
        const start = (page - 1) * size;
        const end = start + size;
        return sortedItems.slice(start, end);
    }, [sortedItems, currentPage, pageSize]);

    const changeSort = (key) => {
        if (sort.key == null || sort.key !== key) {
            setSort({ key, direction: 'asc' });
            return;
        }
        if (sort.key === key) {
            if (sort.direction === '') {
                setSort({ key, direction: 'asc' });
            } else if (sort.direction === 'asc') {
                setSort({ key, direction: 'desc' });
            } else {
                setSort({ key: null, direction: '' });
            }
        }
    }

    const options = createListCollection({
        items: [
            { label: 10, value: 10 },
            { label: 25, value: 25 },
            { label: 50, value: 50 },
            { label: 100, value: 100 }
        ]
    });

    return (
        <Stack width='full' gap={5}>
            <Flex gap={2} >
                <Text mt={2}>顯示</Text>
                <Select.Root collection={options} width={20} value={pageSize} onValueChange={e => setPageSize(e.value)}>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                { options.items.map(option => (
                                    <Select.Item key={option.value} item={option}>
                                        { option.label }
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
                <Text mt={2}>筆資料</Text>
            </Flex>

            <Table.Root striped showColumnBorder>
                <Table.Header>
                    <Table.Row bg='teal.200'>
                        { columns.map(item => (
                            <Table.ColumnHeader key={item.key} fontWeight="bold" style={{ cursor: 'pointer' }} onClick={() => changeSort(item.key)}>
                                <Flex align='center' gap={2}>
                                    {/*<Text fontWeight='bold' fontSize='sm' color='gray.700'>*/}
                                        {item.title}
                                    {/*</Text>*/}
                                    {sort.key === item.key && sort.direction !== '' ? sort.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown /> : ''}
                                </Flex>
                            </Table.ColumnHeader>
                        )) }
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { paginatedItems.map(item => (
                        <Table.Row key={item.id} bg='teal.200'>
                            { columns.map(column => (
                                <Table.Cell key={column.key}>
                                    <Flex direction="column">
                                        <Text fontWeight="bold" fontSize="sm" color="gray.700">{item[column.key]}</Text>
                                    </Flex>
                                </Table.Cell>
                            )) }
                            <Table.Cell>
                                <Button size='xs' variant='surface' colorPalette='blue' style={{ borderRadius: '20px'}} mr={2}>
                                    <FaSearch />
                                </Button>
                                <Button size='xs' variant='surface' colorPalette='green' style={{ borderRadius: '20px'}} mr={2}>
                                    <FaEdit />
                                </Button>
                                <Button size='xs' variant='surface' colorPalette='red' style={{ borderRadius: '20px'}} mr={2}>
                                    <FaTrash />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    )) }
                </Table.Body>
            </Table.Root>

            <Pagination.Root
                display='flex'
                justifyContent='flex-end'
                count={data.length}
                pageSize={pageSize}
                page={currentPage}
                onPageChange={(details) => setCurrentPage(details.page)}
            >
                <ButtonGroup variant='ghost' size='sm' wrap='wrap'>
                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <LuChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    <Pagination.Items render={page => (
                        <IconButton
                            key={page.value}
                            variant={page.value === currentPage ? 'solid' : 'ghost'}
                            bg={page.value === currentPage ? 'teal.200' : 'gray.200'}
                        >
                            {page.value}
                        </IconButton>
                    )} />

                    <Pagination.NextTrigger asChild>
                        <IconButton>
                            <LuChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </Stack>
    );
};

export default CustomTable;