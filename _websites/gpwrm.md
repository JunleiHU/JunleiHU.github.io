---
layout: page
title: Occlusion-Robust Autonomous Robotic Manipulation of Human Soft Tissues With 3-D Surface Feedback
# description: with background image
img: assets/img/12.jpg
related_publications: false
---

<h1 style="text-align: center;">Abstract</h1>
<div style="width: 75%; margin: 0 auto; text-align: justify;">
Robotic manipulation of 3-D soft objects remains challenging in the industrial and medical fields. Various methods based on mechanical modeling, data-driven approaches or explicit feature tracking have been proposed. A unifying disadvantage of these methods is the high computational cost of simultaneous imaging processing, identification of mechanical properties, and motion planning, leading to a need for less computationally intensive methods. We propose a method for autonomous robotic manipulation with 3-D surface feedback to solve these issues. First, we produce a deformation model of the manipulated object, which estimates the robots' movements by monitoring the displacement of surface points surrounding the manipulators. Then, we develop a 6-degree-of-freedom velocity controller to manipulate the grasped object to achieve a desired shape. We validate our approach through comparative simulations with existing methods and experiments using phantom and cadaveric soft tissues with the da Vinci research kit. The results demonstrate the robustness of the technique to occlusions and various materials. Compared to state-of-the-art linear and data-driven methods, our approach is more precise by 46.5% and 15.9% and saves 55.2% and 25.7% manipulation time, respectively.
</div>

<br>
<h1 style="text-align: center;">Grid-Point–Based Weighted Residual Method</h1>
<div style="margin: 0 auto; text-align: justify;">
The proposed shape representation, built from grid points and a deformation field, is discretized using the weighted residual method. This formulation captures the nonlinear relationship between the robot's motion and the surrounding displacement field, explicitly accounting for grasping points located on the surface.
</div>

<div class="row justify-content-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gpwrm_figure2a.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gpwrm_figure2b.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>
<h1 style="text-align: center;">Iterative Controller</h1>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gpwrm_figure3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>
<h1 style="text-align: center;">Simulations</h1>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/simu-3-flatten.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/simu-4-flatten.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/simu-3-surface.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/simu-4-surface.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

<br>
<h1 style="text-align: center;">Real-World Experiments</h1>

## Setup
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gpwrm_figure6.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<br>

## Validation on Different Materials
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/flatten.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/flatten2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/flatten3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/surface2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/surface3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/surface1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

<br>

## Validation on Phantom Colon without Occlusion
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_flatten.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/curve_colon.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/long_colon.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_s.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_radius1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_radius2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

## Validation on Phantom Colon with Occlusion
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_occluded_radius0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_occluded_radius1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_occluded1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_occluded2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phantom_occluded_s.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    The surface is occluded by the surgical instruments.
</div>

## Validation on Cadaveric Colon with Occlusion
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cad_plane.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cad_cylinder2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cad_ushape.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_radius1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_radius2.2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_s.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

## Validation on Cadaveric Colon with Occlusion
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cad_occluded.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_occluded_radius0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_occluded_radius1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_occluded_radius2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/colon_occluded_s.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    The surface is occluded by the surgical instruments.
</div>
