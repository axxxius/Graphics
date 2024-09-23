import { Button, Group } from '@mantine/core';
import { useTypeView } from '../../utils';

const shapes = [
  { label: 'Линия', value: 'line' },
  { label: 'Эллипс', value: 'ellipse' },
  { label: 'Полигон', value: 'polygon' }
];

export const Tabs = () => {
  const { handleClick } = useTypeView();

  return (
    <Group justify='center'>
      {shapes.map((shape) => (
        <Button
          key={shape.value}
          color='teal'
          variant='gradient'
          onClick={() => handleClick(shape.value)}
        >
          {shape.label}
        </Button>
      ))}
    </Group>
  );
};
