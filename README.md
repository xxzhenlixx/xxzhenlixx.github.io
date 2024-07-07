# Website for ZhenLi.eu

## Installation
1. Install Ruby programming language (Debian/Ubuntu):

    ```sh
    $ sudo apt-get install ruby-full
    ```

2. Configure Ruby Gems by adding the following lines to `~/.bashrc`:

    ```
    # Configure Ruby Gems
    export GEM_HOME="${HOME}/.gems"
    export PATH="${HOME}/.gems/bin:${PATH}"
    ```

3. Install GitHub pages environment:

    ```sh
    $ gem install github-pages
    ```

   This will install the Jekyll static website generator, which will be used in
   the following sections.


## Create Project
Creating a new Jekyll project can be done as following:

```sh
$ jekyll new --blank --skip-bundle <website_directory>
```


## Development environment
Jekyll can also act as a local server to preview the website. To start this in
the terminal, navigate to the repository root and issue the following command:

```sh
$ jekyll serve
```

In the browser, navigate to http://localhost:4000/ to preview the website. When
saving changes to blog posts or updating image files, the website is
automatically re-generated and the changes are visible in the browser after a
page refresh.


## Blog writing
### Posts
The website is built like a blog with several categories. Each new blog post is
a Markdown file inside a category's subdirectory of the `_posts/` directory.
Filename should be in the following format: `<year>-<month>-<day>-<title>.md`,
where the `<title>` may only contain lowercase letters, numbers and hyphens.
For example, `2024-12-31-end-of-year-2024.md`.

Each blog post should have the following configuration at the top:

```yaml
---
layout: post

title: <human readable title of the article>
preview_image_path: <preview image path>
---
```

Where `<preview image path>` is the path to the preview image, relative to the
repository root. Images are to be placed in the `images/` directory (details
below). For example, `/images/post-preview.jpg`.

The rest of the blog post is processed as [Markdown][markdown-guide].

[markdown-guide]: https://www.markdownguide.org/cheat-sheet/

### Post preview
It is recommended to autogenerate a text preview of the blog post, shown on the
homepage and overview pages. This can be done by "splitting" the blog post
content into an introductory text and a more in-depth text with the
`<!-- more -->` marker. For example:

```markdown
Today our cat was laying in such a cute position.

<!-- more -->

Usually he doesn't lay like this, because he does not know the meaning behind
the word "elegance".
```

This will show both paragraphs on the blog post page and only the first
paragraph on the homepage and overview pages.

### Images
Hosted images are to be placed in the `images/` directory. They can then be
included in the content using the standard Markdown image syntax. For example,
`![Cat laying cute on belly](/images/cat.jpg)`, where the part between square
brackets is the image description.

### YouTube videos
Embedding YouTube videos can be done by including the following line:

```jekyll
{% include youtube.html video="<video code>" %}
```

Where the video code can be taken from the URL of the YouTube video to embed,
For example, in the URLs https://www.youtube.com/watch?v=dQw4w9WgXcQ and
https://youtu.be/dQw4w9WgXcQ, the video code is `dQw4w9WgXcQ`.
