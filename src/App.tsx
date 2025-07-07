import RootProvider from './context';
import RootRouter from './routers';
import RootLayout from './components/layout';

const App = () => {
  return (
    <RootProvider>
      <RootLayout>
        <RootRouter />
      </RootLayout>
    </RootProvider>
  );
};

export default App;
