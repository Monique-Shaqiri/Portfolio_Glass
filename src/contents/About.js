import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Monique <mark className="mark2">Shaqiri</mark></h2>
            <p>Frontend Developer</p>
            <br></br>
            <p className="p10">I started my journey in the world of computers 2018,
            now I’m 45 years old,.  Web development and App Development is my center of interest, i always
            love the idea of cross-platform development, 1-n one code base deploy into almost
            any platform, which web technology like Javascript enables me to do. I also like
            creating Interactive UI components for better UX  and share those design and codes
            to the world through Github and Instagram.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>Online Courses</h4>
            <p className="p1">Udemy</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>May 2018 - 2022</p>
            <h4>High School</h4>
            <p className="p1">Germany</p>
            <p className="p1"><i class="fa fa-calendar i2"></i></p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Node</div>
            <div class="sk s6 glass">SwiftUI</div>
            </div>
            )
        }
    }
    
export default About
    