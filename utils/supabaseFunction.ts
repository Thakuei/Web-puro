// import { execFile } from 'child_process';
// import supabase, { Database } from './supabase';

// export const TABLE_NAME = 'Board';

// export const getBoard = async (boardId: string) => {
//   const { data, error } = await supabase
//     .from(TABLE_NAME)
//     .select('*')
//     .eq('id', boardId)
//     .single();

//   if (error) {
//     throw error;
//   }

//   return data;
// }
