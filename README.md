# React-Portfolio

# Summaries
This portfolio was made with react where user can navigate to repository on github. Simply by clicking on the image then a view option will pop up. Also, users can navigate to "About" page where it has a brief history about myself. A contact page will have all the information as such as email, LinkedIn, and GitHub.

# Technologies Used
- React: JavaScript library for building user interfaces
- CSS: used to style elements on the page
- JavaScript: high level programming language
- Node.js: JavaScript runtime, allows users to run JavaScript on the server.
- Antd: a library for CSS framework and I used it for icons.
- Bootstrap: a library for CSS framework.
- GitHub: used to deploy the application.

# Code Snippet
```js
constructor(props){
        super(props);
        this.state = {
          title: "Tai M. Le",
          headerLinks: [
            {title: "About", path: "/"},
            {title: "Portfolio", path: "/about"},
            {title: "Contact", path: "/contact"}
          ],
          home: {
            title: "Hello Everyone",
            subTitle: 'Checkout my projects below'
          },
          about: {
            title: "Portfolio"
          },
          contact: {
            title: "My Contact"
          }
        }
      }
```
This portion of codes was setup for navigation to home, about and contact page. They were called late on in render function.
“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow.

# Author
- [LinkedIn](www.linkedin.com/in/tu-tai-le-2a9646139)
- [GitHub](https://github.com/TaiLe96)
