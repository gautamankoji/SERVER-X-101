# SERVER-X-101

## Key Notes:

- Do not edit the public directory.
- Do not attempt to edit directly as it is an active site.
- Submit a pull request (PR) for your updates.

Instructions to start contributing:

For Articles:

- Navigate to the `content` directory.
- Then to the `articles` directory.
- Create a folder using snake_case with your article title, e.g., `article_name`.
- Add an `img` folder for images related to your article inside the created directory.
- Add a `featured.png` file for the card image of your article.
- Create an `_index.md_` file and add your article in Markdown format.
- Inside `_index.md`, use the following template format:

Articles template:

```md
---
title: Article Title
description: Small Description for Your Article
author: Author Name
lastmod: 2024-03-18T00:00:00-00:00 (example)
github: link (if any GitHub link is available; otherwise, do not add)
tags:
  - tag1
  - tag2

---

From here, you can write your article...
```

For Contests:

- Navigate to the `content` directory.
- Then to the `contests` directory.
- Create a folder using snake_case with your contest title, e.g., `contest_name`.
- Add an `img` folder for images related to your contest inside the created directory.
- Add a `featured.png` file for the card image of your contest.
- Create an `_index.md_` file and add your contest in Markdown format.
- Add information about the contest, a small description, or any images if available.
- Create `problem_1.md` and add the first problem name of the contest inside the `contest_name` directory that you created.
- Similarly, create content for other problems.
- Inside each problem's Markdown file, use the following template format:

Contests template:

```md
---
title: Contest Title
description: Small Description for Your Contest
author: Author Name
lastmod: 2024-03-18T00:00:00-00:00 (example)
practice: true | false (for contests which come under practice)
vignan-challenges: true | false (for contests which come under vignan challenges)
tags:
  - tag1
  - tag2

---

From here, you can write your article...
```

If you want to contribute to the website layout:

- You can refer to the HUGO [documentation](https://gohugo.io/documentation/) for more information.
- You can use the `layout` directory for the layout of the website.

Thank you for your contribution!
