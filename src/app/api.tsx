import { Site, menuID } from "../../lib/info";

interface QueryParams {
  [key: string]: string | number | boolean;
}

function buildQueryString(params: QueryParams): string {
  const query = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
  return query ? `?${query}` : "";
}

async function fetchData(url: string, params?: QueryParams) {
  const query = params ? buildQueryString(params) : "";
  const response = await fetch(`${url}${query}`);
  const data = await response.json();
  const totalPages = Number(response.headers.get("X-WP-TotalPages"));

  return { data, totalPages };
}

export async function fetchLogo() {
  const url = `${Site}/wp-json/`;
  return fetchData(url);
}

export async function fetchImage(imageId: number) {
  const params: QueryParams = {};

  const url = `${Site}/wp-json/wp/v2/media/${imageId}`;
  return fetchData(url, params);
}

export async function fetchMenu() {
  const url = `${Site}/wp-json/options/menu/${menuID}`;
  return fetchData(url);
}

export async function fetchPosts(limit: number, page: number, tag?: string) {
  const params: QueryParams = {
    per_page: limit.toString(),
    page: page.toString(),
    ...(tag && { "filter[tag]": tag }),
  };

  const url = `${Site}/wp-json/wp/v2/posts`;
  return fetchData(url, params);
}

export async function fetchPost(slug: string) {
  const params: QueryParams = {
    slug,
    per_page: "1",
    _embed: true,
  };

  const url = `${Site}/wp-json/wp/v2/posts`;
  return fetchData(url, params);
}

export async function fetchPage(slug: string) {
  const params: QueryParams = {
    slug,
    per_page: "1",
    _embed: true,
  };

  const url = `${Site}/wp-json/wp/v2/pages`;
  return fetchData(url, params);
}

export async function fetchTags(searchTerm: string) {
  const params: QueryParams = {
    search: searchTerm,
  };

  const url = `${Site}/wp-json/wp/v2/tags`;
  return fetchData(url, params);
}