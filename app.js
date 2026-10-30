/**
 * PRATYUSH MOHANTY — Academic & Research Portfolio
 * app.js — Hash-based routing, professional scholarly layout
 */

(function () {
  'use strict';

  /* ============================================================
     ROUTING CONFIG
     ============================================================ */
  const BASE = '#/pratyush/';
  const DEFAULT = 'home';
  const ROUTES = ['home', 'education', 'experience', 'projects', 'extracurriculars', 'hobbies', 'contact'];

  /* ============================================================
     ICONS (Clean SVG Vector Badges)
     ============================================================ */
  const ICONS = {
    github: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    linkedin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    mail: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    phone: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    pin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    external: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    file: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
  };

  /* ============================================================
     PAGE RENDERERS
     ============================================================ */

  function renderHome() {
    return `
      <div class="page active home-page" id="page-home">
        <div class="home-layout">

          <!-- LEFT COLUMN: profile, bio, research interests -->
          <section class="home-left">
            <div class="home-profile">
              <img
                src="assets/photo.jpg"
                alt="Pratyush Mohanty"
                class="home-photo"
                onerror="this.outerHTML='<div class=\\'home-photo-placeholder\\'>PM</div>'"
              />
              <div class="home-profile-text">
                <h1 class="home-name">Pratyush Mohanty</h1>
                <div class="home-affil">
                  <img src="assets/logos/drdo.png" alt="" class="home-affil-logo" />
                  <span>Research Intern, CAIR, DRDO</span>
                </div>
                <div class="home-affil">
                  <img src="assets/logos/msrit.png" alt="" class="home-affil-logo" />
                  <span>B.E. in ECE, MSRIT Bengaluru</span>
                </div>
                <div class="home-links">
                  <a href="assets/curriculum_vitae_pratyush.pdf" target="_blank" rel="noopener">CV</a>
                  <a href="mailto:pratyushmohanty2912@gmail.com">Email</a>
                  <a href="https://github.com/Pratyush426" target="_blank" rel="noopener">GitHub</a>
                  <a href="https://linkedin.com/in/pratyushmohantymsrit" target="_blank" rel="noopener">LinkedIn</a>
                </div>
              </div>
            </div>

            <p class="home-bio">
              I am an undergraduate in Electronics and Communication Engineering at MSRIT Bengaluru
              (CGPA 8.53/10), currently a research intern at the Centre for Artificial Intelligence
              and Robotics (CAIR), DRDO. My work is about making machine learning dependable on messy,
              real-world data: segmenting noisy text, routing tasks across teams of LLM agents, and
              detecting audio-visual deepfakes.
            </p>

            <div>
              <h2 class="home-h2">Research Interests</h2>
              <ul class="home-interests">
                <li>Natural Language Processing</li>
                <li>Large Language Models</li>
                <li>Multimodal Learning</li>
                <li>Multi-Agent Systems</li>
                <li>Multi-Armed Bandits</li>
                <li>Signal Processing</li>
              </ul>
            </div>
          </section>

          <!-- RIGHT COLUMN: selected research -->
          <section class="home-right">
            <div class="home-h2-row">
              <h2 class="home-h2">Selected Research</h2>
              <a class="home-more" href="#/pratyush/projects">All projects →</a>
            </div>

            <article class="home-proj">
              <h3 class="home-proj-title">Decoupled Sentence Segmentation on Noisy Text</h3>
              <div class="home-proj-meta">CAIR, DRDO · Sept 2026 – present</div>
              <p class="home-proj-desc">
                A two-phase pipeline for unformatted ASR, chat and OCR text: a 21-rule heuristic
                classifier handles easy cases and routes hard ones to a contextual DeBERTa-v3 model.
                Reaches <strong>98.3% precision at 0.22 ms per sample</strong> across five noise distributions.
              </p>
            </article>

            <article class="home-proj">
              <h3 class="home-proj-title">ClawSwarm AI: Adaptive Multi-Agent Orchestration</h3>
              <div class="home-proj-meta">Independent research · <a href="https://github.com/Pratyush426" target="_blank" rel="noopener">Code</a></div>
              <p class="home-proj-desc">
                Learns each LLM agent's strengths as EMA skill vectors and treats task routing as a
                contextual multi-armed bandit. Cuts <strong>cumulative regret by 63%</strong> (p &lt; 0.001)
                over a 50-seed simulation study.
              </p>
            </article>

            <article class="home-proj">
              <h3 class="home-proj-title">Multimodal Deepfake Detection via Synchronization Fusion</h3>
              <div class="home-proj-meta">Undergraduate research, MSRIT · Advisor: Dr. S. Sethu Selvi</div>
              <p class="home-proj-desc">
                Fuses audio and video features with synchronization-aware fusion and cross-modal graph
                attention. Achieves <strong>94.57% accuracy and 0.979 AUC</strong> on LAV-DF, and 80.12%
                on unseen Hindi videos (HAV-DF).
              </p>
            </article>
          </section>

        </div>
      </div>
    `;
  }

  function renderEducation() {
    return `
      <div class="page active" id="page-education">
        <div class="page-header">
          <h1 class="page-title">Education</h1>
          <p class="page-sub">Academic qualifications, institutions, and core curricula.</p>
        </div>

        <div class="timeline">

          <!-- Undergraduate Degree -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="tl-header">
                <div style="display: flex; gap: 16px; align-items: flex-start;">
                  <img src="assets/logos/msrit.png" alt="MSRIT Logo" style="height: 44px; width: auto; object-fit: contain; margin-top: 2px;" />
                  <div>
                    <div class="tl-title">Bachelor of Engineering in Electronics &amp; Communication Engineering</div>
                    <div class="tl-org">M.S. Ramaiah Institute of Technology (MSRIT), Bengaluru</div>
                    <div class="tl-meta">Affiliated to Visvesvaraya Technological University (VTU)</div>
                  </div>
                </div>
                <div class="tl-date">Oct 2023 – June 2027</div>
              </div>

              <div class="cgpa-badge">Cumulative Grade Point Average: 8.53 / 10</div>

              <div class="tl-body">
                <p class="section-label">Core Coursework</p>
                <div class="tl-tags">
                  <span class="tag tag-tech">Machine Learning</span>
                  <span class="tag tag-tech">Deep Learning</span>
                  <span class="tag tag-tech">Linear Algebra</span>
                  <span class="tag tag-tech">Probability &amp; Random Processes</span>
                  <span class="tag tag-tech">Digital Signal Processing</span>
                  <span class="tag tag-tech">Data Structures &amp; Algorithms</span>
                  <span class="tag tag-tech">Robotics &amp; Control</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Class XII (12th) -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="tl-header">
                <div>
                  <div class="tl-title">Senior Secondary Examination (Class XII)</div>
                  <div class="tl-org">Modern Educational Academy</div>
                  <div class="tl-meta">Central Board of Secondary Education (CBSE)</div>
                </div>
                <div class="tl-date">Graduated: 2023</div>
              </div>

              <div class="cgpa-badge" style="margin-top: 10px;">Score: 86.6%</div>

              <div class="tl-body">
                <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 8px;">
                  Completed senior secondary science curriculum under the Central Board of Secondary Education (CBSE).
                </p>
              </div>
            </div>
          </div>

          <!-- Class X (10th) -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="tl-header">
                <div style="display: flex; gap: 16px; align-items: flex-start;">
                  <img src="assets/logos/dps.png" alt="DPS Logo" style="height: 42px; width: auto; object-fit: contain; margin-top: 2px;" />
                  <div>
                    <div class="tl-title">Secondary School Examination (Class X)</div>
                    <div class="tl-org">Delhi Public School (DPS)</div>
                    <div class="tl-meta">Central Board of Secondary Education (CBSE)</div>
                  </div>
                </div>
                <div class="tl-date">Graduated: 2021</div>
              </div>

              <div class="cgpa-badge" style="margin-top: 10px;">Score: 90.4%</div>

              <div class="tl-body">
                <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 8px;">
                  Foundational secondary curriculum with high academic distinction under the Central Board of Secondary Education (CBSE).
                </p>
              </div>
            </div>
          </div>

        </div>

        <hr class="divider" />

        <h2 class="section-title">Academic &amp; Competitive Recognition</h2>
        <div class="achieve-list">
          <div class="achieve-item">
            <div class="achieve-bar"></div>
            <div class="achieve-text">
              <strong>Competitive Algorithmic Problem Solving — LeetCode</strong>
              <span>Rating: 1755. Over 400 algorithmic problems solved across data structures, graph theory, dynamic programming, and systems design.</span>
            </div>
          </div>
          <div class="achieve-item">
            <div class="achieve-bar"></div>
            <div class="achieve-text">
              <strong>Joint Entrance Examination (JEE) Main</strong>
              <span>Secured 96th percentile among approximately 1.2 million candidates nationwide.</span>
            </div>
          </div>
          <div class="achieve-item">
            <div class="achieve-bar"></div>
            <div class="achieve-text">
              <strong>HackAWar National Hackathon — 3rd Runner-Up</strong>
              <span>Ranked in the top 5 teams overall for architecting an intelligent system prototype under strict time and evaluation constraints.</span>
            </div>
          </div>
          <div class="achieve-item">
            <div class="achieve-bar"></div>
            <div class="achieve-text">
              <strong>Whackiest Hackathon — Top 10 Finalist &amp; Theme Winner</strong>
              <span>Awarded Theme Winner among top 10 finalists for novel approach and practical implementation.</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderExperience() {
    return `
      <div class="page active" id="page-experience">
        <div class="page-header">
          <h1 class="page-title">Research Experience</h1>
          <p class="page-sub">Formal laboratory appointments and self-directed research programs.</p>
        </div>

        <div class="timeline">

          <!-- CAIR DRDO -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="tl-header">
                <div style="display: flex; gap: 16px; align-items: flex-start;">
                  <img src="assets/logos/drdo.png" alt="DRDO Logo" style="height: 48px; width: auto; object-fit: contain; margin-top: 2px;" />
                  <div>
                    <div class="tl-title">Research Intern</div>
                    <div class="tl-org">Centre for Artificial Intelligence and Robotics (CAIR) — DRDO</div>
                    <div class="tl-meta">Ministry of Defence, Government of India · Bengaluru, India</div>
                  </div>
                </div>
                <div class="tl-date">September 2026 – Present</div>
              </div>
              <div class="tl-body">
                <ul>
                  <li>Engineering a decoupled, two-phase NLP framework for robust sentence segmentation on unformatted, noisy text streams (ASR transcripts, chat logs, OCR scans, and web remnants).</li>
                  <li>Developed a 21-rule Tier 1 Heuristic Classifier achieving <strong>0.22 ms latency</strong> (throughput of 4,400 samples/sec) and <strong>98.3% precision</strong> on clean text to triage pristine inputs with zero external model inference overhead.</li>
                  <li>Evaluated a Tier 2 XGBoost classifier via GroupKFold cross-validation; identified and diagnosed shortcut learning (Clever Hans effect) where shallow n-gram models failed out-of-domain transfer (F1 dropping to 20%), demonstrating the necessity for contextual embeddings.</li>
                  <li>Curated multi-domain benchmarking corpora across 5 noise distributions (LibriSpeech, ICDAR, WNUT-17), enforcing strict holdout regimes and MinHash deduplication to eliminate data leakage across evaluation splits.</li>
                  <li>Currently integrating lightweight contextual models (DeBERTa-v3) into a cascading router and engineering Phase 2 token-level sequence segmenters to replace brittle punctuation-dependent boundary splitters.</li>
                </ul>
              </div>
              <div class="tl-tags">
                <span class="tag tag-interest">Sentence Boundary Detection</span>
                <span class="tag tag-interest">Cascading Architecture</span>
                <span class="tag tag-interest">DeBERTa-v3</span>
                <span class="tag tag-interest">XGBoost</span>
                <span class="tag tag-interest">MinHash</span>
                <span class="tag tag-interest">Noise Robustness</span>
              </div>
            </div>
          </div>

          <!-- ClawSwarm -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="tl-header">
                <div>
                  <div class="tl-title">ClawSwarm AI — Dynamic Multi-Agent Orchestration</div>
                  <div class="tl-org">Independent Research Project · Open-Source Framework</div>
                  <div class="tl-meta">Theoretical formulation, simulation suite, and empirical validation</div>
                </div>
                <div>
                  <a href="https://github.com/Pratyush426" target="_blank" rel="noopener" class="gh-link">
                    ${ICONS.github} Repository ${ICONS.external}
                  </a>
                </div>
              </div>
              <div class="tl-body">
                <ul>
                  <li>Designed and implemented ClawSwarm AI, an open-source multi-agent framework that dynamically learns agent specializations via <strong>6D Exponential Moving Average (EMA) skill vectors</strong>, avoiding the rigid, hardcoded role declarations of frameworks like AutoGen and CrewAI.</li>
                  <li>Formulated task routing as a <strong>multi-armed bandit problem</strong> utilizing a Skill-Adaptive &epsilon;-greedy policy with entropy-based decay to optimize dynamic task-to-agent matching under uncertainty.</li>
                  <li>Engineered a heartbeat fault-detection and leader-election protocol (2s polling) that isolates crashed or degrading nodes, reassigns in-flight tasks, and updates routing priors via failure penalties.</li>
                  <li>Conducted an extensive 50-seed simulation study (1,000 tasks/run), demonstrating a <strong>63% reduction in cumulative regret</strong> relative to skill-agnostic baselines (paired Wilcoxon signed-rank test p &lt; 0.001) and characterizing exploration trade-offs against greedy baselines.</li>
                  <li>Implemented a cross-model LLM-as-judge evaluation pipeline across distinct model providers to eliminate self-preference evaluation bias; open-sourced the complete codebase with reproducible benchmarks.</li>
                </ul>
              </div>
              <div class="tl-tags">
                <span class="tag tag-interest">Multi-Agent Systems</span>
                <span class="tag tag-interest">Multi-Armed Bandits</span>
                <span class="tag tag-interest">Fault-Tolerant Consensus</span>
                <span class="tag tag-interest">Statistical Testing</span>
                <span class="tag tag-interest">LLM-as-Judge</span>
                <span class="tag tag-interest">Python</span>
              </div>
            </div>
          </div>

          <!-- Deepfake Detection -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="tl-header">
                <div style="display: flex; gap: 16px; align-items: flex-start;">
                  <img src="assets/logos/msrit.png" alt="MSRIT Logo" style="height: 44px; width: auto; object-fit: contain; margin-top: 2px;" />
                  <div>
                    <div class="tl-title">Multimodal Deepfake Detection</div>
                    <div class="tl-org">Undergraduate Research Project · Dept. of ECE, MSRIT</div>
                    <div class="tl-meta">Advisor: Dr. S. Sethu Selvi, Professor, Department of E&amp;C Engineering</div>
                  </div>
                </div>
                <div class="tl-date">Academic Research</div>
              </div>
              <div class="tl-body">
                <ul>
                  <li>Implemented an audio-visual deepfake detector in a 4-member team based on Synchronization-Aware Feature Fusion (SAFF) and Cross-Modal Graph Attention Networks (CM-GAN) inspired by recent literature (IEEE Trans. Multimedia, 2024).</li>
                  <li>Constructed a dual-encoder architecture utilizing an EfficientNet-B0 visual encoder and a CNN audio encoder on 128-bin Mel-spectrograms, paired with cosine-similarity synchronization scoring, cross-modal transformer attention, and gated classification fusion.</li>
                  <li>Trained and benchmarked on LAV-DF (100K+ English videos); the combined SAFF + CM-GAN model reached <strong>94.57% accuracy</strong>, <strong>96.39% F1-score</strong>, and <strong>0.979 AUC</strong> (outperforming single-modality variants at 92.36% and 93.96%).</li>
                  <li>Conducted zero-shot cross-lingual transfer experiments on Hindi videos (HAV-DF, 67K+) without fine-tuning: achieved <strong>80.12% accuracy</strong>, <strong>85.49% F1</strong>, <strong>0.844 AUC</strong>, quantitatively identifying model sensitivity to phonemic and acoustic domain shifts.</li>
                  <li>Constructed the end-to-end preprocessing pipeline: uniform frame sampling, 16 kHz audio extraction, Mel-spectrogram computation, and comparative experiment tracking.</li>
                </ul>
              </div>
              <div class="tl-tags">
                <span class="tag tag-interest">Multimodal Learning</span>
                <span class="tag tag-interest">Cross-Modal Attention</span>
                <span class="tag tag-interest">EfficientNet-B0</span>
                <span class="tag tag-interest">Audio-Visual Synchronization</span>
                <span class="tag tag-interest">PyTorch</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  function renderProjects() {
    return `
      <div class="page active" id="page-projects">
        <div class="page-header">
          <h1 class="page-title">Research &amp; Engineering Projects</h1>
          <p class="page-sub">Open-source implementations, distributed systems, and applied intelligence systems.</p>
        </div>

        <div class="project-grid">

          <!-- ClawSwarm Featured -->
          <div class="project-card featured">
            <div class="project-label">Research System · Multi-Agent Intelligence</div>
            <div class="project-title">ClawSwarm AI: Adaptive Multi-Agent Framework via EMA Skill Vectors</div>
            <div class="project-desc">
              <p>An open-source multi-agent orchestration architecture that formulates dynamic task routing as a contextual multi-armed bandit problem, replacing rigid static prompts with continuous mathematical learning of agent competence.</p>
              <ul>
                <li>Tracks agent competence along 6 continuous skill axes via Exponential Moving Average (EMA).</li>
                <li>Dynamic task assignment using Skill-Adaptive &epsilon;-greedy routing with entropy-based decay.</li>
                <li>Peer heartbeat consensus and leader election providing node degradation isolation within 2 seconds.</li>
                <li>Empirically validated with a 50-seed simulation suite, demonstrating 63% cumulative regret reduction (p &lt; 0.001).</li>
              </ul>
            </div>
            <div class="project-footer">
              <div class="project-tags">
                <span class="tag tag-tech">Python</span>
                <span class="tag tag-tech">Multi-Armed Bandits</span>
                <span class="tag tag-tech">LLM-as-Judge</span>
                <span class="tag tag-tech">Distributed Systems</span>
                <span class="tag tag-tech">Fault Tolerance</span>
              </div>
              <a href="https://github.com/Pratyush426" target="_blank" rel="noopener" class="gh-link">
                ${ICONS.github} View Codebase ${ICONS.external}
              </a>
            </div>
          </div>

          <!-- NexusAI -->
          <div class="project-card">
            <div class="project-label">Systems &amp; NLP Infrastructure</div>
            <div class="project-title">NexusAI: Asynchronous Email-to-Schema Extraction Engine</div>
            <div class="project-desc">
              <p>A resilient data extraction pipeline designed to transform unstructured incoming communications into structured validated schemas under production constraints.</p>
              <ul>
                <li>Hybrid inference: Zero-shot LLM extraction coupled with a trained Naive Bayes classifier fallback for low-confidence or high-noise inputs.</li>
                <li>Event-driven architecture: Redis and BullMQ job queues decoupling LLM inference latency from incoming API requests.</li>
                <li>Validated JSON schemas stored with indexing in MongoDB.</li>
              </ul>
            </div>
            <div class="project-footer">
              <div class="project-tags">
                <span class="tag tag-tech">TypeScript</span>
                <span class="tag tag-tech">Node.js</span>
                <span class="tag tag-tech">Redis / BullMQ</span>
                <span class="tag tag-tech">MongoDB</span>
                <span class="tag tag-tech">Hybrid NLP</span>
              </div>
              <a href="https://github.com/Pratyush426" target="_blank" rel="noopener" class="gh-link">
                ${ICONS.github} Repository ${ICONS.external}
              </a>
            </div>
          </div>

          <!-- Deepfake Detector Card -->
          <div class="project-card">
            <div class="project-label">Multimodal Machine Learning</div>
            <div class="project-title">Audio-Visual Deepfake Detection via Synchronization Fusion</div>
            <div class="project-advisor">Advisor: Dr. S. Sethu Selvi · Dept. of ECE, MSRIT</div>
            <div class="project-desc">
              <p>Synthetic media classification network leveraging Synchronization-Aware Feature Fusion (SAFF) and Cross-Modal Graph Attention Networks (CM-GAN).</p>
              <ul>
                <li>Dual modality encoders: EfficientNet-B0 on video frames and 2D CNN on 128-bin Mel-spectrograms.</li>
                <li>Synchronization metric: Cosine-similarity evaluation across temporal windows to catch acoustic-visual lag.</li>
                <li>Performance: 94.57% accuracy and 0.979 AUC on LAV-DF; 80.12% zero-shot accuracy on HAV-DF Hindi videos.</li>
              </ul>
            </div>
            <div class="project-footer">
              <div class="project-tags">
                <span class="tag tag-tech">PyTorch</span>
                <span class="tag tag-tech">EfficientNet</span>
                <span class="tag tag-tech">Mel-Spectrograms</span>
                <span class="tag tag-tech">CM-GAN</span>
              </div>
            </div>
          </div>

        </div>

        <div class="skills-section">
          <h2 class="section-title">Technical Competencies</h2>

          <div class="skill-group">
            <div class="skill-group-label">Programming Languages</div>
            <div class="skill-tags">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">C++</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">SQL</span>
            </div>
          </div>

          <div class="skill-group">
            <div class="skill-group-label">Machine Learning &amp; Research Methods</div>
            <div class="skill-tags">
              <span class="skill-tag">PyTorch</span>
              <span class="skill-tag">scikit-learn</span>
              <span class="skill-tag">XGBoost</span>
              <span class="skill-tag">Hugging Face Transformers</span>
              <span class="skill-tag">DeBERTa-v3</span>
              <span class="skill-tag">EfficientNet</span>
              <span class="skill-tag">Graph Attention Networks (GAT)</span>
              <span class="skill-tag">Multimodal Fusion</span>
              <span class="skill-tag">Multi-Armed Bandits (&epsilon;-greedy, UCB)</span>
              <span class="skill-tag">LLM-as-Judge Evaluation</span>
              <span class="skill-tag">Statistical Hypothesis Testing (Wilcoxon signed-rank)</span>
            </div>
          </div>

          <div class="skill-group">
            <div class="skill-group-label">Systems, Infrastructure &amp; Backend</div>
            <div class="skill-tags">
              <span class="skill-tag">FastAPI</span>
              <span class="skill-tag">asyncio</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Redis / BullMQ</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">Git &amp; GitHub Actions (CI/CD)</span>
              <span class="skill-tag">Linux / POSIX</span>
            </div>
          </div>

          <div class="skill-group">
            <div class="skill-group-label">Scientific Computing &amp; Tooling</div>
            <div class="skill-tags">
              <span class="skill-tag">LaTeX</span>
              <span class="skill-tag">Weights &amp; Biases (W&amp;B)</span>
              <span class="skill-tag">FAISS</span>
              <span class="skill-tag">JupyterLab</span>
              <span class="skill-tag">NumPy / SciPy</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderExtracurriculars() {
    return `
      <div class="page active" id="page-extracurriculars">
        <div class="page-header">
          <h1 class="page-title">Extracurricular Engagements</h1>
          <p class="page-sub">International delegations, technical societies, and campus leadership.</p>
        </div>

        <div class="card-list">

          <!-- HPAIR -->
          <div class="info-card">
            <div class="info-card-logo">
              <img src="assets/logos/harvard.png" alt="Harvard University Coat of Arms" />
            </div>
            <div class="info-card-body">
              <div class="info-card-title">Harvard Project for Asia and International Relations (HPAIR)</div>
              <div class="info-card-org">Harvard University Student Organization — Selected Delegate</div>
              <div class="info-card-date">Conferences of 2024</div>
              <div class="info-card-desc">
                Selected through a competitive international review process as a delegate to HPAIR, Harvard University's flagship global forum in the Asia-Pacific region. Participated in multilateral discussions, policy panels, and seminars addressing emerging artificial intelligence regulation, technological sovereignty, and economic development alongside international student leaders, academics, and industry executives.
              </div>
            </div>
          </div>

          <!-- EDC RIT -->
          <div class="info-card">
            <div class="info-card-logo">
              <img src="assets/logos/msrit.png" alt="MSRIT Logo" />
            </div>
            <div class="info-card-body">
              <div class="info-card-title">Entrepreneurship Development Cell (EDC)</div>
              <div class="info-card-org">M.S. Ramaiah Institute of Technology — Club Head</div>
              <div class="info-card-date">2024 – Present</div>
              <div class="info-card-desc">
                Serving as Head of the premier entrepreneurial and venture incubation body on campus. Responsible for overall operations, organizational strategy, and leading a cross-functional student executive committee. Orchestrated flagship hackathons, venture pitch summits, and mentorship roundtables connecting student founders with venture capitalists and engineering mentors.
              </div>
            </div>
          </div>

          <!-- IEEE -->
          <div class="info-card">
            <div class="info-card-logo">
              <img src="assets/logos/ieee.png" alt="IEEE Logo" />
            </div>
            <div class="info-card-body">
              <div class="info-card-title">IEEE Signal Processing Society</div>
              <div class="info-card-org">MSRIT Student Branch Chapter — Core Committee Member</div>
              <div class="info-card-date">2023 – Present</div>
              <div class="info-card-desc">
                Active core organizer within the IEEE Signal Processing Society chapter. Facilitated technical workshops, hands-on lab sessions on Fourier transforms, filter design, and applied machine learning pipelines. Contributed to fostering undergraduate interest in computational signal processing and collaborative technical investigations.
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  function renderHobbies() {
    return `
      <div class="page active" id="page-hobbies">
        <div class="page-header">
          <h1 class="page-title">Hobbies</h1>
          <p class="page-sub">Classical vocal performance, percussion scholarship, and their cognitive parallels to scientific inquiry.</p>
        </div>

        <div class="hobby-grid">
          <div class="hobby-card">
            <div class="hobby-card-subtitle">Classical Vocal Music</div>
            <div class="hobby-card-title">Indian Classical Vocalist</div>
            <p class="hobby-card-text">
              I have pursued Indian classical vocal music for over a decade, culminating in competitive performances at the national level. Classical vocal performance is fundamentally an exercise in microtonal acoustic precision (shruti), structural memory, and rigorous adherence to the grammar of ragas while improvising within strict temporal boundaries. This discipline has shaped my capacity for sustained intellectual focus, iterative refinement, and systematic pattern recognition.
            </p>
          </div>

          <div class="hobby-card">
            <div class="hobby-card-subtitle">Classical Percussion</div>
            <div class="hobby-card-title">Tabla Graduate &amp; Practitioner</div>
            <p class="hobby-card-text">
              I hold a formal academic degree in Tabla and practice at a professional level. The classical tabla tradition operates on a rigorous combinatorial framework: intricate rhythmic cycles (taals), complex polyrhythms (layakari), and mathematical cadence resolutions (tihais). Studying these recursive temporal structures directly mirrors the logical discipline of discrete mathematics, algorithm design, and distributed synchronization.
            </p>
          </div>
        </div>

        <blockquote class="hobby-quote">
          "The internal grammar of classical music — where rigid structural constraints give rise to expressive improvisation — provides a continuous foundation for how I approach computational research: with deep respect for mathematical rigor and the patience required to observe emergent patterns."
        </blockquote>
      </div>
    `;
  }

  function renderContact() {
    return `
      <div class="page active" id="page-contact">
        <div class="page-header">
          <h1 class="page-title">Contact &amp; Information</h1>
          <p class="page-sub">Direct channels for research appointments, laboratory collaboration, and academic correspondence.</p>
        </div>

        <!-- Narrative Content First (Paragraph by Paragraph Down) -->
        <div class="contact-narrative">

          <!-- Block 1: Broad Research Focus & Domains -->
          <div class="contact-block">
            <h2 class="contact-subtitle">Broad Research Focus &amp; Domains</h2>
            <p>
              My active research interests center broadly across <strong>Machine Learning</strong>, <strong>Natural Language Processing (NLP)</strong>, and <strong>Signal Processing</strong>, with a continuous openness to challenging foundational and applied problems across any domain. Within ML, I explore representation learning, statistical optimization, foundation model evaluation, and adaptive decision-making (contextual multi-armed bandits). In NLP, my investigations encompass sequence modeling, contextual semantics, and noise-robust language representations. In Signal Processing, I work on spectral-temporal analysis, acoustic-visual feature extraction, and cross-modal synchronization. I actively welcome collaborative inquiries spanning computer vision, multimodal architectures, distributed systems, and applied computational intelligence.
            </p>
          </div>

          <!-- Block 2: Research Experience & Engineering Breadth -->
          <div class="contact-block">
            <h2 class="contact-subtitle">Research Experience &amp; Engineering Breadth</h2>
            <p>
              I currently serve as a Research Intern at the Centre for Artificial Intelligence and Robotics (CAIR), DRDO (Ministry of Defence), engineering high-throughput cascades that couple 21-rule heuristic classifiers with DeBERTa-v3 sequence routers across 5 real-world noise distributions using MinHash deduplication. Concurrently, I formulated ClawSwarm AI, an open-source framework utilizing 6D Exponential Moving Average (EMA) skill vectors for adaptive multi-agent routing (63% cumulative regret reduction), and co-developed multimodal deepfake detection models using synchronization-aware feature fusion and cross-modal attention networks at MSRIT under Dr. S. Sethu Selvi.
            </p>
          </div>

          <!-- Block 3: Location, Full-Time Availability & Long-Term Commitment -->
          <div class="contact-block">
            <h2 class="contact-subtitle">Location, Availability &amp; Long-Term Commitment</h2>
            <p>
              I currently reside in <strong>Bengaluru, Karnataka, India</strong>. I am actively available and eager to commit as a <strong>full-time research intern or research fellow</strong> for dedicated long-term appointments (spanning <strong>6 to 10 months</strong> or longer). I am prepared to contribute full-time to rigorous laboratory initiatives, sponsored research grants, or industrial AI labs, both locally in Bengaluru and through remote or sponsored international visiting fellowships.
            </p>
          </div>

          <!-- Block 4: Open-Source Codebases & Curriculum Vitae -->
          <div class="contact-block">
            <h2 class="contact-subtitle">Open-Source Codebases &amp; Academic Verification</h2>
            <p>
              In accordance with open science principles, all codebases, reproducible simulation suites, statistical test scripts (paired Wilcoxon signed-rank), and preprocessing pipelines are publicly accessible on GitHub. Full undergraduate coursework in Electronics &amp; Communication Engineering (8.53 CGPA), institutional laboratory milestones, and competitive algorithmic problem-solving records are documented in my Curriculum Vitae.
            </p>
          </div>

        </div>

        <!-- Contact Details & Action Channels Below the Content -->
        <div class="contact-bottom-channels">
          <div class="contact-items">
            <div class="contact-item">
              <div class="contact-item-icon">${ICONS.mail}</div>
              <div class="contact-item-body">
                <div class="contact-item-label">Primary Email</div>
                <div class="contact-item-value">
                  <a href="mailto:pratyushmohanty2912@gmail.com">pratyushmohanty2912@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item-icon">${ICONS.phone}</div>
              <div class="contact-item-body">
                <div class="contact-item-label">Telephone</div>
                <div class="contact-item-value">
                  <a href="tel:+916263283117">+91 6263283117</a>
                </div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item-icon">${ICONS.pin}</div>
              <div class="contact-item-body">
                <div class="contact-item-label">Location</div>
                <div class="contact-item-value">Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>

          <div class="contact-social">
            <a href="assets/curriculum_vitae_pratyush.pdf" target="_blank" rel="noopener" class="social-btn" style="border-color: var(--navy); color: var(--navy); background: #f0f5fa; font-weight: 600;">
              ${ICONS.file} Curriculum Vitae (PDF) ${ICONS.external}
            </a>
            <a href="https://github.com/Pratyush426" target="_blank" rel="noopener" class="social-btn">
              ${ICONS.github} GitHub Profile ${ICONS.external}
            </a>
            <a href="https://linkedin.com/in/pratyushmohantymsrit" target="_blank" rel="noopener" class="social-btn">
              ${ICONS.linkedin} LinkedIn Profile ${ICONS.external}
            </a>
            <a href="mailto:pratyushmohanty2912@gmail.com" class="social-btn">
              ${ICONS.mail} Write Direct Email
            </a>
          </div>
        </div>

      </div>
    `;
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  const PAGE_RENDERERS = {
    home:             renderHome,
    education:        renderEducation,
    experience:       renderExperience,
    projects:         renderProjects,
    extracurriculars: renderExtracurriculars,
    hobbies:          renderHobbies,
    contact:          renderContact,
  };

  function getRoute() {
    const hash = window.location.hash;
    if (!hash || !hash.startsWith(BASE)) return DEFAULT;
    const route = hash.slice(BASE.length).split('/')[0];
    return ROUTES.includes(route) ? route : DEFAULT;
  }

  function navigate(route) {
    const mainEl = document.getElementById('main-content');
    if (!mainEl) return;

    // Render page
    const renderer = PAGE_RENDERERS[route] || PAGE_RENDERERS[DEFAULT];
    mainEl.innerHTML = renderer();

    // Update nav active state across desktop and mobile
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.route === route);
    });

    // Update URL hash cleanly
    const target = BASE + route;
    if (window.location.hash !== target) {
      history.replaceState(null, '', target);
    }

    // Scroll top
    window.scrollTo(0, 0);
    mainEl.scrollTop = 0;
  }

  /* ============================================================
     MOBILE DRAWER TOGGLE
     ============================================================ */
  function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const drawer    = document.getElementById('mobile-drawer');
    const overlay   = document.getElementById('drawer-overlay');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      overlay.classList.toggle('open');
    });

    overlay.addEventListener('click', () => {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  function closeMobileMenu() {
    const drawer  = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer)  drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    // Redirect bare hash to default
    if (!window.location.hash || !window.location.hash.startsWith(BASE)) {
      history.replaceState(null, '', BASE + DEFAULT);
    }

    // Initial render
    navigate(getRoute());

    // Nav link click listeners
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const route = link.dataset.route;
        if (!route) return; // Allow normal link handling (e.g. CV PDF download in new tab)
        e.preventDefault();
        history.pushState(null, '', BASE + route);
        navigate(route);
        closeMobileMenu();
      });
    });

    // Back / Forward navigation
    window.addEventListener('hashchange', () => {
      navigate(getRoute());
    });

    window.addEventListener('popstate', () => {
      navigate(getRoute());
    });

    setupMobileMenu();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
