import {
  DivPrin,
  DivConteiner,
  DivImagem,
  ImgCarrossel,
  Botoes,
  ConteinerBolinhas,
  Bola,
} from './styleCarrossel.js';
import grupo1 from '../../assets/imgCarrossel1.jpg';
import grupo2 from '../../assets/imgCarrossel2.jpg';
import grupo3 from '../../assets/imgCarrossel3.jpg';
import grupo4 from '../../assets/imgCarrossel4.jpg';
import grupo5 from '../../assets/imgCarrossel5.jpg';
import grupo6 from '../../assets/imgCarrossel6.jpg';

import bolaAcessa from '../../assets/bolaAceCarrossel.svg';
import bolaApagada from '../../assets/bolaApaCarrossel.svg';

import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';
import { useState, useEffect } from 'react';

function Carrossel() {
  const [imgCarrossel, setimgCarrossel] = useState(0);
  const [tamBotao, setTamBotao] = useState(40);

  function imagem(n) {
    const imagens = [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6];
    return imagens[n];
  }

  function proxCarrossel() {
    if (imgCarrossel < 5) {
      return imgCarrossel + 1;
    } else {
      return 0;
    }
  }
  function antCarrossel() {
    if (imgCarrossel > 0) {
      return imgCarrossel - 1;
    } else {
      return 5;
    }
  }

  function bolas(n) {
    if (n == imgCarrossel) {
      return bolaAcessa;
    } else {
      return bolaApagada;
    }
  }

  useEffect(() => {
    function botaoResize() {
      if (window.innerWidth < 795 && window.innerWidth > 610) {
        setTamBotao(30);
      } else if (window.innerWidth < 611) {
        setTamBotao(18);
      } else {
        setTamBotao(40);
      }
    }
    botaoResize();

    window.addEventListener('resize', botaoResize);

    return () => {
      window.removeEventListener('resize', botaoResize);
    };
  }, []);

  return (
    <div>
      <DivPrin>
        <DivConteiner>
          <Botoes onClick={() => setimgCarrossel(antCarrossel())}>
            <FiChevronLeft size={tamBotao} color="#FF0" />
          </Botoes>
          <DivImagem>
            <ImgCarrossel
              src={imagem(imgCarrossel)}
              alt="carrossel"
            ></ImgCarrossel>
          </DivImagem>
          <Botoes onClick={() => setimgCarrossel(proxCarrossel())}>
            <FiChevronRight size={tamBotao} color="#FF0" />
          </Botoes>
        </DivConteiner>
        <ConteinerBolinhas>
          <Bola>
            <img src={bolas(0)} alt="" />
          </Bola>
          <Bola>
            <img src={bolas(1)} alt="" />
          </Bola>
          <Bola>
            <img src={bolas(2)} alt="" />
          </Bola>
          <Bola>
            <img src={bolas(3)} alt="" />
          </Bola>
          <Bola>
            <img src={bolas(4)} alt="" />
          </Bola>
          <Bola>
            <img src={bolas(5)} alt="" />
          </Bola>
        </ConteinerBolinhas>
      </DivPrin>
    </div>
  );
}

export default Carrossel;
