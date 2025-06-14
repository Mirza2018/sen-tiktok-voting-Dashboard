import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({  

    // UpdateCar: build.mutation({
    //   query: (data) => {
    //     console.log(data);
    //     // return;
    //     return {
    //       url: `/car/update/${data?.id}`,
    //       method: "PATCH",
    //       body: data?.data,
    //     };
    //   },
    //   invalidatesTags: [tagTypes.allCar],
    // }), 
    candidateList: build.query({
      query: (params) => ({
        url: `/candidate`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.candidate],
    }),
    //end
  }),
});

export const { useCandidateListQuery } = adminApi;
