---
layout: page
title: Autonomous Robotic Exploration on Unknown Soft Object 
# description: with background image
img: assets/img/12.jpg
# related_publications: true
---

<h1 style="text-align: center;">Abstract</h1>
<div style="width: 75%; margin: 0 auto; text-align: justify;">
Robotic exploration of unknown soft objects presents significant challenges for autonomous systems due to unpredictable deformations and shape changes during manipulation. To address this, we propose a framework that integrates topology-aware 3D reconstruction with a topology-guided motion planner, enabling the discovery and reconstruction of previously hidden or concave regions. This topology-aware 3D reconstruction employs a novel representation of deformable objects by combining Cylinder Čech Complexes with point clouds, enabling rapid tracking of significant topology changes and detection of non-manifold boundaries.The topology analysis and canonical reconstruction guide motion planning by optimising grasp points and planning trajectories to reveal previously unseen surfaces through two actions: turning over and stretching. We validated our algorithm through simulations and experiments using the \textit{da Vinci} Research Kit, demonstrating successful exploration with two or three manipulators. We showed it can fully explore surfaces of two everyday objects, a beanie and a rubber glove, and two cadaveric organs, a liver and a colon, within seven manipulations. Our method achieved a 45.6% improvement in 3D reconstruction accuracy compared to state-of-the-art point-cloud-based methods while also demonstrating the capability to detect and fix non-manifold geometry.
</div>
<br>
<h1 style="text-align: center;">Cadaveric Experiment</h1>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/PPT_video_5_colon.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Robotic exploration on cadaveric colon.
</div>

<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/ppt_video_4_liver.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Robotic exploration on cadaveric liver.
</div>

<br>
<h1 style="text-align: center;">Daily Object Experiment</h1>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/ppt_video_2_glove.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Robotic exploration on a glove.
</div>

<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/ppt_video_3_beanie.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Robotic exploration on a beanie.
</div>

