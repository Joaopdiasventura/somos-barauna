import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h1>SOMOS BARAUNA</h1>
      </nav>
      <div className="cont">
        <div className="conteudo">
          <p className="legenda">
            O projeto "Somos Barauna" é uma equipe de jiu-jitsu sem fins
            lucrativos criada pelo doutor Barauna, onde o intuito é trazer mais
            diversidade nas artes marcias na comunidade e melhorar a qualidade
            de vida dos moradores. <br />O prjeto conta com aulas noturnas em
            dia de semana para os alunos mais velhos e os acompanha os menores
            de idade até perto de suas residencias visando a segurança dos
            alunos, durante os sabádos o primeiro treino é feito para crianças
            pequenas seguido por um treino exclusivo para as atlletas e para
            encerrar um treino para os alunos mais velhos.
          </p>
          <img src="time.jpg" className="time" />
        </div>
        <div className="conteudo">
          <p className="legenda">
            As aulas começam com um aquecimento preparativo e adptado para cada
            treino sendo ministrados pelos faixas pretas e roxas da equipe. Os
            treinos são realizados com o maior cuidado possivel observando cada
            movimento com os alunos e as lutas-treino, ou rola comunmente
            chamado, são realizadas apenas com pessoas de peso semelhantes para
            evitar possiveis acidentes. Os treinos desenvolvem auto controle,
            respeito tanto próprio quanto mutuo, força e auto defesa, tendo
            todas essas qualidades pelo convivio
            <br />A equipe participa de campeonatos mostrando a variedade de
            estilos entre os competidores e realiza eventos e festas como dia
            das crianças para as familias dos alunos e professores
          </p>
          <img src="time.jpeg" className="time" />
        </div>
      </div>
      <footer>
        <div>
          <p>
            Rua das Variações musicais 100 | Ajude o projeto (pix): 11992508098
          </p>
        </div>
        <div>
          <p></p>
          <p>Autodefesa-Submissão-Altruísmo</p>
          <p></p>
        </div>
      </footer>
    </>
  );
}

export default App;
