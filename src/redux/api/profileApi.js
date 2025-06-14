import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: `/users/admin-profile`,
        method: "Get",
      }),

    }),

    profileUpdsate: build.mutation({
      query: (profile) => ({
        url: `/users/update-my-profile`,
        method: "PATCH",
        body: profile,
      }),

    }),

    userRatio: build.query({
      query: (year) => ({
        url: `/users/all-users-overview?year=${year}`,
        method: "GET",
      }),
  
    }),
  }),
});

export const { useGetProfileQuery, useProfileUpdsateMutation, useUserRatioQuery } = profileApi;
