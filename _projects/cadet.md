---
layout: page
title: CADeT
description: Causal-Aware Deformation Transmission for Indirect Robotic Manipulation of Soft Tissue
img: assets/img/cadet/concept.png
category: work
importance: 1
related_publications: false
---

<link rel="stylesheet" href="{{ '/assets/css/cadet.css' | relative_url }}">
<div class="cadet">
<div class="cadet-meta">
<span class="cadet-label">arXiv preprint · September 2026</span>
<p class="cadet-authors"><strong>Junlei Hu</strong>, Dominic Jones, Pietro Valdastri</p>
<p>STORM Lab · University of Leeds</p>
</div>
<div class="cadet-links"><a href="https://arxiv.org/abs/2609.38483">Read the paper ↗</a><a href="https://arxiv.org/pdf/2609.38483">PDF ↗</a><a href="#experiments">Watch experiments ↓</a><a href="#citation">BibTeX</a></div>
<p class="cadet-intro">Manipulate an accessible tissue to move a target that the robot cannot grasp directly. <strong>CADeT uses tissue responses and targeted probing to infer how deformation is transmitted, then adapts indirect shape control to that interaction.</strong></p>
<figure class="cadet-figure"><img src="{{ '/assets/img/cadet/concept.png' | relative_url }}" width="1735" height="705" alt="A robot grasps the stomach to transmit deformation to the pancreas; the illustration shows attenuation through the proxy tissue and an external constraint."><figcaption>Indirect manipulation through a proxy organ: the robot acts on the stomach while tracking the pancreatic target. Figure 1 from the <a href="https://arxiv.org/html/2609.38483v1#S1.F1">paper</a>.</figcaption></figure>
<nav class="cadet-jumps" aria-label="Project sections"><a href="#method">Method</a><a href="#results">Results</a><a href="#pancreas">Pancreas</a><a href="#mesentery">Mesentery</a><a href="#simulation">Simulation</a><a href="#citation">Citation</a></nav>

<section id="method">
<h2>The same target response can have different causes</h2>
<p>A target that barely moves may be disconnected from the manipulated tissue, or attached but blocked by its surroundings. CADeT maintains a belief over three transmission modes:</p>
<table class="cadet-mode-table"><thead><tr><th scope="col">Mode</th><th scope="col">Interaction</th><th scope="col">Target response</th></tr></thead><tbody>
<tr><th scope="row">Decoupled</th><td>Ineffective proxy–target coupling</td><td>Little transmitted motion</td></tr>
<tr><th scope="row">Coupled</th><td>The proxy transmits deformation</td><td>The target responds to proxy motion</td></tr>
<tr><th scope="row">Blocked</th><td>The coupled target meets an external constraint</td><td>Motion is restricted</td></tr>
</tbody></table>
<ol class="cadet-steps"><li><strong>Observe and infer.</strong> Track the proxy and target tissues, updating the transmission-mode belief from their responses.</li><li><strong>Probe when ambiguous.</strong> Choose an additional action whose predicted responses help distinguish competing modes.</li><li><strong>Control through the proxy.</strong> Combine the belief with an online estimate of the adhesion Jacobian in model predictive control.</li></ol>
<p class="cadet-small">Method details: <a href="https://arxiv.org/html/2609.38483v1#S4">Sections IV–VI of the paper</a>.</p>
</section>

<section id="results"><h2>Results at a glance</h2><p>In the paper's simulation evaluation, full CADeT achieved:</p>
<div class="cadet-metrics"><div class="cadet-metric"><strong>99.3%</strong><span>mode-identification accuracy</span></div><div class="cadet-metric"><strong>98.0%</strong><span>manipulation success</span></div><div class="cadet-metric"><strong>30.1 s</strong><span>mean task time (± 2.7 s)</span></div></div>
<p class="cadet-small">Simulation results: 149/150 trials correctly identified. Manipulation statistics are reported separately in Table III. Source: <a href="https://arxiv.org/html/2609.38483v1#S7">Section VII, Tables I and III</a>.</p>
<p>Physical experiments used the <strong>da Vinci Research Kit</strong> with tissue phantoms and <strong>ex vivo porcine tissues</strong>. In the three nominal reachable Coupled cases, final mean shape errors were <strong>2.1–2.7 mm</strong> (<a href="https://arxiv.org/html/2609.38483v1#S8.T5">Table V</a>).</p>
<div class="cadet-limitations"><strong>Scope.</strong> Correctly identifying coupling does not make every target shape reachable. The experiments include disconnected, constrained and reachability-limited cases. The method assumes a predefined grasp and does not provide a formal tissue-safety guarantee.</div>
</section>

<section id="experiments"><h2>Experiment videos</h2><p>Each clip contains one complete demonstration with its original plots and playback speed. Use the controls to pause, seek or view fullscreen.</p><p class="cadet-small">Each excerpt is 25 seconds long. On-screen experimental time can differ from video playback time.</p></section>
<section id="pancreas"><h2>Pancreatic manipulation through the stomach</h2><p>The stomach is the accessible proxy; the pancreas is the indirectly manipulated target. <a href="https://arxiv.org/html/2609.38483v1#S8.SS2">Paper: Section VIII-B</a>.</p>
<div class="cadet-media-grid">
{% assign clips = site.data.cadet | where: 'group', 'pancreas' %}
{% for clip in clips %}{% include cadet_video.liquid clip=clip %}{% endfor %}
</div></section>
<section id="mesentery"><h2>Mesenteric manipulation through the colon</h2><p>The robot manipulates the colon to control the attached mesentery. Phantom trials use a simplified intestinal model. <a href="https://arxiv.org/html/2609.38483v1#S8.SS3">Paper: Section VIII-C</a>.</p>
<div class="cadet-media-grid">
{% assign clips = site.data.cadet | where: 'group', 'mesentery' %}
{% for clip in clips %}{% include cadet_video.liquid clip=clip %}{% endfor %}
</div></section>
<section id="simulation"><h2>Simulation: three transmission conditions</h2><p>Controlled attachment and blocking conditions illustrate Decoupled, Coupled and Blocked interactions.</p>
<div class="cadet-media-grid">
{% assign clips = site.data.cadet | where: 'group', 'simulation' %}
{% for clip in clips %}{% include cadet_video.liquid clip=clip %}{% endfor %}
</div></section>
<section id="citation"><h2>Citation</h2><div class="cadet-citation"><pre><code>{% raw %}@misc{hu2026cadet,
  title = {{CADeT}: Causal-Aware Deformation Transmission for
           Indirect Robotic Manipulation of Soft Tissue},
  author = {Junlei Hu and Dominic Jones and Pietro Valdastri},
  year = {2026},
  eprint = {2609.38483},
  archivePrefix = {arXiv},
  primaryClass = {cs.RO},
  url = {https://arxiv.org/abs/2609.38483}
}{% endraw %}</code></pre></div></section>
</div>
