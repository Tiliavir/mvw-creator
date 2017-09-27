export const templatePug: string = `block variables

doctype html
//- xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"
html(lang="de")
  head
    meta(charset="utf-8")
    meta(http-equiv="X-UA-Compatible" content="IE=edge")
    meta(name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no")
    //- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags

    title= \`\${(referencedFile === "index" ? "" : \`\${title} | \`)}\${environment.siteTitle}\`

    if environment.key === "prod"
      base(href=environment.baseUrl)

    meta(name="author" content=environment.siteTitle)

    if description
      meta(name="description" content=description)

    if keywords
      meta(name="keywords" content=keywords)

    meta(property="og:type" content="website")
    meta(property="og:image" content=path.join(environment.baseUrl, "img/logo_color.png"))
    meta(property="og:locale" content="de_DE")
    meta(property="og:site_name" content=environment.siteTitle)
    meta(property="fb:admins" content="100000073380067")/

    style
      include ./styles/app.css
      block pageStyles

    link(rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=latin-ext")

    link(rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png")
    link(rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32")
    link(rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16")
    link(rel="manifest" href="/manifest.json")
    link(rel="mask-icon" href="/safari-pinned-tab.svg")
    meta(name="apple-mobile-web-app-title", content="MV Wollbach")
    meta(name="application-name", content="MV Wollbach")
    meta(name="msapplication-TileColor", content="#4a4a4a")
    meta(name="msapplication-TileImage", content="/mstile-144x144.png")
    meta(name="theme-color" content="#4a4a4a")

  body(itemscope itemtype=\`http://schema.org/\${schemaOrg || "WebPage"}\`)
    nav.navigation
      input#navigation-checkbox.navigation-checkbox(type="checkbox")
      .navigation-header
        a.navbar-brand(href="/") MVWC
        label.navigation-hamburger(for="navigation-checkbox")
          span
      .navigation-menu
        include ./topnavigation.pug

    block header

    img.mvw-logo-print.print-only(src="/img/logo_color.png" alt=environment.siteTitle)

    main.content(itemprop="mainContentOfPage")
      h1.page-header #{title}
        if subtitle
          small= \` \${subtitle}\`
      if referencedFile !== "index"
        | !{breadcrumb}
      block content

    footer.footer
      include ./footernavigation.pug

    script(src="/js/jquery.min.js")
    script
      include ./scripts/app.js
    script
      block pageScripts
`;
