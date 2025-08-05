import { ChakraProvider, Box, Flex, Grid, Button, extendTheme } from '@chakra-ui/react';
import { useAuth } from './AuthContext';
import { useThemeContext } from './ThemeContext';

function App() {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { theme, toggleTheme } = useThemeContext();

  // Chakra theme-aware background values
  const bgColor = theme === 'light' ? 'gray.100' : 'gray.700';
  const cardBg = theme === 'light' ? 'gray.200' : 'gray.600';
  const footerBg = theme === 'light' ? 'gray.300' : 'gray.800';
  const textColor = theme === 'light' ? 'black' : 'white';

  return (
    <ChakraProvider>
      <Flex as="nav" p="4" bg={bgColor} justifyContent="space-between">
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      <Grid
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap="4"
        p="4"
        bg={bgColor}
        minH="60vh"
      >
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box key={card} p="4" shadow="md" bg={cardBg} color={textColor}>
            {card}
          </Box>
        ))}
      </Grid>

      <Box as="footer" p="4" bg={footerBg} color={textColor} textAlign="center">
        {isLoggedIn ? 'Welcome, User' : 'Please log in'}
      </Box>
    </ChakraProvider>
  );
}

export default App;
