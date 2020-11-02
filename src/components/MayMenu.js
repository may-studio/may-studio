import React from "react";

import logo from "../pics/logo.png";

import ModalHtml from "./ModalHtml";

class MayMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [
        {
          background:
            "https://64.media.tumblr.com/f86399c4d8533f87504ab1e8869f7722/1898b4db09c8e9a5-b6/s540x810/80997a04b51bcd1885e25488ee7b14ee9be56bd6.gifv",
          text: "В этом обсуждении вы можете оставить свой отзыв о нас и наших продуктах.",
          title: "Отзывы",
          url: "https://vk.com/topic-199824380_46617814",
        },
      ],

      currentModal: "",

      aboutModal: {
        title: "О нас",
        text: `
          Разрабатываем приложения. 
        `,
      },
      devModal: {
        title: "Разработка",
        text: `
          О разработке. 
        `,
      },
      supportModal: {
        title: "Поддержка",
        text: `
          Поддержка и обновление приложений.
        `,
      }
    };

    this.getChats = this.getChats.bind(this);
    this.getModalData = this.getModalData.bind(this);
  }

  getChats() {
    let chats = this.state.chats;
    let response = [];

    response = chats.map((chat) => {
      return (
        <div
          className="chatView"
          key={chat.title}
          style={{
            background: `url(${chat.background}) center/100% no-repeat`,
          }}
        >
          <div className="picBlackout">
            <div className="chatTitle">{chat.title}</div>
            <div className="chatText">{chat.text}</div>
            <button className="chatComeInBtn">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={chat.url}
              >
                перейти
              </a>
            </button>
          </div>
        </div>
      );
    });

    return response;
  }

  getModalData(modal) {
    this.setState((state) => {
      return {
        currentModal: state[modal],
      };
    });
  }

  render() {
    let chats = this.getChats();
    let modal = this.state.currentModal;

    return (
      <div>
        
        <ModalHtml content={modal} />

        <img
          className="background"
          src="https://images.wallpaperscraft.ru/image/oblaka_poristyj_nebo_125791_3840x2400.jpg"
          alt="background"
        />
        
        <div className="wrapper">
          <div className="headerLineTop"></div>
          <div className="headerLineBot">
            <div className="btnInfo">заказать</div>
          </div>
          <div className="header">
            <a className="linkStyle" href="https://vk.com/warmay_studio">
              <img id="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div className="body">
            <div className="pageHint" id="Home">
              меню студии
            </div>
            <div className="row mt-4 mb-2">
              <div className="col">
                <div
                  className="icon"
                  data-toggle="modal"
                  data-target="#ModalHtml"
                  onClick={(e) => this.getModalData("aboutModal")}
                >
                  <i className="fas fa-info-circle"></i>
                  <span className="iconTitle">о нас</span>
                </div>
              </div>
              <div className="col">
                <div
                  className="icon"
                >
                  <i class="far fa-window-restore"></i>
                  <span className="iconTitle">продукты</span>
                </div>
              </div>
              <div className="col">
                <a
                  href="https://vk.com/im?sel=-199824380"
                  className="linkStyle"
                >
                  <div className="icon">
                    <i className="fas fa-feather-alt"></i>
                    <span className="iconTitle">написать</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="row mt-3 mb-2">
              <div className="col">
                <div
                  className="icon"
                  data-toggle="modal"
                  data-target="#ModalHtml"
                  onClick={(e) => this.getModalData("devModal")}
                >
                  <i className="fas fa-info-circle"></i>
                  <span className="iconTitle">разработка</span>
                </div>
              </div>
              <div className="col">
                <div
                  className="icon"
                  data-toggle="modal"
                  data-target="#ModalHtml"
                  onClick={(e) => this.getModalData("supportModal")}
                >
                  <i class="fas fa-cog"></i>
                  <span className="iconTitle">поддержка</span>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="btnsTitle">Обсуждения</div>
            {chats}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default MayMenu;
