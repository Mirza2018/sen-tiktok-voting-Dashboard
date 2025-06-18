import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    candidateList: build.query({
      query: (params) => ({
        url: `/candidate`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.candidate],
    }),

    candidateCreate: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/candidate/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.candidate],
    }),

    candidateEdit: build.mutation({
      query: (data) => {
        console.log(data);
        // return;
        return {
          url: `/candidate/update/${data.id}`,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: [tagTypes.candidate],
    }),
    candidateDelete: build.mutation({
      query: (id) => {
        console.log(id);
        // return;
        return {
          url: `/candidate/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.candidate],
    }),

    voteCreate: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/voting/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.vote],
    }),

    votingResult: build.query({
      query: (params) => ({
        url: `/voting/result`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.vote],
    }),
    singleVotingResult: build.query({
      query: (id) => ({
        url: `/voting/details/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.vote],
    }),
    //end
  }),
});

export const {
  useCandidateListQuery,
  useCandidateCreateMutation,
  useCandidateEditMutation,
  useCandidateDeleteMutation,
  useVoteCreateMutation,
  useVotingResultQuery,
  useLazySingleVotingResultQuery
} = adminApi;
