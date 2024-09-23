import { Box, ColorInput, Paper, Select, TextInput } from '@mantine/core';

export const Line = () => {
  return (
    <Paper
      w={400}
      display='flex'
      shadow='lg'
      withBorder
      p={30}
      style={{ flexDirection: 'column', gap: '20px' }}
    >
      <Box display='flex' style={{ gap: '10px' }}>
        <TextInput label='Старт X' />
        <TextInput label='Старт Y' />
      </Box>
      <Box display='flex' style={{ gap: '10px' }}>
        <TextInput label='Конец X' />
        <TextInput label='Конец y' />
      </Box>
      <Box display='flex' style={{ gap: '10px' }}>
        <TextInput label='Толщина' />
        <ColorInput label='Цвет' />
      </Box>
      <Select
        label='Тип линии'
        defaultValue='Сплошная'
        placeholder='Выберите значение'
        data={['Cплошная', 'Пунктирная']}
        clearable
      />
    </Paper>
  );
};
