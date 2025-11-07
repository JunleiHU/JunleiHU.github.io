---
layout: page
title: Occlusion-Robust Autonomous Robotic Manipulation of Human Soft Tissues With 3-D Surface Feedback
# description: with background image
img: assets/img/12.jpg
related_publications: false
---

# Abstract
<div align="justify">
Robotic manipulation of 3-D soft objects remains challenging in the industrial and medical fields. Various methods based on mechanical modeling, data-driven approaches or explicit feature tracking have been proposed. A unifying disadvantage of these methods is the high computational cost of simultaneous imaging processing, identification of mechanical properties, and motion planning, leading to a need for less computationally intensive methods. We propose a method for autonomous robotic manipulation with 3-D surface feedback to solve these issues. First, we produce a deformation model of the manipulated object, which estimates the robots' movements by monitoring the displacement of surface points surrounding the manipulators. Then, we develop a 6-degree-of-freedom velocity controller to manipulate the grasped object to achieve a desired shape. We validate our approach through comparative simulations with existing methods and experiments using phantom and cadaveric soft tissues with the da Vinci research kit. The results demonstrate the robustness of the technique to occlusions and various materials. Compared to state-of-the-art linear and data-driven methods, our approach is more precise by 46.5% and 15.9% and saves 55.2% and 25.7% manipulation time, respectively.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Simulation_Sub_01.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
