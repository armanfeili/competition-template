from pydantic import BaseModel


class Settings(BaseModel):
    """Application settings for quick configuration."""

    app_name: str = "Competition Template API"
    api_prefix: str = "/api"
    cors_origins: list[str] = ["http://localhost:5173"]


def get_settings() -> Settings:
    return Settings()


settings = get_settings()
