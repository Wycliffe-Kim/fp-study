import asyncio
import aiohttp
import json

from .fetch import fetch

def get_json_callback(url, success, fail):
    async def run():
        try:
            data = await fetch(url)
            success(json.loads(data))
        except ValueError as err:
            fail(err)
    
    asyncio.run(asyncio.wait([run()]));
  
async def get_json_promise(url):
    pass