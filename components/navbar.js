import Logo from './logo';
import NextLink from 'next/link';
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { IoLogoGithub } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
// Google Analytics
import ReactGA from 'react-ga';

const LinkItem = ({ href, path, _target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
	return (
		<NextLink href={href} passHref>
			<Link
				style={{ borderRadius: '12px' }}
				p={2}
				bg={active ? '#d6bcfa' : undefined}
				color={active ? '#202023' : inactiveColor}
				_target={_target}
				{...props}>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = (props) => {
	const { path } = props;

	// Track If User Clicked Works
	const clickedWorks = () => {
		ReactGA.event({
			category: 'Works',
			action: 'User clicked works',
		});
	};

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue('#ffffff40', '#20202380')}
			css={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
			{...props}>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between">
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>

				{/* Desktop Nav */}
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}>
					<LinkItem onClick={clickedWorks} href="/works" path={path}>
						Works
					</LinkItem>
					<LinkItem
						target="_blank"
						href="https://github.com/noelys215"
						path={path}
						display="inline-flex"
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}>
						<IoLogoGithub />
						GitHub
					</LinkItem>
					<LinkItem
						target="_blank"
						href="https://www.linkedin.com/in/henry-betancourth/"
						path={path}
						display="inline-flex"
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}>
						<IoLogoLinkedin />
						Linkedin
					</LinkItem>
				</Stack>

				{/* Mobile Nav */}
				<Box flex={1} align="right">
					<ThemeToggleButton />

					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>About</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem onClick={clickedWorks} as={Link}>
										Works
									</MenuItem>
								</NextLink>
								<MenuItem as={Link} href="https://github.com/noelys215">
									GitHub
								</MenuItem>
								<MenuItem
									as={Link}
									href="https://www.linkedin.com/in/henry-betancourth/">
									Linkedin
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
