# Echoes from This Land

**Echoes from This Land: Visioning and Revisiting the Truth & Reconciliation 94 Recommendations** is a collaborative art project involving artists and creators from Indigenous and non-Indigenous communities. Through discussion, learning, and artmaking, participants reflected on the Truth and Reconciliation Commission and its 94 Calls to Action.

The project brings these reflections into the visual realm through traditional and new media approaches to printmaking and art production.

Visit the website: [echoesfromthisland.ca](https://echoesfromthisland.ca){:target="_blank"}

## About this repository

This is a static website built with HTML, CSS, and vanilla JavaScript. It is published through GitHub Pages directly from the `main` branch. It does not require npm, a framework, or a build process.

The GitHub Pages publishing source must remain `main`. The root `CNAME` file must also remain in place so the custom domain continues to work.

## For collaborators

Before modifying the website, read the [website editing instructions](CHATGPT-INSTRUCTIONS.md).

When using ChatGPT for assistance:

1. Start a new ChatGPT conversation.
2. Upload `CHATGPT-INSTRUCTIONS.md`.
3. Upload the latest files affected by the proposed change. You do not need to upload the entire website.
4. Upload any new images and provide their captions, credits, intended order, and alternative text.
5. Describe the information you want to add or modify.
6. Ask for exact file paths and complete, copy-ready code.
7. Review and test all changes on a computer and cellphone before merging them into `main`.

Never upload passwords, GitHub access tokens, private keys, or other credentials.

Do not change the GitHub Pages publishing branch. The website must continue to deploy from `main`.

## Images

Optimize images before uploading them. Place images for each new exhibition space in their own folder inside `Images/`:

```text
Images/
└── space-name/
    ├── Space-Name-01.jpg
    ├── Space-Name-02.jpg
    └── Space-Name-03.jpg
```

Use filenames without spaces or special characters. Gallery images should use consecutive two-digit numbers. File and folder capitalization must match the HTML and JavaScript paths exactly because GitHub Pages is case-sensitive.

## Publishing changes

Work on a separate branch and open a pull request when review is needed. Approved changes must be merged into `main` to appear on the live website. Do not change the GitHub Pages publishing branch.

Before merging, check the affected pages on both a computer and cellphone. Confirm that links, images, navigation, keyboard controls, and responsive layouts continue to work.
