import './App.css';
import logo from './logo.png';
import barra from './barra.png';
import { Collapse } from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse';
import { CloudArrowDown, mail , ArrowDownCircle, CloudDownload, Heart, ChatFill } from 'react-bootstrap-icons';
let url = "";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={barra} class="d-block w-150 barra" />
      <div class="container-sm text-white text-center px-4">
        <img src={logo} class="logo" />    
        <div class="container-sm text-white text-center px-4">
        <a
         href={url} class="btn btn-light button-download px-3 py-2">
          <h4 class="mb-0 text-dark">
                <ChatFill></ChatFill>
                <a href="https://www.instagram.com/_dias17y/" class="d-inline"> <em></em>Fale comigo</a>
            </h4>
         </a> <br>
         </br>
         <br>
         </br>
         <p class="width-350 mx-auto">Este projeto foi desenvolvido com o objetivo de: abrir portas e caminhos, neste projeto é contido os primeiros passos de programação para o aluno que deseja seguir a carreira de Ciências da Computação, Engenharia de Software, ou outros.</p>
         <p class="width-350 mx-auto mb-4">Devo adverter: <strong>essa não é uma documentação administradas por professores do Arnolfo Azevedo, 
            isto é um curso livre com todos os direitos reservados pelo autor, segundo a lei n. 9.610, de 19 de fevereiro de 1998
            </strong></p>

            <div class="card bg-light text-dark width-350 mx-auto"> 
            <div class="card-header mt-2">
                <h6>Evite frustrações lendo estes itens</h6>

            <a data-bs-toggle="collapse" href="#faq" class="fs-3 mt-0 collapsed" aria-expanded="false">
                  <ArrowDownCircle></ArrowDownCircle> 
              </a>
              
            <div class="card-body collapse" id="faq">
            <p class="card-text">Qualquer uso ou acesso indevido á documentação está sujeito a tomada de ações imediatas.</p>
            <p class="card-text">As apostilas e arquivos desta documentação são livres (gratuitos), eles não devem de hipotese alguma serem comercializados ou vendidos, o Arnolfo Azevedo não se responsabiliza.</p>
            <p class="card-text">O uso desta documentação não é garantido via qualquer tipo de pagamento. Poupe seu tempo ao tentar enviar uma proposta de uso paga.</p>
            <p class="card-text">O único/principal objetivo deste projeto é abrir portas/caminhos para alunos interessados em 
                    tecnologia e programação, esse é o primeiro passo.</p>
                    <h2>Baixe agora mesmo</h2>
                    <span>Ainda, os arquivos são liberados em nuvem (OneDrive), isso significa que você precisa baixa-los para poder
                      ver, ler, e praticar. Logo em breve, estaremos implementando uma plataforma para que
                      você não precise instalar nenhum arquivo para assistir ás aulas. 
                    </span>
                    <h2>Faça parte do projeto</h2>
                    <span>Você também pode fazer parte deste projeto, ele é só o começo de algo grande para os estudantes.
                      Se candidate como design, ou programador, ou até mesmo marketing (mesmo que você não tenha experiência: uma possibilidade
                      de você aprender durante as jantas da escola pode ser uma ideia tentadora)
                      Para falar comigo, basta clicar <a href="https://www.instagram.com/_dias17y/">aqui</a>
                    </span>
            <a href="" target="_blank" class="btn btn-light button-download px-3 py-2"> <br></br>
            
            <h4 class="mb-0 text-dark">
              <CloudDownload></CloudDownload>
                <a href="https://seducsp-my.sharepoint.com/:u:/g/personal/00001088944243sp_aluno_educacao_sp_gov_br/ERzghSwuse9Ksm_woBAgWHoB_lhqk8Vr_qEGwS1GLcHTcQ?e=r8Ctwr" class="d-inline"> Baixar arquivos</a>
                <br></br>
            </h4>
        </a>     
<br></br>
         </div>
         <br></br>
            </div>
          </div> 
          <br></br>
          </div>
          </div>
          
          <footer class="bg-light d-block mb-0 p-5 text-center text-dark">
          Todos os direitos reservados © 2022<br></br>
          


          <hr class="width-350 mx-auto"></hr>

          Feito com <em></em>
          <Heart> </Heart> <em></em>
          por <a href="https://www.instagram.com/_dias17y/" target="_blank">Gabriel Dias</a>
    </footer>
      </header>
    </div>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

export default App;
