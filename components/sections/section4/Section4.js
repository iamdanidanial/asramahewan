import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { nanoid } from "nanoid"
import DogIcon from '@icons/DogIcon';
import CatIcon from '@icons/CatIcon';
import BrushIcon from '@icons/BrushIcon';
import TaxIcon from '@icons/TaxIcon';
import CardService from './CardService';

function Section4() {

    const services = [
        {
            id: nanoid(),
            url: "#",
            icon: <DogIcon />,
            title: "Asrama anjing",
            description: `Saat Anda sedang berlibur,
            di sinilah teman berbulu
            akan menghabiskan waktu mereka.`,
        },
        {
            id: nanoid(),
            url: "#",
            icon: <CatIcon />,
            title: "Asrama kucing",
            description: `Kami memiliki kualitas tertinggi
            akomodasi untuk genap
            kucing paling cerewet.`,
        },
        {
            id: nanoid(),
            url: "#",
            icon: <BrushIcon colorFill={'#82C55B'} />,
            title: "Perawatan hewan",
            description: `Hewan peliharaan Anda akan pergi
            merasa senang, tampak
            dan berbau harum.`,
        },
        {
            id: nanoid(),
            url: "#",
            icon: <TaxIcon />,
            title: "Taxi hewan",
            description: `Jika Anda kekurangan waktu
            kita bisa mengatur taksi
            transportasi untuk Anda.`,
        },

    ]

    return (
        <Flex
            id="services"
            w="full"
            py="128px"
            px={['20px', '20px', '20px', '76px', '76px']}
            gridGap="30px"
            justifyContent="center"
            alignItems="center"
            flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
            flexDirection={['column', 'column', 'row', 'row', 'row']}
        >
            {
                services.map(e => <CardService key={e.id} data={e} />)
            }

        </Flex>
    );
}

export default Section4;