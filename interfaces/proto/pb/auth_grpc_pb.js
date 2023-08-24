// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OtpSignUpRequest(arg) {
  if (!(arg instanceof auth_pb.OtpSignUpRequest)) {
    throw new Error('Expected argument of type auth.OtpSignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OtpSignUpRequest(buffer_arg) {
  return auth_pb.OtpSignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OtpSignUpResponse(arg) {
  if (!(arg instanceof auth_pb.OtpSignUpResponse)) {
    throw new Error('Expected argument of type auth.OtpSignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OtpSignUpResponse(buffer_arg) {
  return auth_pb.OtpSignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SignupRequest(arg) {
  if (!(arg instanceof auth_pb.SignupRequest)) {
    throw new Error('Expected argument of type auth.SignupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignupRequest(buffer_arg) {
  return auth_pb.SignupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SignupResponse(arg) {
  if (!(arg instanceof auth_pb.SignupResponse)) {
    throw new Error('Expected argument of type auth.SignupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SignupResponse(buffer_arg) {
  return auth_pb.SignupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_validNameRequest(arg) {
  if (!(arg instanceof auth_pb.validNameRequest)) {
    throw new Error('Expected argument of type auth.validNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_validNameRequest(buffer_arg) {
  return auth_pb.validNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_validNameResponse(arg) {
  if (!(arg instanceof auth_pb.validNameResponse)) {
    throw new Error('Expected argument of type auth.validNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_validNameResponse(buffer_arg) {
  return auth_pb.validNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutharizationService = exports.AutharizationService = {
  userSignup: {
    path: '/auth.Autharization/UserSignup',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignupRequest,
    responseType: auth_pb.SignupResponse,
    requestSerialize: serialize_auth_SignupRequest,
    requestDeserialize: deserialize_auth_SignupRequest,
    responseSerialize: serialize_auth_SignupResponse,
    responseDeserialize: deserialize_auth_SignupResponse,
  },
  otpRequest: {
    path: '/auth.Autharization/OtpRequest',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.OtpSignUpRequest,
    responseType: auth_pb.OtpSignUpResponse,
    requestSerialize: serialize_auth_OtpSignUpRequest,
    requestDeserialize: deserialize_auth_OtpSignUpRequest,
    responseSerialize: serialize_auth_OtpSignUpResponse,
    responseDeserialize: deserialize_auth_OtpSignUpResponse,
  },
  userLogin: {
    path: '/auth.Autharization/UserLogin',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
  validName: {
    path: '/auth.Autharization/validName',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.validNameRequest,
    responseType: auth_pb.validNameResponse,
    requestSerialize: serialize_auth_validNameRequest,
    requestDeserialize: deserialize_auth_validNameRequest,
    responseSerialize: serialize_auth_validNameResponse,
    responseDeserialize: deserialize_auth_validNameResponse,
  },
};

exports.AutharizationClient = grpc.makeGenericClientConstructor(AutharizationService);
