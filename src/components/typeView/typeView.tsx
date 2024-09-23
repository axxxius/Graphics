import { Line } from '../line/line.tsx';
import { Ellipse } from '../ellipse/ellipse.tsx';
import { Polygon } from '../polygon/polygon.tsx';
import { Tabs } from '../tabs/tabs.tsx';
import { useTypeView } from '../../utils';

const TYPE_VIEWS = {
  line: Line,
  ellipse: Ellipse,
  polygon: Polygon
};

export const TypeView = () => {
  const { type } = useTypeView();
  const TypeViews = TYPE_VIEWS[type];

  return (
    <>
      <Tabs />
      <TypeViews />
    </>
  );
};
