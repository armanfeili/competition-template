from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_demo_endpoint():
    payload = {"text": "hello world", "value": 2}
    response = client.post("/api/demo", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["text"] == "hello world"
    assert data["value"] == 2
    assert "processed_text" in data
    assert data["score"] == 4
