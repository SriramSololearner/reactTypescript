import { Box, Stack } from '@mui/material'
import React, { useState } from 'react';
import Data from "../Data.json";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StyleSheet } from './Styles';

interface Istate {
    expanded: boolean,
    activeIndex: number | undefined,
    data: {
        id: number,
        title: string,
        content: string[],
        toggle: boolean
    }[];
}

const Home = () => {
    //  Accordion
    const [expanded, setExpanded] = useState<Istate['expanded']>(false);

    const [data, setData] = useState<Istate['data']>(Data);

    const handleToggle = (id: number) => {
        let res = Data.find(obj => obj.id === id)
        if (res) {
            data[id].toggle = !res.toggle
            setExpanded(!expanded)
        }
    }

    return (
        <Box>
            {
                data.map((item, ind) => (
                    <Stack key={ind} sx={StyleSheet.accordion}>
                        <Box sx={StyleSheet.accordionItem} onClick={() => handleToggle(item.id)}>
                            <Box sx={StyleSheet.accordionItemHeader}>{item.title}</Box> <Box component={'span'} sx={StyleSheet.boxArrow}>{Data[ind].toggle ? <KeyboardArrowUpIcon sx={StyleSheet.arrow} /> : <ExpandMoreIcon />} </Box>
                        </Box>
                        {Data[ind].toggle && <Box sx={StyleSheet.accordionItemContent}> {item.content.map((content, ind) => (
                            <Stack key={ind} >
                                <Box>{content}</Box>
                            </Stack>
                        ))}</Box>}
                    </Stack>
                ))
            }
        </Box>
    )
}

export default Home
