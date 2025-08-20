import { projetos } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const id = params.id
    const projeto = projetos.find(p => p.id === Number(id));
    return { projeto };
}) satisfies PageServerLoad;