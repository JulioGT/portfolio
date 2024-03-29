import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">
                Education
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <div className="fancy-collapse-panel">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                          className="collapsed"
                        >
                          Master Degree in Strategic Direction in Software
                          Engineering
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                      aria-expanded="false"
                      style={{ height: "0px" }}
                    >
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-12">
                            <p>
                              Universidad Europea del Atlántico. - In progress
                            </p>
                            <ul>
                              <li>
                                Management of a department, area, function,
                                etc., of systems or new technologies.
                              </li>
                              <li>Director of technology business projects.</li>
                              <li>
                                Director of business projects based on
                                technologies.
                              </li>
                              <li>
                                External advisor or business consultant in
                                change strategies based on NTIC.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Bachelor Degree in Software Engineering
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <p>Universidad de San Carlos de Guatemala</p>
                        <ul>
                          <li>
                            <strong>Problem solving:</strong> holistic view of
                            the problems considering all the elements involved,
                            using a systematic approach.
                          </li>
                          <li>
                            <strong>Generalization:</strong> Ability to
                            generalize solutions and learn from their
                            experience.
                          </li>
                          <li>
                            <strong>Interpersonal relationships:</strong> to
                            persuade business, teamwork, present a project with
                            clarity and precision, and work under pressure.
                          </li>
                          <li>
                            <strong>Resource Management:</strong> Achieving
                            results, consensus of actions around the plans to
                            carry out a rational decision-making process.
                          </li>
                          <li>
                            <strong>Abstraction:</strong> Ability to model and
                            interpret abstract variables.
                          </li>
                          <li>
                            <strong>Self-learning:</strong> Knowing what to look
                            for, how to look, where to look, how to search and
                            when the need arises for new learning.
                          </li>
                          <li>
                            <strong>Analysis and Synthesis:</strong> Skill
                            management useful tools for the needs you have and
                            synthesize the most important factors for
                            consideration.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          DevOps Certification Training
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <strong style={{ color: "#2c98f0" }}>Edureka</strong>
                        <p>
                          DevOps course will provide you the in-depth knowledge
                          of various DevOps tools including Git, Jenkins,
                          Docker, Ansible, Puppet, Kubernetes and Nagios.{" "}
                        </p>
                        <p>
                          This training is completely hands-on oriented and
                          designed in a way to help you become a certified
                          practitioner by providing the best practices about
                          Continuous Development, Continuous Testing,
                          Configuration Management, and Continuous Integration
                          and finally Continuous Monitoring of the software
                          throughout its development life cycle.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          AWS Training
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <strong style={{ color: "#2c98f0" }}>
                          trambo.cloud
                        </strong>
                        <ul>
                          <li>Cloud formation</li>
                          <li>VPC</li>
                          <li>S3</li>
                          <li>EC2</li>
                          <li>IAM Roles</li>
                          <li>Docker</li>
                          <li>ECR</li>
                          <li>ECS</li>
                          <li>Load Balancer</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="docker">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseDocker"
                          aria-expanded="false"
                          aria-controls="collapseDocker"
                        >
                          Docker Course
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseDocker"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="docker"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <strong style={{ color: "#2c98f0" }}>
                          Coursera
                        </strong>
                        <ul>
                          <li>Containerize a full-stack NodeJS application in Docker</li>
                          <li>Certificate ID:<a href="https://www.coursera.org/account/accomplishments/certificate/D26QQQUXLRRY" target="_blank"> D26QQQUXLRRY</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingCode">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseCode"
                          aria-expanded="false"
                          aria-controls="collapseCode"
                        >
                          CODE CHALLENGE CERTIFICATE
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseCode"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingCode"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>
                            <strong>
                              Code Challenge Certificate. Codility Silver Award
                              (Palladium 2020)
                            </strong>{" "}
                            Certification URL:{" "}
                            <a
                              href="https://app.codility.com/cert/view/certHDJ865-2RVJ8GQB9K5GKSN2/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              certHDJ865-2RVJ8GQB9K5GKSN2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div
                      className="panel-heading"
                      role="tab"
                      id="headingLeadership"
                    >
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseLeadership"
                          aria-expanded="false"
                          aria-controls="collapseLeadership"
                        >
                          LEADERSHIP COURSES
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseLeadership"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingLeadership"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>
                            <strong>Foundations of Everyday Leadership.</strong>{" "}
                            Certification URL:{" "}
                            <a
                              href="https://app.codility.com/cert/view/certHDJ865-2RVJ8GQB9K5GKSN2/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              UEQDJDEF6SBB
                            </a>
                          </li>
                          <li>
                            <strong>
                              Applications of Everyday Leadership.
                            </strong>{" "}
                            Certification URL:{" "}
                            <a
                              href="https://www.coursera.org/account/accomplishments/certificate/BXUUDUYP66FQ"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              BXUUDUYP66FQ
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          CCNA - Module 1
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFive"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <p>
                          Module 1 introduces the architecture, structure,
                          functions, components, and models of the Internet and
                          other computer networks. The principles and structure
                          of IP addressing and the fundamentals of Ethernet
                          concepts, media, and operations are introduced to
                          provide a foundation for the curriculum. Able to build
                          simple LANs, perform basic configurations for routers
                          and switches, and implement IP addressing schemes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSix">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Languages
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseSix"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingSix"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>
                            <strong>Spanish:</strong> Native.
                          </li>
                          <li>
                            <strong>English:</strong> Full Professional working
                            proficiency.
                          </li>
                          <li>
                            <strong>Deutsch:</strong> B2.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOther">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOther"
                          aria-expanded="false"
                          aria-controls="collapseOther"
                        >
                          Other
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOther"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingOther"
                      aria-expanded="false"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>
                            <strong>
                              Introduction to Unit Testing in Jest - The
                              Fundamentals.
                            </strong>{" "}
                            Certification URL:{" "}
                            <a
                              href="https://www.coursera.org/account/accomplishments/certificate/H2GKM8T6VVRG"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              H2GKM8T6VVRG
                            </a>
                          </li>
                          <li>
                            <strong>
                              AWS Certified DevOps Engineer: Continuous Delivery
                              and Automation.
                            </strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>AWS Developer: The Big Picture.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>
                              Responsive Websites with Bootstrap 3.
                            </strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>
                              Cisco CCNA: Introduction to Networking.
                            </strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>Risk Management.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>High Performance PHP.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>Java Certificate.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>
                              Getting Started with Laravel (PHP Framework) - The
                              Basics.
                            </strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>
                              Getting Started with Laravel (PHP Framework) -
                              Models and Data
                            </strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>A Better CSS: LESS and SASS.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>LPI: Linux Essentials (010-150).</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>PHP: Get Started.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>Automated Tests with PHPUnit.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>
                              PMP - Introduction to Project Management & the PHP
                              Exam.
                            </strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>React Fundamentals.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>Scrum Master Skills.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>Website Performance.</strong>
                            Pluralsight.
                          </li>
                          <li>
                            <strong>DRUPAL.</strong> Course basic level at
                            INTECAP.
                          </li>
                          <li>
                            <strong>
                              Exploring Oracle Data Base Administration (DBA).
                            </strong>{" "}
                            TATA Consultancy Services.
                          </li>
                          <li>
                            <strong>Solution Architecture (SA).</strong> TATA
                            Consultancy Services.
                          </li>
                          <li>
                            <strong>Software Quality Management (SQM).</strong>{" "}
                            TATA Consultancy Services.
                          </li>
                          <li>
                            <strong>Scrum Master.</strong> Pluralsight.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
