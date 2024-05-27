import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import {tabClasses} from '@mui/joy/Tab';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import {gql, useMutation} from "urql";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from "react-hook-form";
import {Dispatch, SetStateAction} from "react";
import {CreateLeadMutation} from "../gql/api";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    leadNr: yup.string().required()
}).required();

interface MyComponentProps {
    setOpen: (isOpen: boolean) => void;
}

export default function MyProfile(props: MyComponentProps) {
    const {setOpen} = props;

    const {getValues, control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            firstName: "John",
            lastName: "Doe",
            email: "test@test.com",
            leadNr: "ADC-331-00000001"
        },
        resolver: yupResolver(schema)
    });

    const [_, createLead] = useMutation<CreateLeadMutation>(gql`
        mutation createLead($leadInput: LeadInput) {
            createLead(lead: $leadInput) {
                id
            }
        }
    `);

    const onClick = () => {
        createLead({leadInput: getValues()}).then(result => {

            console.dir(errors)
            console.dir(result)

            // if (result.error) {
            //     console.error('Error:', result.error);
            // } else {
            //     // setOpen(false)
            // }
        })
    }

    return (
        <Box
            sx={{
                flex: 1,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    position: 'sticky',
                    top: {
                        sm: -100,
                        md: -110,
                    },
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box
                    sx={{
                        px: {
                            xs: 2,
                            md: 6,
                        },
                    }}
                >

                </Box>
                <Tabs
                    defaultValue={0}
                    sx={{
                        bgcolor: 'transparent',
                    }}
                >
                    <TabList
                        tabFlex={1}
                        size="sm"
                        sx={{
                            pl: {
                                xs: 0,
                                md: 4,
                            },
                            justifyContent: 'left',
                            [`&& .${tabClasses.root}`]: {
                                flex: 'initial',
                                bgcolor: 'transparent',
                                [`&.${tabClasses.selected}`]: {
                                    fontWeight: '600',
                                    '&::after': {
                                        height: '2px',
                                        bgcolor: 'primary.500',
                                    },
                                },
                            },
                        }}
                    >
                    </TabList>
                </Tabs>
            </Box>

            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    maxWidth: '800px',
                    mx: 'auto',
                    px: {
                        xs: 2,
                        md: 6,
                    },
                    py: {
                        xs: 2,
                        md: 3,
                    },
                }}
            >
                <Card>
                    <Box sx={{mb: 1}}>
                        <Typography level="body-sm">Fill customer data</Typography>
                    </Box>
                    <Divider/>
                    <Stack
                        direction="column"
                        spacing={3}
                        sx={{display: {xs: 'flex', md: 'flex'}, my: 1}}
                    >
                        <Stack spacing={2} sx={{flexGrow: 1}}>
                            <Stack spacing={1}>
                                <FormLabel>Name 2</FormLabel>

                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({field}) => <FormControl
                                        sx={{
                                            display: {
                                                sm: 'flex-column',
                                                md: 'flex-row',
                                            },
                                            gap: 2,
                                        }}
                                    >
                                        <Input {...field} size="sm" name="firstName" placeholder="First name"/>
                                    </FormControl>
                                    }
                                />
                                {errors.firstName && <p>This is required</p>}

                                <Controller
                                    name="lastName"
                                    control={control}
                                    render={({field}) => <FormControl
                                        sx={{
                                            display: {
                                                sm: 'flex-column',
                                                md: 'flex-row',
                                            },
                                            gap: 2,
                                        }}
                                    >
                                        <Input {...field} size="sm" placeholder="Last name" sx={{flexGrow: 1}}/>
                                    </FormControl>
                                    }
                                />

                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({field}) => <FormControl
                                        sx={{
                                            display: {
                                                sm: 'flex-column',
                                                md: 'flex-row',
                                            },
                                            gap: 2,
                                        }}
                                    >
                                        <Input {...field} size="sm" placeholder="Email" sx={{flexGrow: 1}}/>
                                    </FormControl>
                                    }
                                />

                                <Controller
                                    name="leadNr"
                                    control={control}
                                    render={({field}) => <FormControl
                                        sx={{
                                            display: {
                                                sm: 'flex-column',
                                                md: 'flex-row',
                                            },
                                            gap: 2,
                                        }}
                                    >
                                        <Input {...field} size="sm" placeholder="Lead Nr" sx={{flexGrow: 1}}/>
                                    </FormControl>
                                    }
                                />

                            </Stack>
                        </Stack>
                    </Stack>


                    {/*<Stack*/}
                    {/*    direction="column"*/}
                    {/*    spacing={2}*/}
                    {/*    sx={{display: {xs: 'flex', md: 'none'}, my: 1}}*/}
                    {/*>*/}
                    {/*    <FormControl>*/}
                    {/*        <FormLabel>Role</FormLabel>*/}
                    {/*        <Input size="sm" defaultValue="UI Developer"/>*/}
                    {/*    </FormControl>*/}
                    {/*    <FormControl sx={{flexGrow: 1}}>*/}
                    {/*        <FormLabel>Email</FormLabel>*/}
                    {/*        <Input*/}
                    {/*            size="sm"*/}
                    {/*            type="email"*/}
                    {/*            startDecorator={<EmailRoundedIcon/>}*/}
                    {/*            placeholder="email"*/}
                    {/*            defaultValue="siriwatk@test.com"*/}
                    {/*            sx={{flexGrow: 1}}*/}
                    {/*        />*/}
                    {/*    </FormControl>*/}
                    {/*</Stack>*/}
                    <CardOverflow sx={{borderTop: '1px solid', borderColor: 'divider'}}>
                        <CardActions sx={{alignSelf: 'flex-end', pt: 2}}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>
                            <Button size="sm" variant="solid" onClick={handleSubmit(onClick)}>
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>
            </Stack>
        </Box>
    );
}
