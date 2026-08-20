# Specdest image asset map

All temporary reference images are stored locally here so they can be replaced one-by-one later.

## Size policy

- Images are WebP.
- Normal content images are generally 1200×1000 because they render around 550–650 px wide on desktop; this gives roughly 2× density for Retina displays.
- Wide section images are 1600×900 because they can render close to the full 1380 px content width.
- Hero poster is 1920×1080 because it can fill the viewport.
- Do not upload camera-original 4000–8000 px images directly.
- For a final image displayed at about 300×400 CSS px, target about 600×800 px for high-DPI screens. A true 300×400 file is enough only if 1× display sharpness is acceptable.
- Prefer WebP around quality 75–82. Aim for roughly 50–180 KB per normal image where practical.

## Replacement rule

Keep the same filename when replacing an image. The website will pick up the new file without code changes.

## Folder tree / page mapping

```text
images/
├─ home/
│  ├─ hero-poster.webp                 # / hero video poster
│  ├─ philosophy-working-session.webp  # / Technology Philosophy
│  ├─ case-workflow-platform.webp      # / featured case
│  └─ company-environment.webp         # / About Specdest section
├─ solutions/
│  ├─ overview.webp                    # /solutions
│  ├─ ai-technology.webp               # /solutions/ai-technology
│  ├─ automation.webp                  # /solutions/automation
│  ├─ product-development.webp         # /solutions/product-development
│  ├─ business-systems.webp            # /solutions/business-systems
│  ├─ poc-rd.webp                      # /solutions/poc-rd
│  └─ system-improvement.webp          # /solutions/system-improvement
├─ challenges/
│  ├─ overview.webp                    # /challenges
│  ├─ ai-adoption.webp                 # /challenges/ai-adoption
│  ├─ reduce-manual-work.webp          # /challenges/reduce-manual-work
│  ├─ launch-service.webp              # /challenges/launch-service
│  ├─ improve-existing-system.webp     # /challenges/improve-existing-system
│  ├─ technology-selection.webp        # /challenges/technology-selection
│  └─ shape-an-idea.webp               # /challenges/shape-an-idea
```

```text
├─ approach/
│  └─ project-flow.webp                 # /approach
├─ cases/
│  ├─ overview.webp                     # /cases
│  ├─ workflow-platform.webp            # /cases/workflow-platform
│  ├─ dog-face-recognition-ai.webp      # /cases/dog-face-recognition-ai
│  ├─ content-optimization.webp         # /cases/content-optimization
│  ├─ ai-chatbot.webp                   # /cases/ai-chatbot
│  └─ ecommerce-platform.webp           # /cases/ecommerce-platform
├─ company/
│  ├─ overview.webp                     # /company
│  ├─ about.webp                        # /company/about
│  ├─ philosophy.webp                   # /company/philosophy
│  └─ profile.webp                      # /company/profile
└─ contact/
   └─ contact-office.webp               # /contact
```

The challenge detail images currently use close reference photography, but each has its own file specifically so it can be replaced independently during the real photoshoot/asset-production phase.
