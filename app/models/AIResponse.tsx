export interface AIResponse {
  id: string;
  generations: Generation[];
  prompt: string;
}

export interface Generation {
  id: string;
  text: string;
}
