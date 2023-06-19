import { Site, menuID } from "../../lib/info";
import { fetcher } from "./apiClient";

export function fetchLogoData() {
  return fetcher(`${Site}/wp-json/`);
}

export function fetchImageData(imageId: number) {
  return fetcher(`${Site}/wp-json/wp/v2/media/${imageId}`);
}

export function fetchMenuData() {
  return fetcher(`${Site}/wp-json/options/menu/${menuID}`);
}

export function fetchPostsHome() {
  return fetcher(`${Site}/wp-json/wp/v2/posts?per_page=3`);
}

export function fetchPostsPaginated(page: number) {
  return fetcher(`${Site}/wp-json/wp/v2/posts?per_page=10&page=${page}`);
}

export function getPosts() {
  return fetcher(`${Site}/wp-json/wp/v2/posts?per_page=10`);
}

export function getPost(slug: string) {
  return fetcher(`${Site}/wp-json/wp/v2/posts?slug=${slug}&per_page=1&_embed`);
}

export function getPage(slug: string) {
  return fetcher(`${Site}/wp-json/wp/v2/pages?slug=${slug}&per_page=1&_embed`);
}
