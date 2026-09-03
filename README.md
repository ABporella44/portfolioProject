# Selfown Portfolio — React App

A multi-page freelance-developer portfolio, rebuilt as a proper React project
(Vite + Tailwind CSS) from a screen recording of the original template.

## Structure

```
src/
  main.jsx              # React entry point
  App.jsx                # Page router (simple state-based switch, no react-router needed)
  index.css              # Tailwind entry
  data/
    content.js            # All site copy/data (skills, services, projects, blogs, etc.)
  components/
    Header.jsx
    Hero.jsx
    TypedRole.jsx
    PersonalDetails.jsx
    SkillsGrid.jsx
    ServicesSection.jsx
    Timeline.jsx
    EducationExperience.jsx
    ProjectsGrid.jsx
    BlogsGrid.jsx
    ContactForm.jsx
    Footer.jsx
    SectionHeading.jsx
    PageHero.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    ServicesPage.jsx
    ResumePage.jsx
    ProjectsPage.jsx
    BlogsPage.jsx
    ContactPage.jsx
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Icons are from `lucide-react` (used as stand-ins for the original brand logos/photos,
  since those weren't included in the recording).
- Navigation between "pages" is done with simple React state in `App.jsx` — swap in
  `react-router-dom` if you want real URLs per page.
- Styling uses Tailwind CSS utility classes throughout.
