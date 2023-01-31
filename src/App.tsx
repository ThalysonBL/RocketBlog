import { Header } from "./components/Header";

import {
  Container,
  SectionOne,
  TitleOne,
  SubscriptionOne,
  ContentLeft,
  ImgOne,
  TitleLink,
  SetaLink,
  SectionTwo,
  ContentTwo,
  CaixaNotice,
  ImgTwo,
  DataNotice,
  TitleNotice,
  SubscriptionNotice,
  ContentRightBox,
  LastTwo,
} from "../styles/app.ts";

import Seta from "./assets/arrow-right.svg";
import ImageOne from "./assets/featured-image.png";
import ImageTwo from "./assets/post-1.png";

import noticeLastOne from "./assets/post-2.png";
import noticeLastTwo from "./assets/post-3.png";
import noticeLastThree from "./assets/post-4.png";

function App() {
  const notices = [
    {
      id: 1,
      imageNotice: noticeLastOne,
      DataNotice: "Janeiro 04, 2023",
      titleNotice: "10 dicas para conseguir a vaga desejada",
      subscriptionNotice:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. ",
    },
    {
      id: 2,
      imageNotice: noticeLastTwo,
      DataNotice: "Janeiro 04, 2023",
      titleNotice: "Deixe seu código mais semântico com essas dicas",
      subscriptionNotice:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
    {
      id: 3,
      imageNotice: noticeLastThree,
      DataNotice: "Janeiro 04, 2023",
      titleNotice: "Use essas dicas nas suas aplicações mobile",
      subscriptionNotice:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
  ];
  return (
    <Container>
      <Header />
      <SectionOne>
        <ContentLeft>
          <TitleOne>
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2023
          </TitleOne>
          <SubscriptionOne>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.
          </SubscriptionOne>
          <TitleLink href="" style={{textDecoration: 'none'}}>
            Veja mais
            <SetaLink src={Seta} />
          </TitleLink>
        </ContentLeft>
        <ImgOne src={ImageOne} />
      </SectionOne>
      <SectionTwo>
        <ContentTwo>
          <CaixaNotice>
            <ImgTwo src={ImageTwo} />
            <DataNotice>Janeiro 04, 2023</DataNotice>
            <TitleNotice>Começando no ReactJS em 2023</TitleNotice>
            <SubscriptionNotice>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed
              volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
            </SubscriptionNotice>
          </CaixaNotice>
          <ContentRightBox >
            <DataNotice >Janeiro 04, 2023</DataNotice>
            <TitleNotice>
              Conheça as principais técnicas para conseguir uma vaga
              internacional em programação
            </TitleNotice>
            <SubscriptionNotice
              style={{
                borderBottom: "3px solid #F2E7FA",
                paddingBottom: "30px",
                marginBottom: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.
            </SubscriptionNotice>
            <DataNotice>Janeiro 04, 2023</DataNotice>
            <TitleNotice>Veja a evolução do Front-end na prática</TitleNotice>
            <SubscriptionNotice>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque.
            </SubscriptionNotice>
          </ContentRightBox>
        </ContentTwo>
        <LastTwo>
          {notices.map((notices) => {
            return (
              <div key={notices.id} >
                <img src={notices.imageNotice} alt="" />
                <DataNotice>{notices.DataNotice}</DataNotice>
                <TitleNotice style={{width: '370px'}}>{notices.titleNotice} </TitleNotice>
                <SubscriptionNotice style={{width: '370px'}}>
                  {notices.subscriptionNotice}
                </SubscriptionNotice>
              </div>
            );
          })}
        </LastTwo>
      </SectionTwo>
    </Container>
  );
}

export default App;
