// package: matrix
// file: proto/matrix.proto

import * as proto_matrix_pb from "./matrix_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MatrixStartSession = {
  readonly methodName: string;
  readonly service: typeof Matrix;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_matrix_pb.StartSessionRequest;
  readonly responseType: typeof proto_matrix_pb.SessionEvent;
};

type MatrixGetAccessToken = {
  readonly methodName: string;
  readonly service: typeof Matrix;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_matrix_pb.GetAccessTokenRequest;
  readonly responseType: typeof proto_matrix_pb.GetAccessTokenResponse;
};

type MatrixJoinRoom = {
  readonly methodName: string;
  readonly service: typeof Matrix;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_matrix_pb.JoinRoomRequest;
  readonly responseType: typeof proto_matrix_pb.JoinRoomResponse;
};

type MatrixLeave = {
  readonly methodName: string;
  readonly service: typeof Matrix;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_matrix_pb.LeaveRequest;
  readonly responseType: typeof proto_matrix_pb.LeaveResponse;
};

type MatrixSendTextMessage = {
  readonly methodName: string;
  readonly service: typeof Matrix;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_matrix_pb.SendTextMessageRequest;
  readonly responseType: typeof proto_matrix_pb.SendTextMessageResponse;
};

type MatrixSendReadReceipt = {
  readonly methodName: string;
  readonly service: typeof Matrix;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_matrix_pb.SendReadReceiptRequest;
  readonly responseType: typeof proto_matrix_pb.SendReadReceiptResponse;
};

export class Matrix {
  static readonly serviceName: string;
  static readonly StartSession: MatrixStartSession;
  static readonly GetAccessToken: MatrixGetAccessToken;
  static readonly JoinRoom: MatrixJoinRoom;
  static readonly Leave: MatrixLeave;
  static readonly SendTextMessage: MatrixSendTextMessage;
  static readonly SendReadReceipt: MatrixSendReadReceipt;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MatrixClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startSession(requestMessage: proto_matrix_pb.StartSessionRequest, metadata?: grpc.Metadata): ResponseStream<proto_matrix_pb.SessionEvent>;
  getAccessToken(
    requestMessage: proto_matrix_pb.GetAccessTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.GetAccessTokenResponse|null) => void
  ): UnaryResponse;
  getAccessToken(
    requestMessage: proto_matrix_pb.GetAccessTokenRequest,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.GetAccessTokenResponse|null) => void
  ): UnaryResponse;
  joinRoom(
    requestMessage: proto_matrix_pb.JoinRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.JoinRoomResponse|null) => void
  ): UnaryResponse;
  joinRoom(
    requestMessage: proto_matrix_pb.JoinRoomRequest,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.JoinRoomResponse|null) => void
  ): UnaryResponse;
  leave(
    requestMessage: proto_matrix_pb.LeaveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.LeaveResponse|null) => void
  ): UnaryResponse;
  leave(
    requestMessage: proto_matrix_pb.LeaveRequest,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.LeaveResponse|null) => void
  ): UnaryResponse;
  sendTextMessage(
    requestMessage: proto_matrix_pb.SendTextMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.SendTextMessageResponse|null) => void
  ): UnaryResponse;
  sendTextMessage(
    requestMessage: proto_matrix_pb.SendTextMessageRequest,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.SendTextMessageResponse|null) => void
  ): UnaryResponse;
  sendReadReceipt(
    requestMessage: proto_matrix_pb.SendReadReceiptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.SendReadReceiptResponse|null) => void
  ): UnaryResponse;
  sendReadReceipt(
    requestMessage: proto_matrix_pb.SendReadReceiptRequest,
    callback: (error: ServiceError|null, responseMessage: proto_matrix_pb.SendReadReceiptResponse|null) => void
  ): UnaryResponse;
}

