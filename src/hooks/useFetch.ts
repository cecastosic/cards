import useSwr from "swr";

const baseUrl = "https://my-json-server.typicode.com/cecastosic/cards/";

export const useFetch = (
  path: string,
  name?: string
): {
  data: any;
  error: any;
} => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url: string = name ? baseUrl + path + "/" + name : baseUrl + path;
  const { data, error } = useSwr(url);

  return { data, error };
};
