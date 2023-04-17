import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box className="headerIcon" fontSize="3xl" color="blue.500" fontWeight="bold" paddingLeft="3">
            <Link href="/">RealState</Link>
        </Box>
        <Spacer />
        <Box style={{ zIndex: '9999999' }}>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu size="2.2rem" />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar