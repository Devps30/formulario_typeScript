import type { NextPage } from 'next'
import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useQuery } from '@tanstack/react-query';
import './styles/sHome.css'

/* import useUser from '../auth/useUser'; */
//import api from '../http/api';

import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


interface SelectOption {
  value: string;
  label: string;
}

const fetchBeneficiarios = async () => {
  return  //api.get('/beneficiarios').then(r => r.data); 
}

const fetchAprobadores = async () => {
  return //api.get('/aprobadores').then(r => r.data);
}

const fetchCentroCostos = async () => {
  return //api.get('/centrocostos').then(r => r.data);
}

const fetchDependencias = async () => {
  return //api.get('/dependencias').then(r => r.data);
}

const fetchServicios = async () => {
  return //api.get('/servicios').then(r => r.data);
}

const fetchProveedores = async () => {
  return //api.get('/proveedores').then(r => r.data);
}

const Home = () => {
  //const user = useUser();
  const skills = ['HMTL','CSS','JS']
  /* const beneficiariosQuery = useQuery(['beneficiarios'], fetchBeneficiarios);
  const aprobadoresQuery = useQuery(['aprobadores'], fetchAprobadores);
  const centrocostosQuery = useQuery(['centrocostos'], fetchCentroCostos);
  const dependenciasQuery = useQuery(['dependencias'], fetchDependencias);
  const serviciosQuery = useQuery(['servicios'], fetchServicios);
  const proveedoresQuery = useQuery(['proveedores'], fetchProveedores); */

  const [centroCosto1, setCentroCosto1] = React.useState<SelectOption | null>(null);
  const [centroCosto2, setCentroCosto2] = React.useState<SelectOption | null>(null);
  const [centroCosto3, setCentroCosto3] = React.useState<SelectOption | null>(null);
  const [centroCosto4, setCentroCosto4] = React.useState<SelectOption | null>(null);

  const [cc1Percent, setCc1Percent] = React.useState<number>(0);
  const [cc2Percent, setCc2Percent] = React.useState<number>(0);
  const [cc3Percent, setCc3Percent] = React.useState<number>(0);
  const [cc4Percent, setCc4Percent] = React.useState<number>(0);

  const [totalValue, setTotalValue] = React.useState(0);

  const cc1Value = cc1Percent * totalValue / 100.0;
  const cc2Value = cc2Percent * totalValue / 100.0;
  const cc3Value = cc3Percent * totalValue / 100.0;
  const cc4Value = cc4Percent * totalValue / 100.0;

  const totalPercent = cc1Percent + cc2Percent + cc3Percent + cc4Percent;
  const totalFinalValue = cc1Value + cc2Value + cc3Value + cc4Value;

  return (
    <>
      <Grid container flexDirection="column" spacing={3}>
        <Grid className='titulo'  item xs={12}>
          Solicitud De Servicios SAS
        </Grid>
        <Grid className='infoElaboradoEstado'>
          <Grid item xs={5}>
            Elaborado por: {'Mi'}//user?.email
          </Grid>
          {/* quitar este estado */} 
          <Grid item xs={5}>
            Estado: ????
          </Grid>
          {/* quitar este estado */}
        </Grid>
        <Grid className='division'>
          <Grid className='contenedorCombox'>
            <Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={skills}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
            </Grid>
            <Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={skills}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
            </Grid>
            <Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={skills}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
            </Grid>
            <Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={skills}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
            </Grid>
            <Grid>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={skills}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
            </Grid>
          </Grid>
          <Grid className='informacionEscrita'>
            <Grid >
              <TextField label="Valor aprox" fullWidth value={totalValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTotalValue(Number(event.target.value));
              }} />
            </Grid>
            <Grid >
              <TextField label="Orden Int." fullWidth />
            </Grid>
            <Grid >
              <TextField label="Descipción del servicio" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
            <Grid >
              <TextField label="Justificación del servicio" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid className='tabla' item>
          <table align='center'>
            <thead>
              <th>Centro Costo</th>
              <th>Código</th>
              <th>%</th>
              <th>$</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={skills}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                  />
                </td>
                <td><TextField variant="standard" disabled={true} value={centroCosto1?.value ?? ''} /></td>
                <td><TextField variant="standard" value={cc1Percent} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCc1Percent(Number(event.target.value));
                }} /></td>
                <td><TextField variant="standard" disabled={true} value={cc1Value} /></td>
              </tr>
              <tr>
                <td>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={skills}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                  />
                </td>
                <td><TextField variant="standard" disabled={true} value={centroCosto2?.value ?? ''} /></td>
                <td><TextField variant="standard" value={cc2Percent} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCc2Percent(Number(event.target.value));
                }} /></td>
                <td><TextField variant="standard" disabled={true} value={cc2Value} /></td>
              </tr>
              <tr>
                <td>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={skills}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                  />
                </td>
                <td><TextField variant="standard" disabled={true} value={centroCosto3?.value ?? ''} /></td>
                <td><TextField variant="standard" value={cc3Percent} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCc3Percent(Number(event.target.value));
                }} /></td>
                <td><TextField variant="standard" disabled={true} value={cc3Value} /></td>
              </tr>
              <tr>
                <td>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={skills}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                  />
                </td>
                <td><TextField variant="standard" disabled={true} value={centroCosto4?.value ?? ''} /></td>
                <td><TextField variant="standard" value={cc4Percent} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCc4Percent(Number(event.target.value));
                }} /></td>
                <td><TextField variant="standard" disabled={true} value={cc4Value} /></td>
              </tr>
              <tr>
                <td colSpan={2} align='right' className='total'>
                  Total:
                </td>
                <td>
                  <TextField value={totalPercent} disabled={true} />
                </td>
                <td>
                  <TextField value={totalFinalValue} disabled={true} />
                </td>
              </tr>
            </tbody>
          </table>
          <Grid className='botones'>
            <Button variant="outlined" color="primary" >Guardar</Button>
            <Button variant="outlined" color="warning">Limpiar</Button>
          </Grid>      
        </Grid>
      </Grid> 
    </>
  );
}

export default Home;