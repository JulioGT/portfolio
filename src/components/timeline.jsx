import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lead Developer at Zac3Media <span>2017-present</span></h2>
                        <p>Design, develop and modify software systems in Node.js, Express, Mocha and MongoDB.</p>
                        <p>Implement third party API in our web sites to generate leads using PHP, HTML5, Bootstrap, Javascript, 
                          DWOO, AWS and google API.
                        </p>
                        <p>Incident and Problem Management with the support team in Spain and Netherlands and Israel for Natural Language Processing 
                          issues
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at Universidad de San Carlos de Guatemala<span>2017-2019</span></h2>
                        <p>Designed and built websites using PHP, HTML5, Bootstrap, MySQL, Javascript and Selenium.</p>
                        <p>Installed and configured web servers (Apache, Linux, SSL).</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Vertical Manager at Vantage Media<span>2012-2017</span></h2>
                        <p>Developed and supervised software development, system testing and validation procedures and documentation.</p>
                        <p>Led and managed software development life cycle phases with 15+ engineers distributed across 3 business units.
                        </p>
                        <p>Defined features, prioritized, clarified and translated requirements for development and QA teams and 
                          approved them before go live.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Systems Development Specialist <span>2009-2012</span></h2>
                        <p>Designed, analyzed, and developed applications in C# 2005/2008 and SQL server 2005/2008. </p>
                        <p>Trained and implemented software development best practices. </p>
                        <p>Supervised the projects previously delivered to the QA phase. </p>
                        <p>Promoted within 2 years due to performance impact.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
