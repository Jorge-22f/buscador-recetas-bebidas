import api from '@/assets/lib/axios'

export default {
	obtenerCagorias() {
		return api('/list.php?c=list')
	},
	buscarRecetas({ categoria, nombre }) {
		return api(`/filter.php?c=${categoria}&i=${nombre}`)
	},
	buscarReceta(id) {
		return api(`/lookup.php?i=${id}`)
	},
}
