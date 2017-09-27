export const printScss: string = `$breadcrumb-print-color: #000;

.print-only {
  display: none;
}

@media print {
  html,
  body {
    background: none;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 12pt;
    padding-top: 0;
  }

  header,
  .navbar {
    display: none;
  }

  h1 {
    font-size: 18pt;
  }

  h2 {
    font-size: 16pt;
  }

  h3 {
    font-size: 14pt;
  }

  .img-responsive {
    max-height: 45vh;
  }

  img,
  tr,
  td,
  table {
    page-break-inside: avoid;
  }

  .mvw-logo-print {
    margin: 0 auto;
  }

  .content {
    width: 95%;
  }

  .breadcrumb {
    color: $breadcrumb-print-color;
    font-size: 8pt;

    a {
      &::after {
        display: none;
      }
    }
  }
}
`;
