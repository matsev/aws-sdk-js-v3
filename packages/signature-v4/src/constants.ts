export const ALGORITHM_QUERY_PARAM = 'X-Amz-Algorithm';
export const CREDENTIAL_QUERY_PARAM = 'X-Amz-Credential';
export const AMZ_DATE_QUERY_PARAM = 'X-Amz-Date';
export const SIGNED_HEADERS_QUERY_PARAM = 'X-Amz-SignedHeaders';
export const EXPIRES_QUERY_PARAM = 'X-Amz-Expires';
export const SIGNATURE_QUERY_PARAM = 'X-Amz-Signature';
export const TOKEN_QUERY_PARAM = 'X-Amz-Security-Token';

export const AUTH_HEADER = 'authorization';
export const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
export const DATE_HEADER = 'date';
export const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
export const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
export const SHA256_HEADER = 'x-amz-content-sha256';
export const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
export const HOST_HEADER = 'host';

export const ALWAYS_UNSIGNABLE_HEADERS = {
    'authorization': true,
    'cache-control': true,
    'connection': true,
    'expect': true,
    'from': true,
    'keep-alive': true,
    'max-forwards': true,
    'pragma': true,
    'referer': true,
    'te': true,
    'trailer': true,
    'transfer-encoding': true,
    'upgrade': true,
    'user-agent': true,
    'x-amzn-trace-id': true,
};

export const PROXY_HEADER_PATTERN = /^proxy-/;

export const SEC_HEADER_PATTERN = /^sec-/;

export const UNSIGNABLE_PATTERNS = [
    /^proxy-/i,
    /^sec-/i,
];

export const ALGORITHM_IDENTIFIER = 'AWS4-HMAC-SHA256';

export const UNSIGNED_PAYLOAD = 'UNSIGNED-PAYLOAD';

export const MAX_CACHE_SIZE = 50;
export const KEY_TYPE_IDENTIFIER = 'aws4_request';

export const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
