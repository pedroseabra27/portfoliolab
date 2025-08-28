import { projetos } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async () => {

    const allFeatures = projetos.flatMap(projeto => projeto.tecnologias);
	return { projetos, allFeatures };
}) satisfies PageServerLoad;
