from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
#from chatbot import handle_action

app = FastAPI()

# Монтируем статические файлы и изображения
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/images", StaticFiles(directory="images"), name="images")

templates = Jinja2Templates(directory="templates")

# class ChatRequest(BaseModel):
#     act: str
#     var1: Optional[str] = None
#     var2: Optional[str] = None

@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# @app.post("/chat")
# async def chat_endpoint(data: ChatRequest):
#     result = handle_action(data.act, data.var1, data.var2)
#     return result

