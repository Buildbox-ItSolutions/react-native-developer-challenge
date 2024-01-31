import React from 'react';
import { SafeAreaView } from 'react-native';
import 'moment/locale/pt-br'
import Routes from './routes';
import { ContextsProvider } from './contexts/Contexts';


function App(): React.JSX.Element {

  return (
    <SafeAreaView className='bg-black h-full'>
      <ContextsProvider>
        <Routes />
      </ContextsProvider>
    </SafeAreaView>
  );
}


export default App;
