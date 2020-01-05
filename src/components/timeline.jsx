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
                        <ul>
                          <li>Implement third party APIs in our web sites to generate high quality leads using PHP, HTML5, Bootstrap, Javascript and AWS</li>
                          <li>Lead the development team located in Israel using Laravel or DWOO as template management. </li>
                          <li>Define strategic operations and general management such as Incident and Problem Management with the support team located in Spain and Netherlands.</li>
                          <li>Set up and maintain our virtual call center to increase the quality of the acquired leads through Natural Language Processing.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at Universidad de San Carlos de Guatemala <span>2017-2019</span></h2>
                        <ul>
                          <li>Designed and built websites using PHP, HTML5, Bootstrap, MySQL, Javascript and Selenium.</li>
                          <li>Monitor the regular operation of our site.</li>
                          <li>Installed and configured web servers (Apache, Linux, SSL).</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Vertical Manager at Vantage Media <span>2012-2017</span></h2>
                        <ul>
                        <li>Developed and supervised software development, system testing and validation procedures and documentation.</li>
                        <li>Led and managed software development life cycle phases with 15+ engineers distributed across 3 business units.</li>
                          <li>Defined features, prioritized, clarified and translated requirements for development and QA teams and approved them before go live.</li>
                          <li>Work closely with Product Managers, Business Stakeholders, Engineers and UX Designers to bring best-in-class experiences to life. </li>
                          <li>Define features, set priorities, clarify and translate requirements for development and QA teams to deliver high quality projects on-time and on-scope.</li>
                          <li>Define strategic operations and general management such as Incident Management, Problem Management and Project management.</li>
                          <li>Elaborate status reports to Business team located in the United States. </li>
                          <li>Communicate technical, political, and any other issues by monitoring our systems with automated alerts.</li>
                        </ul>
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
                        <ul>
                          <li>Designed, analyzed, and developed applications in C# 2005/2008 and SQL server 2005/2008. </li>
                          <li>Trained and implemented software development best practices. </li>
                          <li>Supervised the projects previously delivered to the QA phase. </li>
                          <li>Promoted within 2 years due to performance impact.</li>
                          <li>Developed reports in ASPX and Reporting Services, improving existing applications and reports. </li>
                          <li>Improved existent applications.</li>
                          <li>Elaborated weekly status reports and tasks for follow up distributed between 5 team members.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article class="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-none">
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
