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
    upcomingVote: build.query({
      query: (params) => ({
        url: `/voting/upcoming_voting`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.vote],
    }),
    deleteVote: build.mutation({
      query: (id) => ({
        url: `/voting/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.vote],
    }),

    singleVotingResult: build.query({
      query: (id) => {
        console.log(id);

        return {
          url: `/voting/details/${id}`,
          method: "GET",
        };
      },
      // providesTags: [tagTypes.vote],
    }),
    userList: build.query({
      query: (params) => ({
        url: `/users/list`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.users],
    }),

    totaCount: build.query({
      query: () => ({
        url: `/users/total_count`,
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),
    userOverview: build.query({
      query: () => ({
        url: `/users/user_overview?year=2025`,
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),

    userAction: build.mutation({
      query: (data) => ({
        url: `/users/action/${data.id}`,
        method: "PATCH",
        body: data.data,
      }),
      invalidatesTags: [tagTypes.users],
    }),
    updateVoting: build.mutation({
      query: (data) => ({
        url: `/voting/update/${data.id}`,
        method: "PATCH",
        body: data.data,
      }),
      invalidatesTags: [tagTypes.vote],
    }),
    timmerSet: build.mutation({
      query: (data) => ({
        url: `/voting/add_to_upcoming`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.timer],
    }),

    timmerGet: build.query({
      query: () => ({
        url: `/voting/get_upcoming_time`,
        method: "GET",
      }),
      providesTags: [tagTypes.timer],
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
  useLazySingleVotingResultQuery,
  useSingleVotingResultQuery,
  useUserListQuery,
  useUserActionMutation,
  useTotaCountQuery,
  useUserOverviewQuery,
  useUpcomingVoteQuery,
  useDeleteVoteMutation,
  useUpdateVotingMutation,
  useTimmerSetMutation,
  useTimmerGetQuery
} = adminApi;
