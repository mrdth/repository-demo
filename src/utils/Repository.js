import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export class Repository {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  list() {
    return client.get(this.endpoint);
  }

  show(id) {
    return client.get(`${this.endpoint}/${id}`);
  }

  store(payload) {
    return client.post(this.endpoint, payload);
  }

  put(id, payload) {
    return client.put(`${this.endpoint}/${id}`, payload);
  }

  patch(id, payload) {
    return client.patch(`${this.endpoint}/${id}`, payload);
  }

  delete(id) {
    return client.delete(`${this.endpoint}/${id}`);
  }
}
