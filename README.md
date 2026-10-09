# Rishav Nanda — Developer Portfolio Website (`rishav.work`)

A high-performance, modern, and data-driven developer portfolio landing page engineered for **Rishav Nanda** (Frontend & Full-Stack Software Engineer). Inspired by the aesthetics of [abhishekworks.com](https://www.abhishekworks.com/), this project features a deep cosmic glassmorphic theme, interactive particle canvas, dynamic skill matrix with search & filtering, project modal deep-dives, career roadmap, and a dedicated contact form powered by **Web3Forms**.

---

## 🌟 Key Highlights & Design System

- **100% Data-Driven Architecture (`content.json`)**: All resume content, bio, metrics, skill categories, projects, career milestones, certifications, and contact settings are driven by `src/content.json` (and mirrored in `public/content.json`). Updating the JSON immediately updates the UI without touching JSX.
- **Modern Cosmic Aesthetic**: Tailored deep indigo backdrop (`#070514`), glassmorphism cards (`backdrop-filter: blur(14px)`), radiant gradient borders, and reactive hover micro-animations.
- **Interactive Particle Background**: Ambient HTML5 canvas rendering floating nodes and constellations with mouse-proximity physics.
- **Interactive Skills Matrix**: Filter by category (*Frontend & UI*, *Backend & Cloud*, *DevOps & Infra*, *Testing & Core Tools*) or search in real time across all technologies.
- **Project Deep-Dives**: Detailed modal view for inspecting architectural decisions, latency reductions, and tech stacks for *LOOK*, *Accounts Payable Automation*, *E-Invoice Reconciliation*, and *ISRO Telemetry Simulation*.
- **Dedicated Web3Forms Contact Section**: Functional contact form sending submissions to `contact@rishav.work` via the Web3Forms API, complete with submission states, toast alerts, and a one-click copy button for the email address.
- **Zero Exposure of Mobile Number**: In strict accordance with requirements, no phone number is exposed anywhere on the website.
- **Vercel & Spaceship Domain Ready**: Pre-configured with `vercel.json` for single-page routing and caching, ready to map to `rishav.work`.

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── content.json          # Public copy of content data
│   ├── favicon.svg           # Custom branded 'RN' monogram favicon
├── src/
│   ├── components/
│   │   ├── About.tsx         # Engineering philosophy & 4 core pillars
│   │   ├── Contact.tsx       # Dedicated Web3Forms form & email copy
│   │   ├── Credentials.tsx   # Education (VSSUT) & Certifications (AWS, Cisco)
│   │   ├── Experience.tsx    # Work history timeline (Incture SE, Intern, ISRO)
│   │   ├── Footer.tsx        # Footer, copyright & scroll-to-top
│   │   ├── Hero.tsx          # Landing headline, CTAs & 4 key metrics
│   │   ├── Icons.tsx         # Custom brand SVG icons (GitHub, LinkedIn, etc.)
│   │   ├── Navbar.tsx        # Sticky glass navbar with live availability badge
│   │   ├── ParticleBackground.tsx # Interactive canvas particle constellation
│   │   ├── Projects.tsx      # Bento project grid with deep-dive modal
│   │   └── Skills.tsx        # Searchable, filterable technical skills matrix
│   ├── content.json          # Master data source for the whole website
│   ├── App.tsx               # Main page layout orchestrator
│   ├── index.css             # Vanilla CSS design tokens & animations
│   ├── main.tsx              # React entry point
│   └── vite-env.d.ts         # Vite client type definitions
├── index.html                # SEO meta tags, OpenGraph, Plus Jakarta Sans & JetBrains Mono
├── package.json              # Project scripts and dependencies
├── tsconfig.json             # TypeScript configuration
├── vercel.json               # Vercel deployment & routing configuration
└── README.md                 # Documentation and setup guide
```

---

## 🛠️ Local Development

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v22)
- **npm** v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The site will run locally at `http://localhost:5173/` with hot module replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
This compiles TypeScript and outputs optimized production assets into `dist/`.

---

## ⚙️ Content & Customization Guide (`content.json`)

To update any content on your portfolio:
1. Open [`src/content.json`](file:///c:/Users/rishav.nanda/OneDrive%20-%20Incture/Desktop/Portfolio/src/content.json).
2. Edit any section:
   - **`personal`**: Name, role, tagline, social links, location.
   - **`stats`**: Hero metric values and subtext.
   - **`skillsCategories`**: Add or remove technical skills, adjust proficiency levels (*Expert*, *Advanced*, *Master*), or toggle `highlight: true/false`.
   - **`projects`**: Add new projects, update metrics, or change descriptions.
   - **`experience`**: Update current responsibilities or add new milestones.
   - **`contact`**: Update email, turnaround message, or Web3Forms access key.

---

## 📬 Web3Forms Setup

The contact form is already integrated with **Web3Forms** (`https://api.web3forms.com/submit`).

### How to use your own Web3Forms key:
1. Go to [web3forms.com](https://web3forms.com/) and enter `contact@rishav.work` to receive your free Access Key.
2. Open `src/content.json` and find `contact.web3FormsAccessKey`.
3. Replace the key with your generated Access Key:
```json
"contact": {
  "web3FormsAccessKey": "YOUR-ACTUAL-ACCESS-KEY-HERE",
  "email": "contact@rishav.work"
}
```
All form messages sent by visitors will automatically arrive at `contact@rishav.work`!

---

## 🚀 Deploying to Vercel & Hosting on `rishav.work` (Spaceship.com)

### Step 1: Deploy to Vercel
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Rishav Nanda portfolio"
   git branch -M main
   git remote add origin https://github.com/rishavnanda56/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live within seconds on a `.vercel.app` URL.

---

### Step 2: Connect Domain `rishav.work` from Spaceship.com

1. In your **Vercel Project Dashboard**:
   - Go to **Settings** > **Domains**.
   - Enter `rishav.work` and click **Add**.
   - Also add `www.rishav.work` (Vercel will prompt you to automatically redirect `www.rishav.work` to `rishav.work`).

2. In your **Spaceship.com Account**:
   - Go to **Domain Management** / **DNS Manager** for `rishav.work`.
   - Add the following DNS Records:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or leave empty) | `76.76.21.21` | Automatic / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 3600 |

3. **Verify DNS Propagation**:
   - Back in Vercel, click **Refresh** / **Verify**.
   - Once DNS propagates (typically 5 to 30 minutes), Vercel will automatically provision a free, auto-renewing **SSL/TLS certificate** for `https://rishav.work`.

---

## 📄 License & Credits

- Designed & engineered by **Rishav Nanda**
- Domain: [rishav.work](https://rishav.work)
- Contact: [contact@rishav.work](mailto:contact@rishav.work)
