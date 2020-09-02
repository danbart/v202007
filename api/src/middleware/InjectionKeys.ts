import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { PhoneNumberExistMiddleware } from "./phoneNumberExist";
import { PhoneNumberVerificationMiddleware } from "./phoneNumberVerification";

export const PhoneNumberVerificationMiddlewareInjectionKey: InjectionKey<PhoneNumberVerificationMiddleware> = {
  name: "PhoneNumberVerificationMiddlewareInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const onboardingController = new PhoneNumberVerificationMiddleware();

    return onboardingController;
  },
};

export const PhoneNumberExistMiddlewareInjectionKey: InjectionKey<PhoneNumberExistMiddleware> = {
  name: "PhoneNumberExistMiddlewareInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const onboardingController = new PhoneNumberExistMiddleware();

    return onboardingController;
  },
};
