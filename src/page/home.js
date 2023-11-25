import React from "react";
import './index.css';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meonclick1: 0,
      meonclick2: false,

    }
  }
  componentDidMount() {

  }
  num = 0;
  me = () => {
    let me = this;
    if (this.num >= 16) {
      this.num = 0;
    } else {
      this.num++;
    }
    this.setState({
      meonclick1: me.num
    })
  }

  render() {
    let meonclick = this.state.meonclick1;
    return <div className="box">
      <div className="newbox" style={{ display: meonclick == 0 ? 'block' : 'none', animation: meonclick == 1 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="me" onClick={() => this.me()}>开始旅程</div>
      </div>
      <div className="newbox" style={{ display: meonclick == 1 ? 'block' : 'none', animation: meonclick == 1 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 2 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="see" onClick={() => this.me()}></div>
        <div className="val">
          相识于2023年10月9日晚10点， 第一次聊天。😘😘
          {/* 相识于2023年10月9日晚10点， 初次聊天话不多，感觉有点不自信。
          <br />没事，宝儿以后我是你的夸夸群群主，你就是最好看的。😘😘 */}
        </div>
      </div>
      <div className="newbox" style={{ display: meonclick == 2 ? 'block' : 'none', animation: meonclick == 2 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 3 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className={`${'see'} ${'url3'}`} onClick={() => this.me()}></div>
        <div className="val">
          第一次交换照片。 这是我。
        </div>
      </div>
      <div className="newbox" style={{ display: meonclick == 3 ? 'block' : 'none', animation: meonclick == 3 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 4 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className={`${'see'} ${'url4'}`} onClick={() => this.me()}></div>
        <div className="val">
          这是你。
        </div>
      </div>
      <div className="newbox" style={{ display: meonclick == 4 ? 'block' : 'none', animation: meonclick == 4 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 5 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className={`${'see'} ${'url2'}`} onClick={() => this.me()}></div>
        <div className="val">
          2023年10月11日晚9点，第一次语音通话。开始幻想见面时的场景。
        </div>
      </div>

      <div className="newbox" style={{ display: meonclick == 5 ? 'block' : 'none', animation: meonclick == 5 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 6 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '650px' }}>
          见面啦！<br />好家伙第一次见面，拉着你爬了个山 😓
        </div>
        <div className={`${'see'} ${'url6'}`} onClick={() => this.me()}></div>
      </div>

      <div className="newbox" style={{ display: meonclick == 6 ? 'block' : 'none', animation: meonclick == 6 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 7 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '650px' }}>
          第一次吃火锅，话不多，文静内敛，吃完溜达结束，九点安全送到。
        </div>
        <div className={`${'see'} ${'url5'}`} onClick={() => this.me()}></div>
      </div>

      <div className="newbox" style={{ display: meonclick == 7 ? 'block' : 'none', animation: meonclick == 7 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 8 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '50px' }}>
          你开始一周多的旅行，去了四川，看了熊猫、去了黄龙、去了都江堰，我在北京想你。
        </div>
        <div className={`${'see'} ${'url7'}`} onClick={() => this.me()}></div>
      </div>

      <div className="newbox" style={{ display: meonclick == 8 ? 'block' : 'none', animation: meonclick == 8 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 9 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '50px' }}>
          去考试，很烦，见你的时间又延了一周。带你云旅游哈尔滨。
        </div>
        <div className={`${'see'} ${'url8'}`} onClick={() => this.me()}></div>
      </div>
      <div className="newbox" style={{ display: meonclick == 9 ? 'block' : 'none', animation: meonclick == 9 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 10 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '50px' }}>
          一开始想买玩偶，太聪明了宝儿，一下就猜到了。😭 给你买了两个帽子，一个外出带，一个室内带，别想冻到我宝儿。
        </div>
        <div className={`${'see'} ${'url9'}`} onClick={() => this.me()}></div>
      </div>
      <div className="newbox" style={{ display: meonclick == 10 ? 'block' : 'none', animation: meonclick == 10 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 11 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '50px' }}>
          第二次见面，吃了烤肉，第一次带你看了电影，可惜没拍照片。时间还长，以后多拍照片补上。还是好内敛，希望宝儿以后再开朗一点。
        </div>
        <div className={`${'see'} ${'url10'}`} onClick={() => this.me()}></div>
      </div>
      <div className="newbox" style={{ display: meonclick == 11 ? 'block' : 'none', animation: meonclick == 11 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 12 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '50px' }}>
          6号突然要我地址， 开心。
        </div>
        <div className={`${'see'} ${'url11'}`} onClick={() => this.me()}></div>
      </div>
      <div className="newbox" style={{ display: meonclick == 12 ? 'block' : 'none', animation: meonclick == 12 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 13 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '50px' }}>
          之前你说过很想吃记忆中的肉夹馍，没买到，很烦。
        </div>
        <div className={`${'see'} ${'url12'}`} onClick={() => this.me()}></div>
      </div>
      <div className="newbox" style={{ display: meonclick == 13 ? 'block' : 'none', animation: meonclick == 13 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 14 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '50px' }}>
          第三次见面，第一次带你去唱歌，不得不说，很好听，摸着良心发的誓。去吃了火锅，看了电影，时间过的真快，不知不觉就到了分别的时间了。想你，分开的每分每秒都在想。
        </div>
        <div className={`${'see'} ${'url13'}`} onClick={() => this.me()}></div>
      </div>

      <div className="newbox" style={{ display: meonclick == 14 ? 'block' : 'none', animation: meonclick == 14 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 15 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" >
          果然，宝儿买的东西是最好的。
        </div>
        <div className={`${'see'} ${'url14'}`} onClick={() => this.me()}></div>
      </div>

      <div className="newbox" style={{ display: meonclick == 15 ? 'block' : 'none', animation: meonclick == 15 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 16 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '500px' }} onClick={() => this.me()}>
         
          希望以后还有更多关于你的回忆，希望下次见面你会看到这个视频，希望下一次拍照照片里会有我们。
     
        </div>
      </div>
      <div className="newbox" style={{ display: meonclick == 16 ? 'block' : 'none', animation: meonclick == 16 ? '0.5s linear 0s 1 normal forwards running zhuanquazn2' : meonclick == 17 ? '0.5s linear 0s 1 normal forwards running zhuanquazn' : 'none' }}>
        <div className="val" style={{ bottom: '500px' }}>
        
          我想认真谈场恋爱，从你开始，没有结束。
        </div>
      </div>
    </div>
  }

}