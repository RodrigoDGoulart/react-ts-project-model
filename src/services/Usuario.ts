import api from "./api";

class Usuario {
  async getAll(): Promise<string[]> {
    const { data } = await api.get('usuarios');
    return data;
  }

  async getByID(id: number): Promise<string[]> {
    const { data } = await api.get(`usuarios/${id}`);
    return data;
  }
  
  async new(usuario: string) {
    const { data } = await api.post(`usuarios/`, {usuario});
    return data;
  }
  
  async update(usuario: string, id: number) {
    const { data } = await api.put(`usuarios/${id}`, {usuario});
    return data;
  }

  async delete(id: number) {
    const { data } = await api.delete(`usuarios/${id}`);
    return data;
  }
}

const user = new Usuario();

export default user;