import NextLink from 'next/link';
import {
	Container,
	Box,
	Heading,
	Image,
	Link,
	useColorModeValue,
	Button,
	SimpleGrid,
	ListItem,
	List,
	Icon,
	GridItem,
	Grid,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { WorkGridItem } from '../components/grid-item';

import { IoMailOutline, IoLogoGithub } from 'react-icons/io5';
import thumbGloria from '../public/images/gloria.png';
import thumbAtalanta from '../public/images/atalanta.png';

const Page = () => {
	const skills = [
		'Javascript',
		'React.js',
		'Next.js',
		'Typescript',
		'Node.js',
		'Express.js',
		'CSS',
		'HTML',
		'Git',
		'Redux / Toolkit',
		'CI/CD',
		'MongoDB',
	];
	return (
		<Layout>
			<Container maxW="3xl">
				<Box
					borderRadius="lg"
					bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
					p={3}
					mb={6}
					align="center">
					One Pixel at a Time
				</Box>

				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Henry Betancourth
						</Heading>
						<p>Digital Artisan ( Developer / Designer )</p>
					</Box>
					<Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
						<Image
							borderColor="whiteAlpha.800"
							borderWidth={2}
							borderStyle="solid"
							maxWidth="130px"
							display="inline-block"
							borderRadius="full"
							src="/images/lofi.PNG"
							alt="Profile image"
						/>
					</Box>
				</Box>

				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						Hello, I&apos;m a self motivated frontend focused developer based in
						Southern New Jersey.
						<br />
						<br />
						I primarily enjoy trying to make minimal, visually appealing and simple to
						navigate web apps; experimenting with different technologies and libraries,
						while keeping the code as simple and readable as possible.
						<br />
						<br />
						Although I primarily work with JavaScript and React/Next, I have a passion
						for learning different technologies and services to expand my knowledge and
						keep up with latest trends.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
								My portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>

				{/* <Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>1992</BioYear>
						Born on Aguadilla, Puerto Rico
					</BioSection>
					<BioSection>
						<BioYear>2010</BioYear>
						Graduated from Pennsauken High School
					</BioSection>
					<BioSection>
						<BioYear>2010-2019</BioYear>
						Worked various jobs.
					</BioSection>
					<BioSection>
						<BioYear>2019 to present</BioYear>
						Started learning web development and started building small web apps.
					</BioSection>
				</Section> */}

				{/* Skills Section */}
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Skills
					</Heading>

					<Grid templateColumns="repeat(8, 1fr)" gap={1.5}>
						{skills.map((skill) => (
							<GridItem textAlign={'center'} colSpan={{ base: 4, sm: 2 }} key={skill}>
								{skill}
							</GridItem>
						))}
					</Grid>
				</Section>

				{/* Hobbies  */}
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I ♥
					</Heading>

					<Paragraph>
						Art, Music, Guitar Playing,{' '}
						<Link href="https://gloriafutbol.com/" target="_blank">
							Football(Soccer)
						</Link>
						, Puzzles; Most of my projects showcase this. 😅
					</Paragraph>
				</Section>

				{/* Featured Section */}
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Featured Works
					</Heading>

					<SimpleGrid columns={[1, 2, 2]} gap={6}>
						<WorkGridItem
							title="Gloria Fútbol"
							id="gloriafutbol"
							thumbnail={thumbGloria}>
							Simple soccer/futbol app with live scores,charts and tables.
						</WorkGridItem>

						<WorkGridItem title="Atatanta A.C." id="atalanta" thumbnail={thumbAtalanta}>
							A semi-modern athletic clothing e-commerce store.
						</WorkGridItem>
					</SimpleGrid>

					<List display={'flex'} justifyContent={'center'} marginTop={3}>
						{/* <ListItem>
							<Link href="https://github.com/noelys215" target="_blank">
								<Button
									variant="ghost"
									colorScheme="purple"
									leftIcon={<Icon as={IoLogoGithub} />}>
									@noelys215
								</Button>
							</Link>
						</ListItem> */}

						<ListItem>
							<Button
								as={Link}
								variant="ghost"
								colorScheme="purple"
								leftIcon={<Icon as={IoMailOutline} />}
								href={`mailto:noelys215@gmail.com?subject=${
									encodeURIComponent('Hello Henry!') || ''
								}&body=${encodeURIComponent('words and sentences') || ''}`}>
								Email Me
							</Button>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	);
};

export default Page;
