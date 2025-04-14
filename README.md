# Oscar Torres Frontend Technical Assessment

Hello Nicolas! 👋🏼

Below you can find some relevant sections regarding my assessment.

Thanks for your review!

## Considerations

- Pushed everything in a few commits just for speed and completely focus on the task. I know how to write good commits with Conventional Commits as [you](https://github.com/oscartorres-10/connect-wallet-svelte/commits/main/) [can](https://github.com/oscartorres-10/obsidian-count-tasks/commits/main/) [see](https://github.com/oscartorres-10/spacex/commits/main/).
- Used multiple "hardcoded" values with Tailwind classes with the square bracket notation. I think that's not the best approach, but I did it to match it as close as possible to the design. I think the ideal approach is to remain inside Tailwind default provided classes, as that's one of the benefits Tailwind provides.

## Improvements

- Loading state could be done with [Suspense](https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading) for a better integration with React. Also an [Skeleton](https://ui.shadcn.com/docs/components/skeleton) would be nicer.
- Error handling could be done with an [Error Boundary](https://react.dev/reference/react/useTransition#displaying-an-error-to-users-with-error-boundary).
- Unit tests could be added with a tool like Jest

## Gen AI usage

- Used it to scaffold all components structure, create the initial files, etc.
- Used it to create mock data.
- Used it to build the UI incrementally, verifying every change.
- Used AirOps Copilot to build the workflow that returns the mock data.

## Extras

- Deployed it via Vercel: <https://fe-technical-assessment-oscar-torres.vercel.app/>

---

<details>
  <summary>
    Instructions
  </summary>

## Frontend Technical Assessment 🚀

### Overview

We want to see your skills with React and TypeScript. You'll be given a Figma design to replicate in a Vite project using Tailwind CSS. Plus, you'll use an AirOps app to fetch and display data.

### What You'll Do
1. **Fork the Repo**: You'll get a barebones Vite + React + TypeScript + Tailwind project. Fork it and get started.
2. **Design Implementation**: Copy the Figma design into your project. Make it look as close as possible.
3. **Data Integration**: [Create an AirOps App](https://docs.airops.com/getting-started/readme/workflow-quick-start) that returns the necessary mock data for the design and [execute it](https://github.com/airopshq/airops-js) to display the mock data! 📊

![Example of Airops App for the Data Integration](https://github.com/airopshq/fe-technical-assessment/blob/main/public/airpos-app-run-once-example.png)

> Note: if you need to do any create, edit or delete, it doesn’t need to persist anywhere outside of the React state.

### Time Frame
Try to finish within 3 hours. ⏰

### What We Care About
- **Code Quality**: Clean, readable, and well-structured code. 💻
- **Design Accuracy**: Your app should look like the Figma design. 🎨
- **Functionality**: Your app should fetch and display data correctly. 🔄

### How to Submit
1. Fork our repo.
2. Make your changes.
3. Push to your forked repo.
4. Share the link to your repo with us. 📤
5. **Important**: Do **not** create a pull request to the original repository.

### Tools
- React ⚛️
- TypeScript 📝
- Tailwind CSS 🎨
- Vite ⚡

### Getting Started
1. **Fork the Repo**:
   ```bash
   git clone [your-forked-repo-link]
   cd [repository-directory]
2. Install Dependencies:
   ```bash
   Copy code
   npm install
   ```
3. Start the Dev Server:
   ```bash
   Copy code
   npm run dev
   ```
4. Design Link: [Figma Design](https://www.figma.com/design/Tar7tYkKqTuaFdGQFgGthy/Technical-Assessment?node-id=0-1&t=F0fzk15QtPDufiX4-1)
5. **Relevant AirOps Links**:
    - [Workflow quick start](https://docs.airops.com/getting-started/readme/workflow-quick-start)
    - [Client SDK](https://github.com/airopshq/airops-js)
    - [API](https://docs.airops.com/workflow-execution/api)

That's it! If you have any questions, just ask. Good luck! 🍀
</details>
