"use client";

import { useState, useCallback } from "react";
import axios from "axios";

export const useApi = () => {
  const [loading, setLoading] = useState(false);

  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const callApi = useCallback(
    async ({
      endpoint,
      method = "GET",
      data = null,
      headers = {},
      successMessage,
      errorMessage,
      disableSnackbar = false,
    }) => {
      setLoading(true);

      try {
        const response = await axios({
          method,
          url: `${baseUrl}${endpoint}`, // dynamic, same-origin backend
          data,
          headers,
        });

        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        return {
          success: false,
          error: error?.response?.data || error,
        };
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  return { callApi, loading };
};
