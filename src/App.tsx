import * as React from 'react';
import './App.css';
import Home from './components/Home';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const fetchBeneficiarios = async () => {
  return  //api.get('/beneficiarios').then(r => r.data); 
}

const queryClient = new QueryClient()

function App(): JSX.Element{
  const skills = ['HMTL','CSS','JS']
  //const beneficiariosQuery = useQuery(['beneficiarios'], fetchBeneficiarios);

  return (
    <Home />
  );
}

export default App;
