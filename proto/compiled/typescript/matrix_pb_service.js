// package: matrix
// file: proto/matrix.proto

var proto_matrix_pb = require("./proto/matrix_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Matrix = (function () {
  function Matrix() {}
  Matrix.serviceName = "matrix.Matrix";
  return Matrix;
}());

Matrix.StartSession = {
  methodName: "StartSession",
  service: Matrix,
  requestStream: false,
  responseStream: true,
  requestType: proto_matrix_pb.StartSessionRequest,
  responseType: proto_matrix_pb.SessionEvent
};

Matrix.GetAccessToken = {
  methodName: "GetAccessToken",
  service: Matrix,
  requestStream: false,
  responseStream: false,
  requestType: proto_matrix_pb.GetAccessTokenRequest,
  responseType: proto_matrix_pb.GetAccessTokenResponse
};

Matrix.JoinRoom = {
  methodName: "JoinRoom",
  service: Matrix,
  requestStream: false,
  responseStream: false,
  requestType: proto_matrix_pb.JoinRoomRequest,
  responseType: proto_matrix_pb.JoinRoomResponse
};

Matrix.Leave = {
  methodName: "Leave",
  service: Matrix,
  requestStream: false,
  responseStream: false,
  requestType: proto_matrix_pb.LeaveRequest,
  responseType: proto_matrix_pb.LeaveResponse
};

Matrix.SendTextMessage = {
  methodName: "SendTextMessage",
  service: Matrix,
  requestStream: false,
  responseStream: false,
  requestType: proto_matrix_pb.SendTextMessageRequest,
  responseType: proto_matrix_pb.SendTextMessageResponse
};

Matrix.SendReadReceipt = {
  methodName: "SendReadReceipt",
  service: Matrix,
  requestStream: false,
  responseStream: false,
  requestType: proto_matrix_pb.SendReadReceiptRequest,
  responseType: proto_matrix_pb.SendReadReceiptResponse
};

exports.Matrix = Matrix;

function MatrixClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MatrixClient.prototype.startSession = function startSession(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Matrix.StartSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MatrixClient.prototype.getAccessToken = function getAccessToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Matrix.GetAccessToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MatrixClient.prototype.joinRoom = function joinRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Matrix.JoinRoom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MatrixClient.prototype.leave = function leave(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Matrix.Leave, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MatrixClient.prototype.sendTextMessage = function sendTextMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Matrix.SendTextMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MatrixClient.prototype.sendReadReceipt = function sendReadReceipt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Matrix.SendReadReceipt, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MatrixClient = MatrixClient;

