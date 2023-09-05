// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var interfaces_proto_pb_auth_auth_pb = require('../../../../interfaces/proto/pb/auth/auth_pb.js');

function serialize_pb_AddInterestRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.AddInterestRequest)) {
    throw new Error('Expected argument of type pb.AddInterestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AddInterestRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.AddInterestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AddInterestResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.AddInterestResponse)) {
    throw new Error('Expected argument of type pb.AddInterestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AddInterestResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.AddInterestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AdminLoginRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.AdminLoginRequest)) {
    throw new Error('Expected argument of type pb.AdminLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AdminLoginRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.AdminLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AdminLoginResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.AdminLoginResponse)) {
    throw new Error('Expected argument of type pb.AdminLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AdminLoginResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.AdminLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeAvatarRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeAvatarRequest)) {
    throw new Error('Expected argument of type pb.ChangeAvatarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeAvatarRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeAvatarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeAvatarResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeAvatarResponse)) {
    throw new Error('Expected argument of type pb.ChangeAvatarResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeAvatarResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeAvatarResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeEmailRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeEmailRequest)) {
    throw new Error('Expected argument of type pb.ChangeEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeEmailRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeEmailResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeEmailResponse)) {
    throw new Error('Expected argument of type pb.ChangeEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeEmailResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeEmailVerifyOtpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeEmailVerifyOtpRequest)) {
    throw new Error('Expected argument of type pb.ChangeEmailVerifyOtpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeEmailVerifyOtpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeEmailVerifyOtpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeEmailVerifyOtpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeEmailVerifyOtpResponse)) {
    throw new Error('Expected argument of type pb.ChangeEmailVerifyOtpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeEmailVerifyOtpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeEmailVerifyOtpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangePasswordRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type pb.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangePasswordRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangePasswordResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type pb.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangePasswordResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangePhoneNumberOtpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberOtpRequest)) {
    throw new Error('Expected argument of type pb.ChangePhoneNumberOtpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangePhoneNumberOtpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberOtpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangePhoneNumberOtpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberOtpResponse)) {
    throw new Error('Expected argument of type pb.ChangePhoneNumberOtpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangePhoneNumberOtpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberOtpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangePhoneNumberRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberRequest)) {
    throw new Error('Expected argument of type pb.ChangePhoneNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangePhoneNumberRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangePhoneNumberResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberResponse)) {
    throw new Error('Expected argument of type pb.ChangePhoneNumberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangePhoneNumberResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeUserNameRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeUserNameRequest)) {
    throw new Error('Expected argument of type pb.ChangeUserNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeUserNameRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeUserNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ChangeUserNameResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ChangeUserNameResponse)) {
    throw new Error('Expected argument of type pb.ChangeUserNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChangeUserNameResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ChangeUserNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ForgotPasswordChangePasswordRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ForgotPasswordChangePasswordRequest)) {
    throw new Error('Expected argument of type pb.ForgotPasswordChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ForgotPasswordChangePasswordRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ForgotPasswordChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ForgotPasswordChangePasswordResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ForgotPasswordChangePasswordResponse)) {
    throw new Error('Expected argument of type pb.ForgotPasswordChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ForgotPasswordChangePasswordResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ForgotPasswordChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ForgotPasswordOtpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ForgotPasswordOtpRequest)) {
    throw new Error('Expected argument of type pb.ForgotPasswordOtpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ForgotPasswordOtpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ForgotPasswordOtpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ForgotPasswordOtpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ForgotPasswordOtpResponse)) {
    throw new Error('Expected argument of type pb.ForgotPasswordOtpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ForgotPasswordOtpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ForgotPasswordOtpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ForgotPasswordValidateOtpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ForgotPasswordValidateOtpRequest)) {
    throw new Error('Expected argument of type pb.ForgotPasswordValidateOtpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ForgotPasswordValidateOtpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ForgotPasswordValidateOtpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ForgotPasswordValidateOtpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ForgotPasswordValidateOtpResponse)) {
    throw new Error('Expected argument of type pb.ForgotPasswordValidateOtpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ForgotPasswordValidateOtpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ForgotPasswordValidateOtpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetInterestRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.GetInterestRequest)) {
    throw new Error('Expected argument of type pb.GetInterestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetInterestRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.GetInterestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetInterestResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.GetInterestResponse)) {
    throw new Error('Expected argument of type pb.GetInterestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetInterestResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.GetInterestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUsersRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.GetUsersRequest)) {
    throw new Error('Expected argument of type pb.GetUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUsersRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.GetUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUsersResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.GetUsersResponse)) {
    throw new Error('Expected argument of type pb.GetUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUsersResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.GetUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GoogleLoginRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.GoogleLoginRequest)) {
    throw new Error('Expected argument of type pb.GoogleLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GoogleLoginRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.GoogleLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GoogleLoginResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.GoogleLoginResponse)) {
    throw new Error('Expected argument of type pb.GoogleLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GoogleLoginResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.GoogleLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_LoginRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type pb.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_LoginResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type pb.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ManageInterestRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ManageInterestRequest)) {
    throw new Error('Expected argument of type pb.ManageInterestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ManageInterestRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ManageInterestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ManageInterestResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ManageInterestResponse)) {
    throw new Error('Expected argument of type pb.ManageInterestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ManageInterestResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ManageInterestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ManageUserRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ManageUserRequest)) {
    throw new Error('Expected argument of type pb.ManageUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ManageUserRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ManageUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ManageUserResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ManageUserResponse)) {
    throw new Error('Expected argument of type pb.ManageUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ManageUserResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ManageUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OtpSignUpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.OtpSignUpRequest)) {
    throw new Error('Expected argument of type pb.OtpSignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OtpSignUpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.OtpSignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OtpSignUpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.OtpSignUpResponse)) {
    throw new Error('Expected argument of type pb.OtpSignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OtpSignUpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.OtpSignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RemoveAvatarRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.RemoveAvatarRequest)) {
    throw new Error('Expected argument of type pb.RemoveAvatarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RemoveAvatarRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.RemoveAvatarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RemoveAvatarResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.RemoveAvatarResponse)) {
    throw new Error('Expected argument of type pb.RemoveAvatarResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RemoveAvatarResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.RemoveAvatarResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignupRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.SignupRequest)) {
    throw new Error('Expected argument of type pb.SignupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignupRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.SignupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignupResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.SignupResponse)) {
    throw new Error('Expected argument of type pb.SignupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignupResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.SignupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ValidateUserRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ValidateUserRequest)) {
    throw new Error('Expected argument of type pb.ValidateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ValidateUserRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ValidateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ValidateUserResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.ValidateUserResponse)) {
    throw new Error('Expected argument of type pb.ValidateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ValidateUserResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.ValidateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_resendOtpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.resendOtpRequest)) {
    throw new Error('Expected argument of type pb.resendOtpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_resendOtpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.resendOtpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_resendOtpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.resendOtpResponse)) {
    throw new Error('Expected argument of type pb.resendOtpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_resendOtpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.resendOtpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_validNameRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.validNameRequest)) {
    throw new Error('Expected argument of type pb.validNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_validNameRequest(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.validNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_validNameResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_auth_pb.validNameResponse)) {
    throw new Error('Expected argument of type pb.validNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_validNameResponse(buffer_arg) {
  return interfaces_proto_pb_auth_auth_pb.validNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutharizationService = exports.AutharizationService = {
  userSignup: {
    path: '/pb.Autharization/UserSignup',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.SignupRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.SignupResponse,
    requestSerialize: serialize_pb_SignupRequest,
    requestDeserialize: deserialize_pb_SignupRequest,
    responseSerialize: serialize_pb_SignupResponse,
    responseDeserialize: deserialize_pb_SignupResponse,
  },
  otpRequest: {
    path: '/pb.Autharization/OtpRequest',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.OtpSignUpRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.OtpSignUpResponse,
    requestSerialize: serialize_pb_OtpSignUpRequest,
    requestDeserialize: deserialize_pb_OtpSignUpRequest,
    responseSerialize: serialize_pb_OtpSignUpResponse,
    responseDeserialize: deserialize_pb_OtpSignUpResponse,
  },
  userLogin: {
    path: '/pb.Autharization/UserLogin',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.LoginRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.LoginResponse,
    requestSerialize: serialize_pb_LoginRequest,
    requestDeserialize: deserialize_pb_LoginRequest,
    responseSerialize: serialize_pb_LoginResponse,
    responseDeserialize: deserialize_pb_LoginResponse,
  },
  validName: {
    path: '/pb.Autharization/validName',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.validNameRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.validNameResponse,
    requestSerialize: serialize_pb_validNameRequest,
    requestDeserialize: deserialize_pb_validNameRequest,
    responseSerialize: serialize_pb_validNameResponse,
    responseDeserialize: deserialize_pb_validNameResponse,
  },
  resendOtp: {
    path: '/pb.Autharization/ResendOtp',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.resendOtpRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.resendOtpResponse,
    requestSerialize: serialize_pb_resendOtpRequest,
    requestDeserialize: deserialize_pb_resendOtpRequest,
    responseSerialize: serialize_pb_resendOtpResponse,
    responseDeserialize: deserialize_pb_resendOtpResponse,
  },
  forgotPasswordOtp: {
    path: '/pb.Autharization/ForgotPasswordOtp',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ForgotPasswordOtpRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ForgotPasswordOtpResponse,
    requestSerialize: serialize_pb_ForgotPasswordOtpRequest,
    requestDeserialize: deserialize_pb_ForgotPasswordOtpRequest,
    responseSerialize: serialize_pb_ForgotPasswordOtpResponse,
    responseDeserialize: deserialize_pb_ForgotPasswordOtpResponse,
  },
  forgotPasswordValidateOtp: {
    path: '/pb.Autharization/ForgotPasswordValidateOtp',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ForgotPasswordValidateOtpRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ForgotPasswordValidateOtpResponse,
    requestSerialize: serialize_pb_ForgotPasswordValidateOtpRequest,
    requestDeserialize: deserialize_pb_ForgotPasswordValidateOtpRequest,
    responseSerialize: serialize_pb_ForgotPasswordValidateOtpResponse,
    responseDeserialize: deserialize_pb_ForgotPasswordValidateOtpResponse,
  },
  forgotPasswordChangePassword: {
    path: '/pb.Autharization/ForgotPasswordChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ForgotPasswordChangePasswordRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ForgotPasswordChangePasswordResponse,
    requestSerialize: serialize_pb_ForgotPasswordChangePasswordRequest,
    requestDeserialize: deserialize_pb_ForgotPasswordChangePasswordRequest,
    responseSerialize: serialize_pb_ForgotPasswordChangePasswordResponse,
    responseDeserialize: deserialize_pb_ForgotPasswordChangePasswordResponse,
  },
  adminLogin: {
    path: '/pb.Autharization/AdminLogin',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.AdminLoginRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.AdminLoginResponse,
    requestSerialize: serialize_pb_AdminLoginRequest,
    requestDeserialize: deserialize_pb_AdminLoginRequest,
    responseSerialize: serialize_pb_AdminLoginResponse,
    responseDeserialize: deserialize_pb_AdminLoginResponse,
  },
  getUsers: {
    path: '/pb.Autharization/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.GetUsersRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.GetUsersResponse,
    requestSerialize: serialize_pb_GetUsersRequest,
    requestDeserialize: deserialize_pb_GetUsersRequest,
    responseSerialize: serialize_pb_GetUsersResponse,
    responseDeserialize: deserialize_pb_GetUsersResponse,
  },
  manageUser: {
    path: '/pb.Autharization/ManageUser',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ManageUserRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ManageUserResponse,
    requestSerialize: serialize_pb_ManageUserRequest,
    requestDeserialize: deserialize_pb_ManageUserRequest,
    responseSerialize: serialize_pb_ManageUserResponse,
    responseDeserialize: deserialize_pb_ManageUserResponse,
  },
  getInterest: {
    path: '/pb.Autharization/GetInterest',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.GetInterestRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.GetInterestResponse,
    requestSerialize: serialize_pb_GetInterestRequest,
    requestDeserialize: deserialize_pb_GetInterestRequest,
    responseSerialize: serialize_pb_GetInterestResponse,
    responseDeserialize: deserialize_pb_GetInterestResponse,
  },
  addInterest: {
    path: '/pb.Autharization/AddInterest',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.AddInterestRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.AddInterestResponse,
    requestSerialize: serialize_pb_AddInterestRequest,
    requestDeserialize: deserialize_pb_AddInterestRequest,
    responseSerialize: serialize_pb_AddInterestResponse,
    responseDeserialize: deserialize_pb_AddInterestResponse,
  },
  manageInterest: {
    path: '/pb.Autharization/ManageInterest',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ManageInterestRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ManageInterestResponse,
    requestSerialize: serialize_pb_ManageInterestRequest,
    requestDeserialize: deserialize_pb_ManageInterestRequest,
    responseSerialize: serialize_pb_ManageInterestResponse,
    responseDeserialize: deserialize_pb_ManageInterestResponse,
  },
  validateUser: {
    path: '/pb.Autharization/ValidateUser',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ValidateUserRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ValidateUserResponse,
    requestSerialize: serialize_pb_ValidateUserRequest,
    requestDeserialize: deserialize_pb_ValidateUserRequest,
    responseSerialize: serialize_pb_ValidateUserResponse,
    responseDeserialize: deserialize_pb_ValidateUserResponse,
  },
  googleLogin: {
    path: '/pb.Autharization/GoogleLogin',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.GoogleLoginRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.GoogleLoginResponse,
    requestSerialize: serialize_pb_GoogleLoginRequest,
    requestDeserialize: deserialize_pb_GoogleLoginRequest,
    responseSerialize: serialize_pb_GoogleLoginResponse,
    responseDeserialize: deserialize_pb_GoogleLoginResponse,
  },
  changeUserName: {
    path: '/pb.Autharization/ChangeUserName',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ChangeUserNameRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ChangeUserNameResponse,
    requestSerialize: serialize_pb_ChangeUserNameRequest,
    requestDeserialize: deserialize_pb_ChangeUserNameRequest,
    responseSerialize: serialize_pb_ChangeUserNameResponse,
    responseDeserialize: deserialize_pb_ChangeUserNameResponse,
  },
  changeEmail: {
    path: '/pb.Autharization/ChangeEmail',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ChangeEmailRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ChangeEmailResponse,
    requestSerialize: serialize_pb_ChangeEmailRequest,
    requestDeserialize: deserialize_pb_ChangeEmailRequest,
    responseSerialize: serialize_pb_ChangeEmailResponse,
    responseDeserialize: deserialize_pb_ChangeEmailResponse,
  },
  changePassword: {
    path: '/pb.Autharization/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ChangePasswordRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ChangePasswordResponse,
    requestSerialize: serialize_pb_ChangePasswordRequest,
    requestDeserialize: deserialize_pb_ChangePasswordRequest,
    responseSerialize: serialize_pb_ChangePasswordResponse,
    responseDeserialize: deserialize_pb_ChangePasswordResponse,
  },
  changeEmailVerifyOtp: {
    path: '/pb.Autharization/ChangeEmailVerifyOtp',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ChangeEmailVerifyOtpRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ChangeEmailVerifyOtpResponse,
    requestSerialize: serialize_pb_ChangeEmailVerifyOtpRequest,
    requestDeserialize: deserialize_pb_ChangeEmailVerifyOtpRequest,
    responseSerialize: serialize_pb_ChangeEmailVerifyOtpResponse,
    responseDeserialize: deserialize_pb_ChangeEmailVerifyOtpResponse,
  },
  changePhoneNumberOtp: {
    path: '/pb.Autharization/ChangePhoneNumberOtp',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberOtpRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberOtpResponse,
    requestSerialize: serialize_pb_ChangePhoneNumberOtpRequest,
    requestDeserialize: deserialize_pb_ChangePhoneNumberOtpRequest,
    responseSerialize: serialize_pb_ChangePhoneNumberOtpResponse,
    responseDeserialize: deserialize_pb_ChangePhoneNumberOtpResponse,
  },
  changePhoneNumber: {
    path: '/pb.Autharization/ChangePhoneNumber',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ChangePhoneNumberResponse,
    requestSerialize: serialize_pb_ChangePhoneNumberRequest,
    requestDeserialize: deserialize_pb_ChangePhoneNumberRequest,
    responseSerialize: serialize_pb_ChangePhoneNumberResponse,
    responseDeserialize: deserialize_pb_ChangePhoneNumberResponse,
  },
  changeAvatar: {
    path: '/pb.Autharization/ChangeAvatar',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.ChangeAvatarRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.ChangeAvatarResponse,
    requestSerialize: serialize_pb_ChangeAvatarRequest,
    requestDeserialize: deserialize_pb_ChangeAvatarRequest,
    responseSerialize: serialize_pb_ChangeAvatarResponse,
    responseDeserialize: deserialize_pb_ChangeAvatarResponse,
  },
  removeAvatar: {
    path: '/pb.Autharization/RemoveAvatar',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_auth_pb.RemoveAvatarRequest,
    responseType: interfaces_proto_pb_auth_auth_pb.RemoveAvatarResponse,
    requestSerialize: serialize_pb_RemoveAvatarRequest,
    requestDeserialize: deserialize_pb_RemoveAvatarRequest,
    responseSerialize: serialize_pb_RemoveAvatarResponse,
    responseDeserialize: deserialize_pb_RemoveAvatarResponse,
  },
};

exports.AutharizationClient = grpc.makeGenericClientConstructor(AutharizationService);
