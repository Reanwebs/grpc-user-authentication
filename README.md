#generate protobuff using below cmd

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=grpc_js:. ./interfaces/proto/pb/auth/auth.proto

