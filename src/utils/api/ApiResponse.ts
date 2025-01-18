export interface ApiResponse<T> {
  sucess: boolean;
  data?: T;
  error?: {
    message: string;
    statusCode: number;
  };
}

// success response

export const successResponse = <T>(data: T): ApiResponse<T> => {
  return {
    sucess: true,
    data,
  };
};

// error response
export const errorResponse = <T>(message: string, statusCode: number): ApiResponse<T> => {
  return {
    sucess: false,
    error: {
      message,
      statusCode,
    },
  };
};
