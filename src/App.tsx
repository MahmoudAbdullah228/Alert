import './App.css';
import Alert from './Components/UI/Alert';
import { CircleX, Info, CheckCheck, TriangleAlert, BellRing } from 'lucide-react';

const App = () => {
  return (
    <>
      <Alert
        type={'default'}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi explicabo hic labore. Deleniti, libero repellat dolores enim officia, obcaecati vitae sit placeat tenetur vel aliquam voluptatum facilis esse necessitatibus."
        icon={<BellRing />}
        title={'Upgrade your plan'}
      />

      <Alert type={'Info'} icon={<Info />} title={'Note'}>
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi explicabo hic
          labore.
          <a href=""> Deleniti</a>, libero repellat dolores enim officia, obcaecati vitae sit
          placeat tenetur vel aliquam <b>voluptatum</b> facilis esse necessitatibus.
        </span>
      </Alert>

      <Alert
        type={'Success'}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi explicabo hic labore. Deleniti, libero repellat dolores enim officia, obcaecati vitae sit placeat tenetur vel aliquam voluptatum facilis esse necessitatibus."
        icon={<CheckCheck />}
        title={'Your order has been processed'}
      />

      <Alert type={'error'} icon={<CircleX />} title={'Something went wrong'}>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus esse et quas corrupti
          debitis iure <code>voluptatum</code> quam, minima blanditiis perferendis animi ipsum
          corporis deleniti unde odio quod nisi alias dolorem?
        </p>
      </Alert>

      <Alert
        type={'Warning'}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi explicabo hic labore. Deleniti, libero repellat dolores enim officia, obcaecati vitae sit placeat tenetur vel aliquam voluptatum facilis esse necessitatibus."
        icon={<TriangleAlert />}
        title={'Tips & Tricks'}
      />
    </>
  );
};

export default App;
