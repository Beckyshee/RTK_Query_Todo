import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todo",
        method: "POST",
        body: todo,
      }),
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH", //patch: to update some part of the record. PUT is only used when we want to update the entire record.
        body: todo,
      }),
    } ),
      deleteTodo: builder.mutation( {
          query: ( {id}) => ( {
              url: `/todos/${id}`,
              method: 'DELETE',
              body: id
        })
    })
  }),
});


export const {useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation} = apiSlice