export default class TemplateDb {
  constructor() {
    this._apiBase =
      "http://localhost:8888/textTasks/wordpress-savigor/wp-json/";
  }
  getRes = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status : ${res.status}`);
    }
    return res.json();
  };

  getMedia = async () => {
    const res = await this.getRes("wp/v2/media/16");
    return res;
  };
  getPosts = async () => {
    const res = await this.getRes("wp/v2/posts");
    return res;
  };
  getMenu = async () => {
    const res = await this.getRes("wp-api-menus/v2/menus/4");
    return res;
  };
}
