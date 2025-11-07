---
layout: page
title: Multiscale Deformable Objects Manipulation via Wavelet-Decomposed Boundary Element Method
# description: with background image
img: assets/img/12.jpg
related_publications: true
---

<h1 style="text-align: center;">Abstract</h1>
<div align="justify">
Robotic deformable object manipulation faces critical challenges in surgical applications due to under-actuation, unpredictable tissue deformation, and limited intraoperative visibility. 
Traditional model-free methods often encounter unstable Jacobians caused by ill-conditioned observations, while physics-based models require precise tissue parameters and volumetric meshes, limiting their practicality in real surgeries. 
We propose a wavelet–Boundary Element Method (BEM) f framework that encodes deformations from partial 3D shape feedback using multiscale wavelet descriptors. 
Coupling wavelets with BEM allows computation of the nonlinear motion–deformation mapping via boundary integrals, eliminating the need for volumetric meshes and enabling real-time control under occluded views. We validate our approach in simulation and on the da Vinci Research Kit (dVRK) using phantom organs and ex vivo animal tissue, achieving millimetre-level accuracy with contour, curve, and surface feedback. 
Comparative studies with Fourier-based and model-free methods show superior stability in dexterous tissue manipulation, addressing ill-conditioning through spatial–frequency localization. 
This framework enhances robotic manipulation in unstructured surgical environments, providing robust control and accurate tissue interaction despite partial observability. 
Our results demonstrate its potential to improve precision and safety in minimally invasive procedures.
</div>

<br>
<h1 style="text-align: center;">Simulations</h1>
We demonstrate the performance of 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_01.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_02.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_03.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_04.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_05.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_06.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_07.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_08.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_09.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_10.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_11.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_12.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>

<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Phantom_Resize_Sub_01.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Phantom_Resize_Sub_02.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Phantom_Resize_Sub_03.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Phantom_Resize_Sub_04.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Phantom_Resize_Sub_05.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Phantom_Resize_Sub_06.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>