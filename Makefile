protobufs:
	protoc \
		--plugin="protoc-gen-ts=`yarn bin`/protoc-gen-ts" \
		--js_out="import_style=commonjs,binary:./proto/compiled/typescript" \
		--ts_out="./proto/compiled/typescript" \
		proto/matrix.proto
