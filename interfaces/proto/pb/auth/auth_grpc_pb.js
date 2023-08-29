// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var interfaces_proto_pb_auth_pb = require('./auth_pb.js');

function serialize_pb_LoginRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type pb.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginRequest(buffer_arg) {
  return interfaces_proto_pb_auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_LoginResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type pb.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginResponse(buffer_arg) {
  return interfaces_proto_pb_auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OtpSignUpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.OtpSignUpRequest)) {
    throw new Error('Expected argument of type pb.OtpSignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OtpSignUpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_pb.OtpSignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OtpSignUpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.OtpSignUpResponse)) {
    throw new Error('Expected argument of type pb.OtpSignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OtpSignUpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_pb.OtpSignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignupRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.SignupRequest)) {
    throw new Error('Expected argument of type pb.SignupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignupRequest(buffer_arg) {
  return interfaces_proto_pb_auth_pb.SignupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignupResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.SignupResponse)) {
    throw new Error('Expected argument of type pb.SignupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignupResponse(buffer_arg) {
  return interfaces_proto_pb_auth_pb.SignupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_resendOtpRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.resendOtpRequest)) {
    throw new Error('Expected argument of type pb.resendOtpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_resendOtpRequest(buffer_arg) {
  return interfaces_proto_pb_auth_pb.resendOtpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_resendOtpResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.resendOtpResponse)) {
    throw new Error('Expected argument of type pb.resendOtpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_resendOtpResponse(buffer_arg) {
  return interfaces_proto_pb_auth_pb.resendOtpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_validNameRequest(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.validNameRequest)) {
    throw new Error('Expected argument of type pb.validNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_validNameRequest(buffer_arg) {
  return interfaces_proto_pb_auth_pb.validNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_validNameResponse(arg) {
  if (!(arg instanceof interfaces_proto_pb_auth_pb.validNameResponse)) {
    throw new Error('Expected argument of type pb.validNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_validNameResponse(buffer_arg) {
  return interfaces_proto_pb_auth_pb.validNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutharizationService = exports.AutharizationService = {
  userSignup: {
    path: '/pb.Autharization/UserSignup',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_pb.SignupRequest,
    responseType: interfaces_proto_pb_auth_pb.SignupResponse,
    requestSerialize: serialize_pb_SignupRequest,
    requestDeserialize: deserialize_pb_SignupRequest,
    responseSerialize: serialize_pb_SignupResponse,
    responseDeserialize: deserialize_pb_SignupResponse,
  },
  otpRequest: {
    path: '/pb.Autharization/OtpRequest',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_pb.OtpSignUpRequest,
    responseType: interfaces_proto_pb_auth_pb.OtpSignUpResponse,
    requestSerialize: serialize_pb_OtpSignUpRequest,
    requestDeserialize: deserialize_pb_OtpSignUpRequest,
    responseSerialize: serialize_pb_OtpSignUpResponse,
    responseDeserialize: deserialize_pb_OtpSignUpResponse,
  },
  userLogin: {
    path: '/pb.Autharization/UserLogin',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_pb.LoginRequest,
    responseType: interfaces_proto_pb_auth_pb.LoginResponse,
    requestSerialize: serialize_pb_LoginRequest,
    requestDeserialize: deserialize_pb_LoginRequest,
    responseSerialize: serialize_pb_LoginResponse,
    responseDeserialize: deserialize_pb_LoginResponse,
  },
  validName: {
    path: '/pb.Autharization/validName',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_pb.validNameRequest,
    responseType: interfaces_proto_pb_auth_pb.validNameResponse,
    requestSerialize: serialize_pb_validNameRequest,
    requestDeserialize: deserialize_pb_validNameRequest,
    responseSerialize: serialize_pb_validNameResponse,
    responseDeserialize: deserialize_pb_validNameResponse,
  },
  resendOtp: {
    path: '/pb.Autharization/ResendOtp',
    requestStream: false,
    responseStream: false,
    requestType: interfaces_proto_pb_auth_pb.resendOtpRequest,
    responseType: interfaces_proto_pb_auth_pb.resendOtpResponse,
    requestSerialize: serialize_pb_resendOtpRequest,
    requestDeserialize: deserialize_pb_resendOtpRequest,
    responseSerialize: serialize_pb_resendOtpResponse,
    responseDeserialize: deserialize_pb_resendOtpResponse,
  },
};

exports.AutharizationClient = grpc.makeGenericClientConstructor(AutharizationService);
