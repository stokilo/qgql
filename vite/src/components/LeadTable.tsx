/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {ColorPaletteProp} from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton, {iconButtonClasses} from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
// icons
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BlockIcon from '@mui/icons-material/Block';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {gql, useQuery} from "urql";
import {GetLeadsQuery} from "../gql/api";
import {SelectValue} from "@mui/base/useSelect";

type Order = 'asc' | 'desc';

// function RowMenu() {
//     return (
//         <Dropdown>
//             <MenuButton
//                 slots={{root: IconButton}}
//                 slotProps={{root: {variant: 'plain', color: 'neutral', size: 'sm'}}}
//             >
//                 <MoreHorizRoundedIcon/>
//             </MenuButton>
//             <Menu size="sm" sx={{minWidth: 140}}>
//                 <MenuItem>Edit</MenuItem>
//                 <MenuItem>Rename</MenuItem>
//                 <MenuItem>Move</MenuItem>
//                 <Divider/>
//                 <MenuItem color="danger">Delete</MenuItem>
//             </Menu>
//         </Dropdown>
//     );
// }

export default function LeadTable() {
    const [order, setOrder] = React.useState<Order>('desc');
    const [status, setStatus] = React.useState<string>('');
    const [term, setTerm] = React.useState<string>('');

    const [result] = useQuery<GetLeadsQuery>({
        query: gql`
            query getLeads($order: String, $status: String, $term: String){
                l1: lead(order: $order, status: $status, term: $term) {
                    leads {
                        id
                        leadNr
                        status
                        lastName
                        firstName
                        email
                        creationDate
                        comments {
                            comment
                        }
                    }
                    statusList
                    categoryList
                }

                l2: lead(order: $order, status: $status, term: $term) {
                    leads {
                        id
                        creationDate
                    }
                }
            }
        `,
        variables: {order, status, term}
    });
    const {data, fetching} = result;

    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent | null, newValue: string | null) => {
        if (newValue) {
            setStatus(newValue);
        }
    };


    const renderFilters = () => (
        <React.Fragment>
            <FormControl size="sm">
                <FormLabel>Status</FormLabel>
                <Select
                    size="sm"
                    placeholder="Filter by status"
                    value={status}
                    onChange={handleChange}
                    slotProps={{button: {sx: {whiteSpace: 'nowrap'}}}}
                >
                    {!fetching && data?.l1!.statusList!.map((status) => (
                        <>
                            <Option value={status} key={status}>{status}</Option>
                        </>
                    ))
                    }

                </Select>
            </FormControl>

            <FormControl size="sm">
                <FormLabel>Category</FormLabel>
                <Select size="sm" placeholder="All">
                    {!fetching && data?.l1?.categoryList!.map((category) => (
                        <>
                            <Option value={category} key={category}>{category}</Option>
                        </>
                    ))
                    }
                </Select>
            </FormControl>

            <FormControl size="sm">
                <FormLabel>Customer</FormLabel>
                <Select size="sm" placeholder="All">
                    <Option value="all">All</Option>
                    <Option value="olivia">Olivia Rhye</Option>
                    <Option value="steve">Steve Hampton</Option>
                    <Option value="ciaran">Ciaran Murray</Option>
                    <Option value="marina">Marina Macdonald</Option>
                    <Option value="charles">Charles Fulton</Option>
                    <Option value="jay">Jay Hoper</Option>
                </Select>
            </FormControl>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Sheet
                className="SearchAndFilters-mobile"
                sx={{
                    display: {
                        xs: 'flex',
                        sm: 'none',
                    },
                    my: 1,
                    gap: 1,
                }}
            >
                <Input
                    size="sm"
                    placeholder="Search"
                    startDecorator={<SearchIcon/>}
                    sx={{flexGrow: 1}}
                />
                <IconButton
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    onClick={() => setOpen(true)}
                >
                    <FilterAltIcon/>
                </IconButton>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                        <ModalClose/>
                        <Typography id="filter-modal" level="h2">
                            Filters
                        </Typography>
                        <Divider sx={{my: 2}}/>
                        <Sheet sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            {renderFilters()}
                            <Button color="primary" onClick={() => setOpen(false)}>
                                Submit
                            </Button>
                        </Sheet>
                    </ModalDialog>
                </Modal>
            </Sheet>
            <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                    borderRadius: 'sm',
                    py: 2,
                    display: {
                        xs: 'none',
                        sm: 'flex',
                    },
                    flexWrap: 'wrap',
                    gap: 1.5,
                    '& > *': {
                        minWidth: {
                            xs: '120px',
                            md: '160px',
                        },
                    },
                }}
            >
                <FormControl sx={{flex: 1}} size="sm">
                    <FormLabel>Search for lead</FormLabel>
                    <Input size="sm"
                           placeholder="Search"
                           value={term}
                           onChange={e => setTerm(e.target.value)}
                           startDecorator={<SearchIcon/>}/>
                </FormControl>
                {renderFilters()}
            </Box>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: {xs: 'none', sm: 'initial'},
                    width: '100%',
                    borderRadius: 'sm',
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                    }}
                >
                    <thead>
                    <tr>
                        <th style={{width: 48, textAlign: 'center', padding: '12px 6px'}}>
                            {/*<Checkbox*/}
                            {/*    size="sm"*/}
                            {/*    indeterminate={*/}
                            {/*        selected.length > 0 && selected.length !== rows.length*/}
                            {/*    }*/}
                            {/*    checked={selected.length === rows.length}*/}
                            {/*    onChange={(event) => {*/}
                            {/*        setSelected(*/}
                            {/*            event.target.checked ? rows.map((row) => row.id) : [],*/}
                            {/*        );*/}
                            {/*    }}*/}
                            {/*    color={*/}
                            {/*        selected.length > 0 || selected.length === rows.length*/}
                            {/*            ? 'primary'*/}
                            {/*            : undefined*/}
                            {/*    }*/}
                            {/*    sx={{verticalAlign: 'text-bottom'}}*/}
                            {/*/>*/}
                        </th>
                        <th style={{width: 120, padding: '12px 6px'}}>
                            <Link
                                underline="none"
                                color="primary"
                                component="button"
                                onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                                fontWeight="lg"
                                endDecorator={<ArrowDropDownIcon/>}
                                sx={{
                                    '& svg': {
                                        transition: '0.2s',
                                        transform:
                                            order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                    },
                                }}
                            >
                                Lead Nr
                            </Link>
                        </th>
                        <th style={{width: 140, padding: '12px 6px'}}>Creation Date</th>
                        <th style={{width: 140, padding: '12px 6px'}}>Status</th>
                        <th style={{width: 240, padding: '12px 6px'}}>Customer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!fetching && data?.l1?.leads!.map((row) => (
                        <tr key={row?.id}>
                            <td style={{textAlign: 'center', width: 120}}>
                                <Checkbox
                                    size="sm"
                                    checked={selected.includes(row?.id)}
                                    color={selected.includes(row?.id) ? 'primary' : undefined}
                                    onChange={(event) => {
                                        setSelected((ids) =>
                                            event.target.checked
                                                ? ids.concat(row?.id)
                                                : ids.filter((itemId) => itemId !== row?.id),
                                        );
                                    }}
                                    slotProps={{checkbox: {sx: {textAlign: 'left'}}}}
                                    sx={{verticalAlign: 'text-bottom'}}
                                />
                            </td>
                            <td>
                                <Typography level="body-xs">{row?.leadNr}</Typography>
                            </td>
                            <td>
                                <Typography level="body-xs">{row?.creationDate}</Typography>
                            </td>
                            <td>
                                <Chip
                                    variant="soft"
                                    size="sm"
                                    startDecorator={
                                        // {
                                        //     newa: <CheckRoundedIcon/>
                                        //     // Refunded: <AutorenewRoundedIcon/>,
                                        //     // Cancelled: <BlockIcon/>,
                                        // }[row?.status]
                                        <BlockIcon/>
                                    }
                                    color={
                                        'danger' as ColorPaletteProp
                                    }
                                >
                                    {row?.status}
                                </Chip>
                            </td>
                            <td>
                                <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                                    <Avatar size="sm">{row?.firstName!.length ? row?.firstName[0] : ''}</Avatar>
                                    <div>
                                        <Typography level="body-xs">{row?.firstName} {row?.lastName}</Typography>
                                        <Typography level="body-xs">{row?.email}</Typography>
                                    </div>
                                </Box>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Sheet>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: {borderRadius: '50%'},
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                }}
            >
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon/>}
                >
                    Previous
                </Button>

                <Box sx={{flex: 1}}/>
                {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
                    <IconButton
                        key={page}
                        size="sm"
                        variant={Number(page) ? 'outlined' : 'plain'}
                        color="neutral"
                    >
                        {page}
                    </IconButton>
                ))}
                <Box sx={{flex: 1}}/>

                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon/>}
                >
                    Next
                </Button>
            </Box>
        </React.Fragment>
    );
}
