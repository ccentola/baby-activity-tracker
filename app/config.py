from pydantic import BaseSettings
import os


class Settings(BaseSettings):
    hostname: str
    port: str
    password: str
    username: str
    database: str

    class Config:
        env_file = os.path.expanduser("~/.env")
        env_file_encoding = "utf-8"


settings = Settings()
