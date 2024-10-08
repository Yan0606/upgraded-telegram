import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Dashboard from './components/Dashboard';

import Insumos from './components/Insumos/Insumos';
import NovoInsumo from './components/Insumos/NovoInsumo';
import AlterarInsumo from './components/Insumos/AlterarInsumo';

import Safra from './components/Safra/safra';
import NovaSafra from './components/Safra/novaSafra';
import AlterarSafra from './components/Safra/alterarSafra';

import Talhoes from './components/Talhoes/Talhoes';
import AlterarTalhoes from './components/Talhoes/AlterarTalhoes';
import NovoTalhoes from './components/Talhoes/NovoTalhoes';

import Maquinas from './components/Maquinas/Maquinas';
import NovoMaquina from './components/Maquinas/NovoMaquina';
import AlterarMaquina from './components/Maquinas/AlterarMaquina';

import Cultura from './components/Cultura/Cultura';
import NovaCultura from './components/Cultura/NovoCultura';
import AlterarCultura from './components/Cultura/AlterarCultura';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/insumos" element={<Insumos />} />
        <Route path="/novo-insumo" element={<NovoInsumo />} />
        <Route path="/alterar-insumo/:id" element={<AlterarInsumo />} />

        <Route path="/safra" element={<Safra />} />
        <Route path="/nova-safra" element={<NovaSafra />} />
        <Route path="/alterar-safra/:id" element={<AlterarSafra />} />

        <Route path="/talhoes" element={<Talhoes />} />
        <Route path="/novo-talhoes" element={<NovoTalhoes />} />
        <Route path="/alterar-talhoes/:id" element={<AlterarTalhoes />} />

        <Route path="/maquinas" element={<Maquinas />} />
        <Route path="/nova-maquina" element={<NovoMaquina />} />
        <Route path="/alterar-maquina/:id" element={<AlterarMaquina />} />

        <Route path="/cultura" element={<Cultura />} />
        <Route path="/novo-cultura" element={<NovaCultura />} />
        <Route path="/alterar-cultura/:id" element={<AlterarCultura />} />


      </Routes>
    </Router>
  );  
}

export default App;


