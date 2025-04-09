# LinkedIn-Snapshot
A streamlined professional networking feature that enables users to quickly discover and connect with relevant professionals through an intuitive card-based interface. Project still in progress. 

I have also written out a PRD for this project which can be found here: https://docs.google.com/document/d/14O9ElLtFf4QkjCWrWU6BnIUbzZilS0dcuWZumMNi8eI/edit?usp=sharing
The PRD is NOT represeantitive of the actual project, but more for perosnal reasons as I was exploring how to write out PRDs and used this project as an example to do so. It contains older information and was from when I first started out with this project. 

## Key features include:

Profile card interface with essential information
Similarity indicators highlighting shared attributes
Quick connection actions
AI-powered recommendation engine
Custom filtering options

## Business Impact

Enhanced connection relevance through similarity scoring
Streamlined networking experience
Improved quality of professional connections
Expected to influence users’ connection requests by 30%,

## Technical Implementation

This repository contains:
* Product Requirements Document - Comprehensive documentation of features, requirements, and success metrics
* React Component - Profile card component with interactive elements
* Design Assets - UI mockups and design system
* AI Recommendation Algorithm - BERT-based similarity matching for professional profiles
* More upon further development

The implementation uses:
* React for the frontend
* Tailwind CSS for styling
* Lucide React for icons
* ShadCN UI components
* BERT (Bidirectional Encoder Representations from Transformers) for generating profile embeddings
* Cosine similarity for matching profiles based on semantic similarity

### Prerequisites:
* Node.js 16+
* npm or yarn
* Python 3.8+ (for BERT implementation)
* PyTorch or TensorFlow (for running BERT models)
