import useAxiosHook from "@/Hooks/useAxios";
import { DragNDropItemType } from "../Types";
import { AxiosResponse } from "axios";
const url = `/todo`;
type getTodoType = { date: string; content: DragNDropItemType[] };
type postTodoType = Pick<
  DragNDropItemType,
  "contentId" | "content" | "checked"
> & { date: string };
export function useTodoApi() {
  let api = useAxiosHook();
  return {
    getTodoApi(date: string): Promise<AxiosResponse<getTodoType>> {
      let _url = url;
      return api.get({
        url: _url,
        query: { date },
      });
    },
    postTodoApi(query: { data: postTodoType[] }) {
      let _url = url;
      console.log(query,"@@@@")
      return api.post({
        url: _url,
        query:query,
      });
    },
  };
}
