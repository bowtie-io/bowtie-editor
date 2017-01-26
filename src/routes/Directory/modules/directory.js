/********************************************************
 * Aliasing fetchDirectory => fetchProject
 * they're the same function.
 ********************************************************/
import { fetchProject } from '../../Project/modules/project'
export const fetchDirectory = fetchProject()

