import asyncio
import aiohttp
import json

def get_json_callback(url, success, fail):
    async def run():
        async with aiohttp.ClientSession() as session:
            try:
                async with session.get(url) as resp:
                    if resp.status == 200:
                        success(json.loads(await resp.text()))
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
                fail(err)
    
    asyncio.run(asyncio.wait([run()]));
  
async def get_json_promise(url):
    pass