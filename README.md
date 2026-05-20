## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

---

# Calorie Tracking App with AI Meal Recognition — Product & Engineering Brief

## Product Summary

A mobile application that allows users to:

- Track meals and daily calorie intake
- Use the phone camera to scan meals
- Detect individual food items in a meal
- Estimate calories/macros for each detected food
- Let users confirm/edit detected items before logging
- Maintain meal history and nutrition summaries
- Manually add foods the AI missed
- Build daily calorie goals and progress tracking

The core differentiator is AI-powered meal recognition through camera scanning integrated directly into the food logging flow.

## Recommended Tech Stack (2026 Market Standard)

### Mobile App
Recommended: React Native + Expo

#### Why

- Largest hiring market alongside Flutter
- Fast cross-platform development
- Excellent camera and AI SDK support
- Single codebase for iOS + Android
- Easier MVP velocity than native Swift/Kotlin

#### Stack

| Area             | Technology                     |
| ---------------- | ------------------------------ |
| Mobile Framework | React Native                   |
| App Runtime      | Expo                           |
| Language         | TypeScript                     |
| UI Components    | NativeWind or Tamagui          |
| State Management | Zustand                        |
| Forms            | React Hook Form                |
| Navigation       | React Navigation               |
| Networking       | Axios                          |
| Authentication   | Firebase Auth or Supabase Auth |

### Backend Recommendation
Recommended: Node.js + NestJS

#### Why

- Massive hiring ecosystem
- Strong TypeScript support
- Excellent AI/API integration
- Scales well for SaaS/mobile apps
- Clean architecture for long-term maintainability

#### Stack

| Area              | Technology             |
| ----------------- | ---------------------- |
| Backend Runtime   | Node.js                |
| Backend Framework | NestJS                 |
| Language          | TypeScript             |
| API               | REST initially         |
| ORM               | Prisma                 |
| Database          | PostgreSQL             |
| File Storage      | AWS S3                 |
| Hosting           | AWS / Railway / Render |
| Authentication    | JWT + OAuth            |

### AI / Camera Recognition Recommendation

#### Recommended Architecture

#### MVP Approach (Fastest & Most Practical)

Use a food recognition API first instead of training custom ML models.

This massively reduces:

- cost
- time
- ML complexity
- data labeling requirements

#### Recommended APIs

- Option A — Best MVP Choice
  - CalorieMama API

    Provides:

    - Food recognition from images
    - Portion estimation
    - Nutrition estimation
- Option B
  - LogMeal API

    Strong:

    - meal segmentation
    - food detection
    - nutrition estimation
- Option C (Advanced Future Upgrade)
  - Google Vertex AI Vision + custom nutrition pipeline

    Better for:

    - custom AI
    - scalability
    - proprietary dataset training

    Not recommended for MVP due to complexity.

#### Recommended MVP Architecture

Mobile App
    ↓
Backend API
    ↓
AI Food Recognition API
    ↓
Nutrition Database

The backend should act as the intermediary rather than calling AI APIs directly from the phone app.

Why:

- protects API keys
- enables caching
- lets you swap providers later
- allows logging + analytics

## Core MVP Features

### Authentication

- Sign up
- Login
- Password reset

### User Profile

- Weight
- Height
- Goal calories
- Daily calorie target

### Meal Logging

- Breakfast/lunch/dinner/snacks
- Manual food search
- Custom foods

### Camera Scanning

- Take/upload meal image
- AI detects food items
- User reviews detected foods
- User edits quantities/calories
- Confirm and log meal

### Nutrition Tracking

- Daily calories
- Macro tracking
- Meal history

### Dashboard

- Calories remaining
- Daily progress
- Weekly trends

## Suggested Database Entities

### User

- id
- email
- password_hash
- calorie_goal
- weight
- height

### Meal

- id
- user_id
- timestamp
- total_calories

### MealItem

- id
- meal_id
- food_name
- calories
- protein
- carbs
- fats
- quantity

### FoodScan

- id
- image_url
- raw_ai_response
- user_confirmed

## Engineering Plan

### Phase 1 — Discovery & Product Definition

#### Tasks

- Define user personas
- Define onboarding flow
- Define nutrition goals system
- Define AI scan workflow
- Define editable meal review UX
- Define data/privacy requirements
- Create wireframes
- Create design system
- Define API contracts

### Phase 2 — Backend Foundation

#### Tasks

- Initialize NestJS backend
- Configure PostgreSQL database
- Configure Prisma ORM
- Create authentication system
- Create JWT auth middleware
- Create user profile endpoints
- Create meal CRUD endpoints
- Create meal item CRUD endpoints
- Create image upload pipeline
- Configure cloud storage
- Add API validation
- Add logging/error handling
- Add rate limiting

### Phase 3 — Mobile App Foundation

#### Tasks

- Initialize Expo React Native app
- Configure TypeScript
- Configure navigation
 Configure state management
 Configure API client
 Create auth screens
 Create onboarding screens
 Create dashboard screen
 Create meal history screen
 Create meal details screen
 Create profile screen
Phase 4 — Camera & AI Integration
Tasks
 Integrate phone camera access
 Implement image capture flow
 Compress/optimize uploaded images
 Send image to backend
 Integrate AI food recognition API
 Parse AI recognition response
 Match foods to nutrition data
 Create food review UI
 Create quantity editing UI
 Allow adding missed foods
 Allow deleting incorrect foods
 Save confirmed meals
Phase 5 — Nutrition & Tracking
Tasks
 Daily calorie totals
 Macro totals
 Goal progress tracking
 Historical analytics
 Weekly summaries
 Daily reminders/notifications
Phase 6 — Production Readiness
Tasks
 Error tracking
 Analytics integration
 Performance optimization
 App Store assets
 Google Play assets
 E2E testing
 Security review
 Privacy policy
 Terms of service
 CI/CD pipeline
 App deployment
Recommended MVP Scope

To avoid overbuilding, the MVP should ONLY include:

Include
Email authentication
Camera meal scanning
AI calorie estimation
Manual editing
Daily calorie tracking
Meal history
Exclude Initially
Social features
Barcode scanning
Wearable integrations
Custom ML models
Premium subscriptions
Recipe generation
Fitness integrations
Gamification
Suggested Timeline
Phase	Duration
Discovery + Design	1–2 weeks
Backend Foundation	2 weeks
Mobile Foundation	2 weeks
AI Integration	2–3 weeks
Testing + Polish	2 weeks
Estimated MVP
~8–11 weeks for one experienced engineer
Key Technical Risks
1. AI Recognition Accuracy

Food recognition is imperfect, especially:

mixed foods
sauces
portion sizing

The UX must assume correction/editing is required.

2. Portion Estimation

Calories depend heavily on portion size.

Potential future improvements:

depth estimation
reference objects
multiple camera angles
AI fine-tuning
3. Nutrition Database Quality

Need reliable food nutrition data.

Potential sources:I

USDA FoodData Central
Nutritionix API
Open Questions (Do Not Assume)
Product Questions
Should users be able to create custom foods?
Should macros (protein/carbs/fat) be tracked or only calories?
Should users be able to share meals socially?
Will the app support barcode scanning?
Will the app support offline logging?
Is the app subscription-based or free?
Do you want Apple Health / Google Fit integration?
Should users track weight changes over time?
Should the app support multiple languages?
Should users be able to save recurring meals?
AI Questions
Is approximate calorie estimation acceptable for MVP?
How important is detection accuracy vs speed?
Should the app identify ingredients separately in mixed meals?
Should the app allow multiple meal photos?
Should users be able to manually draw/select foods from the image?
Recommendation

The best path is:

React Native + Expo
NestJS backend
PostgreSQL
Third-party AI food recognition API for MVP
Replace with custom AI later only if traction justifies it

That gives:

fastest development
lowest technical risk
strong scalability
excellent hiring ecosystem
cross-platform delivery with one team