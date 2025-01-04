import { supabase } from "./supabase";

export const addTodo = async (task, emoji) => {
  const { data, error } = await supabase
    .from('todos')
    .insert([
      { task, emoji, completed: false }
    ])
    .select();

  if (error) {
    console.error('Error details:', error);
    throw error;
  }
  return data;
};

export const fetchTodos = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error details:', error);
    throw error;
  }
  return data;
};

export const toggleTodo = async (id, completed) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ completed: !completed })
    .eq('id', id)
    .select();

  if (error) throw error;
  return data[0];
};

export const deleteTodo = async (id) => {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id);

  if (error) throw error;
};
