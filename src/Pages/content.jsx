import React from "react";
import Navbar from "../Components/Navbar";
import style from "../Styles/content.module.css"

const Content = () => {
  return (
    <div>
      <Navbar />
      <section className={style.contentBox}>
        <div className={style.leftContent}>
          <h1>Content</h1>
        </div>
        <div className={style.rightContent}>
          <div class={style.card}>
            <div class={style.content}>
              <p class={style.heading}>Brand Therapy Session</p>
              <p class={style.para}>
                Ready to take your web3 brand to the next level? Let's diagnose
                and prescribe the perfect strategy for success!
              </p>
              <a
                href="https://www.linkedin.com/in/samuelnssien/overlay/1635524905134/single-media-viewer?type=LINK&profileId=ACoAADTpanMBqLl1YYkNEWtv17-dEPv4jaSHwrw&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BUQQfNXbPSCqc6988mw7gIA%3D%3D"
                class={style.btn}
              >
                Read more
              </a>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.content}>
              <p class={style.heading}>Invisible PR</p>
              <p class={style.para}>
                Ever heard of Invisible PR? Well, you're at the right place.
                Let's jump in, cause I learnt about this about 2 days ago...
              </p>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7056884610860761088?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7056884610860761088%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BHxtWLPgiRAOZbUaM29OdUQ%3D%3D"
                class={style.btn}
              >
                Read more
              </a>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.content}>
              <p class={style.heading}>Brand Community</p>
              <p class={style.para}>
                The Importance Of Building A Brand Community For Your DeFi Or
                NFT Projects. Permit me to start by sharing the story...
              </p>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7055225967648079872?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7055225967648079872%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BUQQfNXbPSCqc6988mw7gIA%3D%3D"
                class={style.btn}
              >
                Read more
              </a>
            </div>
          </div>
          <div class={style.card}>
            <div class={style.content}>
              <p class={style.heading}>Dear Web3 Founder</p>
              <p class={style.para}>
                Marketing is a conversation not a monologue. Listen to your
                audience Understand their needs
              </p>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7061958047279005696?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7061958047279005696%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bqu0eYGF1R3OQbLdyr7RDQw%3D%3D"
                class={style.btn}
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
