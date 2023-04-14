
import Swal from "sweetalert2";
/* TODO */
// Subir imagen
export const uploadImage = async () => {
    const { value: file } = await Swal.fire({
        title: 'Elige una imagen',
        input: 'file',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Upload your profile picture'
        },
        confirmButtonColor: 'hsl(133, 100%, 37%)',
      })
      
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          Swal.fire({
            title: 'Se ha subido la imagen correctamente',
            imageUrl: e.target.result,
            imageAlt: 'Logo de la compañía',
            confirmButtonColor: 'hsl(133, 100%, 37%)',
          })
        }
        reader.readAsDataURL(file)
      }
}