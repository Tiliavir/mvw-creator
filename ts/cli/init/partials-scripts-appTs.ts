export const appTs: string = `class App {
  public static initialize(): void {
    App.fixAnchors();
  }

  private static fixAnchors(): void {
    const pathname = window.location.href.split("#")[0];
    $("a[href^='#']").each((i, e) => {
        const $elem = $(e);
        $elem.attr("href", pathname + $elem.attr("href"));
    });
  }
}

$(() => { App.initialize(); });
`;
