# Toxic-Comments-XAI-Study

## Overview of Project

The focus of this project was to examine how a user's background impacts users' engagement, trust, and understanding of Explainable Artificial Intelligence (XAI) systems.

Gaining insights into how a user's background can impact the explanation of XAI systems can aid in developing greater personalised systems tailored to the end user. There is emerging evidence that a user's background can affect how users interpret and understand explanations in XAI systems; however, are we falling down the rabbit hole of personalisation?

In this project, we developed and implemented an interactive explanatory debugging prototype that provided explanations for a toxic comment classifier to allow users to understand why predictions were made and to provide feedback back to the XAI system. We conducted an online user study on Prolific to investigate how users' background, specifically age, gender, previous experience and the Big 5 personality traits, have on participants' engagement, trust and perceived and actual understanding of the XAI system.

## Overview of Prototype

An interactive machine learning prototype for explanatory debugging user studies.

We developed the prototype as a web app that participants could access through a crowd-sourcing platform like Prolific. The prototype includes the explanatory debugging task and the necessary questionnaires and consent forms for conducting the user study.

The prototype was designed to ensure that it is modular and reusable for conducting similar interactive machine learning explanatory debugging user studies on crowd-sourcing websites, such as Prolific.

Our prototype was designed to utilise serverless functions, specifically Cloudflare Worker Functions, and a MongoDB database in the backend and React web app frontend.

## Repository structure

- `backend/`
  - Contains the backend code for the prototype
- `frontend/`
  - Contains the frontend code for the prototype
- `notebooks/`
  - Contains the notebooks used for the study and sampled test dataset from the [Jigsaw dataset](https://kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge)

_Each folder has its own README file specific to the folder_

## Prototype system design

![System Diagram](system_diagram.png)

## References

cjadams et al. (2017) ‘Toxic Comment Classification Challenge’. Kaggle. Available at: https://kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge.
