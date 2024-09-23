import { Flex, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { TypeViewProvider } from './utils';
import { TypeView } from './components/typeView/typeView.tsx';

export const App = () => {
  return (
    <>
      <TypeViewProvider>
        <MantineProvider defaultColorScheme='dark'>
          <Flex align='center' justify='center' direction='column' gap={30} h='100vh'>
            <TypeView />
          </Flex>
        </MantineProvider>
      </TypeViewProvider>
    </>
  );
};
