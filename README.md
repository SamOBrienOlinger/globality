# Globality

A React and Express integration prototype developed alongside a country-information coding challenge.

**React · Node.js · Express**

[Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

## What you can explore

- Express /api endpoint.
- React loading and error states.
- A development proxy between the frontend and backend.

> **Project notes:** The implemented endpoint returns a sample User message. The broader country-search idea in the original brief has not been implemented in this snapshot.

## Getting started

Requires Git, Node.js and npm. The frontend and backend are separate packages.

```bash
git clone https://github.com/SamOBrienOlinger/globality.git
cd globality
```

Start the backend in one terminal:

```bash
cd backend
npm install
npm start
```

From the repository root in a second terminal, start the frontend:

```bash
cd frontend/globality
npm install
npm start
```

Open [localhost:3000](http://localhost:3000). The backend listens on port 3001. Keep both development processes running.

## Repository guide

| Path | Purpose |
| --- | --- |
| [backend/package.json](backend/package.json) | Package dependencies and available commands |
| [frontend/globality/package.json](frontend/globality/package.json) | Package dependencies and available commands |

## Checks and review

Use Node.js and npm for the package commands below. Install the package dependencies first when the command uses a local build or test tool.

| Command | Purpose |
| --- | --- |
| `npm --prefix frontend/globality run build` | Create the configured application build |
| `npm --prefix frontend/globality test -- --watchAll=false` | Run the existing test suite |

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

Generate fresh results from the revision you are working on; historical test reports describe earlier runs.

## Deployment

No current hosted endpoint is established by this README. A backend deployment needs a configured runtime and its own service settings; GitHub Pages cannot execute the server-side application.

## Further reading

- [Documentation for frontend/globality](frontend/globality/README.md)

## Credits and reuse

Design decisions, original feature notes, historical testing evidence and detailed acknowledgements remain available in the preserved project record:

- [README.md · original project record](https://github.com/SamOBrienOlinger/globality/blob/321a34b37b40b1d637a9d3397e6d1edc18b36365/README.md)

No repository-level licence file is present in this snapshot. This README does not grant additional reuse permissions. Check with the relevant rights holders before reusing code, written content or assets.

## Support

Repository maintained in [Sam O’Brien-Olinger’s GitHub account](https://github.com/SamOBrienOlinger). For a problem or suggested improvement, [open an issue](https://github.com/SamOBrienOlinger/globality/issues) with the affected page or command, steps to reproduce, and expected behaviour.

[Back to top](#globality)
