import { Client } from 'pg';
import dotenv from "dotenv";
dotenv.config();

const config = {
    user: process.env.postgresql_user,
    password: process.env.postgresql_possword,
    host: process.env.postgresql_host,
    port: process.env.postgresql_port,
    database: process.env.postgresql_database,
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEUDCCArigAwIBAgIUV/eP7BmHLhOKTKEyVRbhfV6q5zAwDQYJKoZIhvcNAQEM
BQAwQDE+MDwGA1UEAww1M2IxYWIxMjQtYzYxYy00MWRiLWFlZWUtODRkMWIzZGFi
YzgxIEdFTiAxIFByb2plY3QgQ0EwHhcNMjUxMTI3MTczMjQ4WhcNMzUxMTI1MTcz
MjQ4WjBAMT4wPAYDVQQDDDUzYjFhYjEyNC1jNjFjLTQxZGItYWVlZS04NGQxYjNk
YWJjODEgR0VOIDEgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCC
AYoCggGBALCw3q1g7bMWy7ZRodeG/zEYa8+ONEol+EtlNKPYHPF2+nbT4JTPUKUH
yaa1crR7ESE2gzDHhtyRxGzBAEGXm6vaSi1d3v0ezv5H459ExbkgUkKe9uN4cWQk
2zGgSiguKeK6Qaj3Ndxnh8hVleSMNEZcyj6iF8tLwU5psHiyCfwU2wTX8+BlZZ8t
Pr8ze2Gr2MXudYr2rFWqIMCNAqssbyiKpDltzMuTa902rjLAIBjlsF5LDQoV3fWL
/7Ce6nIQhgUG4MuRc2g50brx3yBcFYQ1NeucDCBBxgLxNClUBuaICZ5HHgoKUfmL
36PVEmSxz0wZf7CRvLehBPeS6IDDe/xUdec0yd4la/3MPhJsvtPOytlpwAeg6Nzt
Ki6HnnT29FHZ4EXQ6FC20Rzn7lcxoInurY/wjYfm6GAz7wFlFd/FISreT96RpqPS
MxLGPUBx8Ca+HdMv5dKOhSJLYQa8DOSFNttSeKQCGgzskGLUW+ICY2QPtF0IE6Jc
RaYRmtcRgQIDAQABo0IwQDAdBgNVHQ4EFgQUHJuVVTZyX6AqSi3pikgMq1cxgz4w
EgYDVR0TAQH/BAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQAD
ggGBAKXVGS1oojE+dYHeLne5BQzUn7vUUNsAAGzg4YdR/muiopI2gWdp+0BXAv2g
MkXjGO1nSwU/ein9Sii6R3iZ2Thc63pNv5+5xhgijh19Ko+IRV2y0E+iEdjZx/5l
A0As+a4irEoD8Tbn8IdarkzbjeqMkHjqQmN2pX4zXfcPRM8oYa7URPuaygtt+Z2R
HpT491x38iquH+YggUeSB97hbU4URoCWSswikq1tNPAgDaHD03J1UhC8PqjrQnvI
JsNDmpENE7C3iT/1T3DRS1mks3TNdUXztUK9oPVFkvGVGuV4zn779qkCAHQRfMuy
aDvQhJ0Qi/e4+Mr4oqeVJjqe4InHoqlQEXwRlj2mNL51J3ueALtHwErS9NHY0X+t
iFnqEFDK3g9bcYsQDtNo3x1m3DAw97seXkN8QV9jOUeltRhSeuudUKYvia6wxlFn
ovYNO49z/QMWLp0l3wX0hYtOlMlbMbWfCrvq3oGFuo79UR6jJJrDz2n3G9u7o4Zq
x5ULkA==
-----END CERTIFICATE-----`,
    },
};


// Create a new Client instance
const client = new Client(config);

// Function to connect to the database
async function connectDatabase() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Connection error', error.stack);
        throw error; // Rethrow to handle it in the calling function
    }
}

// Export the client and connect function
export { client, connectDatabase };


