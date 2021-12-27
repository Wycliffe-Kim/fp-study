import aiohttp

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        try:
            async with session.get(url) as resp:
                if resp.status == 200:
                    return await resp.text()
        except (aiohttp.ClientError or
                aiohttp.WebSocketError or
                aiohttp.ContentTypeError or
                aiohttp.ClientPayloadError or
                aiohttp.ServerTimeoutError or
                aiohttp.ClientResponseError or
                aiohttp.ClientConnectorError or
                aiohttp.ClientHttpProxyError or
                aiohttp.ClientConnectionError or
                aiohttp.ServerConnectionError or
                aiohttp.WSServerHandshakeError or
                aiohttp.ServerDisconnectedError or
                aiohttp.ClientProxyConnectionError or
                aiohttp.ClientConnectorCertificateError) as err:
            raise ValueError(err)