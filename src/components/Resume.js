import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';
import Footer from './Footer';

import './Resume.css';

const Resume = () => {
  return (
    <div className="Resume">
      <Header startingNoun="credentials" />

      <section className="Resume__section">
        <h2>Conference Publications</h2>
        <h4>1. Zhengyang Qu, Guanyu Guo, Zhengyue Shao, Vaibhav Rastogi, Yan Chen, Hao Chen and Wangjun Hong, <a href="http://cs.northwestern.edu/~ychen/Papers/securecomm16.pdf">AppShield: Enabling Multi-entity Access Control Cross
            Platforms for Mobile App Management</a>, in the Proc. of <i>Securecomm</i> 2016 (32/137=23.3%).</h4>
        <h4>2. Vaibhav Rastogi, Zhengyang Qu, Jedidiah McClurg, Yinzhi Cao, and Yan Chen, <a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.700.9110&rep=rep1&type=pdf">Uranine: Real-time Privacy Leakage Monitoring without System Modification for Android</a>, in the Proc. of International Conference on Security
            and Privacy in Communication Networks (SECURECOMM), 2015 (30/108=28%)</h4>
        <h4>3. Zhengyang Qu, Vaibhav Rastogi, Xinyi Zhang, Yan Chen, Tiantian Zhu and Zhong Chen, <a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.700.7859&rep=rep1&type=pdf">AutoCog: Measuring the Description-to-permission Fidelity in Android Applications</a>, in the <i>Proc. of ACM CCS</i>, 2014
            (114/585=19.5%).</h4>
        <h4>4. Zhengyang Qu, Di Chen, Gaofei Sun, Xinbing Wang, Xiaohua Tian, Jing Liu, <a href="http://ieeexplore.ieee.org/abstract/document/6363753/">Efficient wireless sensor networks scheduling scheme: Game theoretic analysis and algorithm</a>, in the <i>Proc. of IEEE ICC</i>, 2012
            (1,043/2,819=37.0%).</h4>
        <h4>5. Zhengyang Qu, Shen Gu, Guannan Yang, Xinbing Wang, Xiaohua Tian, and Xiaoying Gan, <a href="http://ieeexplore.ieee.org/abstract/document/6134182/">A distributed relay selection algorithm using game on real-time Testbed</a>, in the <i>Proc. of IEEE GLOBECOM</i>, 2011
            (1,070/2,923=36.6%).</h4>
        <h2>Journal Publications</h2>
        <h4>1. Shahid Alam, Zhengyang Qu, Ryan Riley, Yan Chen, and Vaibhav Rastogi <a href="http://web.uvic.ca/~salam/papers/DroidNative-COSE-2016-personal-copy.pdf">DroidNative: Automating and optimizing detection of Android native code malware variants</a>, in Computers &amp; Security, 65, pp.230-246, 2017</h4>
        <h2>Patents</h2>
        <h4>1. Yan Chen, Vaibhav Rastogi, Zhengyang Qu, Jedidiah McClurg, System and Method for Privacy Leakage Detection and Prevention System without Operating System Modification, filed on February 5, 2015. U.S. Patent Application No. 14/615,254.</h4>
        <h4>2. Yan Chen, Zhengyang Qu, Vaibhav Rastogi, System and method for determining description-to-permission fidelity in mobile applications, filed on May 15, 2014. U.S. Patent Application No. 61/993,398.</h4>
      </section>

      {/*
      <section className="Resume__section">
        <h2>Download my Resume</h2>

        <a className="btn btn-large btn-info" href={`${process.env.PUBLIC_URL}/Resume_Zhengyang_Qu.pdf`} target="_blank">Resume_Zhengyang_Qu.pdf</a>
      </section>
      */}
      
      <Navigation />
      <Footer />
    </div>
  );
}

export default Resume;
