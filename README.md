# Portfolio

> Made with vite and love.

## Stack

I have learned many things since I created my first portfolio and I wanted to dedicate a whole section to explain why I did what I did in this new version.

### Vite

This portfolio was made using the [vite](https://vitejs.dev/) build tool, specifically the `react-ts` template. The reason behind suck decision is quite simple: this portfolio was meant to be a small project, therefore using a framework would have been an unnecessary extension.

Even though I like to work with vanilla javascript, Typescript is my way to go most of the time. Having a strongly programming language it's always a good way to do things, hence the reason to pick this specific vite template.

### Styling

I was thinking about using sass to style my project, but I ended up installing [tailwind](https://tailwindcss.com/docs/installation) to handle all the styling. The main reasons were:

- **Responsive design**: tailwind has ready-to-go utility variants to build adaptative user interfaces. Why should I reinvent the wheel?
- **Customization**: I can customize the pre-existing classes to fit my needs.
- **Design system**: Let's be real, their design system is just beautiful.

### State management

I love using redux, but there are some things that are just over-complicated for no reason. That's why I decided to go with my favorite redux framework: [rematch](https://rematchjs.org/). It provides redux's best practices without boilerplate, no need of thunks, no switch statements and typescript support out of the box.

### Testing and code coverage

I've been using Jest to test my code for quite some time, so that library was my first choice for this project. Anyway, I came across [Vitest](https://vitest.dev/) as I was planning the creation of my portfolio.

After taking a look at the documentation and testing Vitest on smaller projects, I decided I would give it a try. After all, a testing framework created specifically for Vite was a great fit for me, and I don't regret that decision.

### i18n

I decided to have a way to change my portfolio's language in a single click and this is why there is a i18n library in it: [reacti18next](https://react.i18next.com/). Nothing fancy or complicated.

## To-do

- [x] i18n support for Spanish and English languages
- [ ] Key bindings for easier navigation
- [ ] Interactive guide
- [x] Unit tests
- [ ] Integration tests
- [x] Code coverage

## Contact

- Email: <enrique.bermudez.dev@gmail.com>
- LinkedIn: [https://www.linkedin.com/in/enbermudez/](https://www.linkedin.com/in/enbermudez/)
- Github: [https://github.com/enbermudas](https://github.com/enbermudas)
