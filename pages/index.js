import {Container, Box, Heading} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'


const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="#475061" color={'white'} p={3} mb={6} align="center">
                Welcome to My Portfolio Website
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Socrates Oteo
                    </Heading>
                    <p>Programmer ( Developer / Designer )</p>
                </Box>
            </Box>
        <Section delay={0.1}/>
        <Heading as="h3" variant="section-title">
            Work
        </Heading>
        <Paragraph>Finished My Biggest Coding experience with DevMountain, A Programming Bootcamp
             <br></br>
            Languages learned include Python, Javascript, PHP, PostgresSQL, HTML, CSS.
            Libraries include as Next.js, React, Docker, Webpack
        </Paragraph>
        <br></br>
        <br></br>
        
        </Container>
    )
}

export default Page