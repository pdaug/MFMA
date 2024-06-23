import { ArrowDown, Barcode, CreditCard, FireSimple, InstagramLogo, PixLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";

import "./App.css";

import Module from "./components/Module";
import AssetsModule from "./assets/Module";

import Extra from "./components/Extra";
import AssetsExtra from "./assets/Extra";

import Deposition from "./components/Deposition";
import AssetsDepositions from "./assets/Depositions";

import Rating from "./components/Rating";
import AssetsRating from "./assets/Rating";

const App = function () {
  return (
    <div className="h-screen w-screen overflow-y-scroll">

      <div className="flex flex-col min-h-[90vh] items-center gradient-hero gap-8 py-12" id="home">

        <div className="w-[80vw] flex md:flex-row flex-col gap-8">
          <div className="md:flex hidden gap-6 items-center justify-center flex-1">
            <a className="hover:text-blue-text text-blue-mind cursor-pointer select-none transition-all" href="#module"> Módulos </a>
            <a className="hover:text-blue-text text-blue-mind cursor-pointer select-none transition-all" href="#extra"> Extras </a>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <img src="/icon.png" alt="icone" className="h-32 w-32" />
            <div className="text-3xl leading-none font-bold text-blue-mind select-none"> MAIS FOCO </div>
            <div className="text-md leading-none text-green-moss select-none"> MENOS ANSIEDADE </div>
          </div>
          <div className="md:flex hidden gap-6  items-center justify-center flex-1">
            <a className="hover:text-blue-text text-blue-mind cursor-pointer select-none transition-all" href="#rating"> Avaliações </a>
            <a className="hover:text-blue-text text-blue-mind cursor-pointer select-none transition-all" href="#about"> Sobre </a>
          </div>
        </div>

        <div className="flex-1 flex md:flex-row flex-col items-center w-[80vw] gap-8">
          <div className="flex-1 flex flex-col gap-8">
            <div> Descubra o Segredo para ter: </div>
            <div className="text-4xl leading-none font-bold text-blue-text"> Mais foco menos ansiedade! </div>
            <div className="flex flex-col gap-4 text-blue-text">
              <p> Assista ao Vídeo Agora e veja como nosso método revolucionário transformou a vida de mais de 800 pessoas! Imagine sentir mais foco e menos ansiedade já na primeira semana. </p>
              <p> Quer saber como? Clique no vídeo e descubra os benefícios que você também pode alcançar! </p>
            </div>
            <div className="text-xs opacity-40"> O curso "Mais Foco, Menos Ansiedade" tem caráter informativo e não substitui uma consulta médica ou ajuda psicológica. </div>
            <div className="flex gap-6 md:justify-start justify-center">
              <a className="bg-cyan-500 text-white text-xl px-16 p-4 rounded-xl transition-all hover:opacity-80 select-none" href="#subscription"> Fazer Inscrição </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex md:w-[640px] md:h-[360px] md:aspect-video h-64 rounded-xl overflow-hidden">
              <iframe
                title="YouTube video player"
                className="border-none flex-1"
                src="https://www.youtube-nocookie.com/embed/DKbHETqgSxg?si=Wy3O8FyKIXUByx5Q"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              >
              </iframe>
            </div>
          </div>
        </div>

      </div>


      <div className="flex flex-col items-center py-12" id="module">
        <div className="w-[80vw] flex flex-col items-center text-center gap-8">
          <ArrowDown size={32} className="animate-bounce text-blue-mind" weight="bold" />
          <div className="text-blue-mind flex flex-col"> Módulos </div>
          <div className="text-blue-text font-bold text-3xl flex flex-col">
            <span> Conheça todos os módulos </span>
            <span> e conteúdos do curso </span>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {
              AssetsModule.map(function (props) {
                return (
                  <Module {...props} />
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-12" id="extra">
        <div className="w-[80vw] flex flex-col items-center text-center gap-8">
          <div className="text-blue-mind flex flex-col"> Extra </div>
          <div className="text-blue-text font-bold text-3xl flex flex-col">
            <span> Veja o que mais </span>
            <span> está incluso </span>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
            {
              AssetsExtra.map(function (props) {
                return (
                  <Extra {...props} />
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="gradient-footer flex flex-col items-center py-12" id="subscription">
        <div className="md:w-[480px] w-[80vw] flex flex-col items-center text-center gap-8">
          <div className="text-green-lime"> Inscrição </div>
          <div className="font-bold text-4xl text-white"> Garantimos 7 dias gratuitos para teste! </div>
          <div className="text-white opacity-80 text-justify text-sm"> Você tem direito a uma garantia incondicional de 7 dias no M.F.M.A. (Mais Foco Menos Ansiedade), e caso sinta que não é para você, basta pedir reembolso que devolvemos todo o seu investimento. </div>
          <div className="bg-white w-full p-4 flex flex-col gap-4 rounded-md">
            <div className="flex items-center justify-center">
              <img src="/icon.png" alt="icone" className="h-32 w-32" />
              <div className="flex flex-col">
                <div className="text-3xl leading-none font-bold text-blue-mind select-none"> MAIS FOCO </div>
                <div className="text-md leading-none text-green-moss select-none"> MENOS ANSIEDADE </div>
              </div>
            </div>
            <div className="font-bold text-xl text-red-300 line-through"> de R$ 399,00 </div>
            <div className="font-bold text-4xl text-blue-text"> por R$ 297,00 </div>
            <div className="text-blue-mind"> em 12x de R$ 29,64 * no cartão </div>
            <div className="flex justify-center gap-4 text-blue-mind">
              <CreditCard size={32} />
              <Barcode size={32} />
              <PixLogo size={32} />
              <FireSimple size={32} />
            </div>
            <a className="px-12 py-4 font-bold bg-cyan-500 rounded-md text-white hover:opacity-80 transition-all select-none" target="_blank" href="https://hotmart.com/pt-br/marketplace/produtos/mais-foco-menos-ansiedade/E78281999I"> Fazer inscrição </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-12" id="rating">
        <div className="w-[80vw] flex flex-col items-center text-center gap-8">
          <div className="text-blue-mind flex flex-col"> Avaliações </div>
          <div className="text-blue-text font-bold text-3xl flex flex-col">
            <span> Assista os depoimentos </span>
            <span> de outros alunos </span>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {
              AssetsDepositions.map(function (props) {
                return (
                  <Deposition {...props} />
                )
              })
            }
          </div>
          <div className="text-blue-mind flex flex-col"> Outra Avaliações </div>
          <div className="text-blue-text font-bold text-3xl flex flex-col">
            <span> Comentários de </span>
            <span> nossos alunos pela internet </span>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            {
              AssetsRating.map(function (props) {
                return (
                  <Rating {...props} />
                );
              })
            }
          </div>
        </div>
      </div>

      <div className="gradient-footer flex flex-col items-center py-12" id="about">
        <div className="md:w-[480px] w-[80vw] flex flex-col gap-8">
          <div className="text-green-life text-center"> Sobre </div>
          <img src="/media/photo.jpg" alt="foto" className="rounded-full w-32 h-32 object-cover mx-auto" />
          <div className="flex flex-col gap-2">
            <div className="text-white text-4xl font-bold"> Olá! </div>
            <div className="text-white text-2xl font-bold"> Aqui é o Rafael Grattapaglia </div>
          </div>
          <div className="text-white opacity-80 text-justify flex flex-col gap-2 text-sm">
            <p> Graduado em Engenharia Civil pela Universidade de Brasília e estudante do 5° ano de medicina, tive a oportunidade de estudar por um ano na Universidade da Califórnia em Berkeley pelo programa Ciências sem Fronteiras, onde cursei disciplinas de neurociências e de psicologia, além das de engenharia do currículo obrigatório. </p>
            <p> Desde então, venho aplicando ferramentas de neurociências no meu dia a dia, buscando melhor qualidade de vida e saúde mental. O intuito deste material é compartilhar o que aprendi e venho aplicando, sempre de maneira cientificamente embasada. </p>
          </div>
          <div className="flex gap-8 justify-center text-green-lime">
            <a href="https://www.tiktok.com/@rafaelgrattap">
              <TiktokLogo size={64} weight="fill" />
            </a>
            <a href="https://www.instagram.com/rafaelgratta/">
              <InstagramLogo size={64} weight="fill" />
            </a>
            <a href="https://www.youtube.com/@rafaelgratta">
              <YoutubeLogo size={64} weight="fill" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between gap-2 p-4 bg-blue-mind text-sm">
        <div className="text-white"> &copy; 2024 Rafael Grattapaglia. Todos os direitos reservados </div>
        <a target="_blank" className="text-green-lime" href="https://github.com/pdaug"> codado por pdaug</a>
      </div>

    </div>
  );
};

export default App;
