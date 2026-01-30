import api from "@/services/instance/instance";
import { useMutation } from "@tanstack/react-query";
import type {
  DoctorRegistrationPayload,
  DoctorRegistrationResponse,
  InstitutionRegistrationPayload,
  InstitutionRegistrationResponse,
} from "./register.types";

export const useDoctorRegistration = () => {
  return useMutation<
    DoctorRegistrationResponse,
    { message: string },
    DoctorRegistrationPayload
  >({
    mutationKey: ["doctor-registration"],
    mutationFn: async (payload: DoctorRegistrationPayload) => {
      const { data } = await api.post<DoctorRegistrationResponse>(
        "/hospital/doctor",
        payload,
      );
      return data;
    },
  });
};

export const useInstitutionRegistration = () => {
  return useMutation<
    InstitutionRegistrationResponse,
    { message: string },
    InstitutionRegistrationPayload
  >({
    mutationKey: ["institution-registration"],
    mutationFn: async (payload: InstitutionRegistrationPayload) => {
      const { data } = await api.post<InstitutionRegistrationResponse>(
        "/hospital/register",
        payload,
      );
      return data;
    },
  });
};
