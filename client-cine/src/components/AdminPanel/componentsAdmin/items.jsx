import React ,{useContext,useState}from 'react';
import {useDispatch} from 'react-redux'
import {Button,Image} from 'react-bootstrap';
import {BsPencilFill,BsTrash} from 'react-icons/bs'
import {Link } from 'react-router-dom';
import {AdminContext} from './../admincontext.jsx'
import {getAllReviewByIdOfMovie} from './../../../store/actions.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemcontainer.css';



const Items=({nombre,titulo,genero,nombreProducto,id,image,handleDelete,stock,author,score,comment})=>{
  let {dispatch}= useContext(AdminContext)
  let dispatchRedux= useDispatch()
  let [opcomment,setOpComment]=useState(false)
  const handleToComments=(e)=>{
    console.log(e.currentTarget.className.split(" ")[1])
  	dispatchRedux(getAllReviewByIdOfMovie(parseInt(e.currentTarget.className.split(" ")[1])))
  	dispatch({ type: 'sectionSelect', payload:"comments"})
  }

  return (
       <div className="item_admin_stack">
         <span className="item_admin_data_left">
        {image&&<Image
          className="image_item_Adm_movies"
          src={image}
          thumbnail
          alt="Live from space album cover"
         />}
         {titulo&&<span className="Item_movie_data_admin"><p><b>Titulo: </b>{titulo}</p></span>}
         {author && <span className="Item_movie_data_admin"><p><b>Author: </b>{author}</p></span>}
         {score && <span className="Item_movie_data_admin"><p><b>Score: </b>{score}</p></span>}
         {titulo&&<Button className={`btn_view_comments_admin ${id}`}  variant="outline-secondary" onClick={handleToComments} >to comment</Button>}
         {nombre&&<span className="Item_movie_data_admin"><p><b>Nombre: </b>{nombre}</p></span>}
         {genero&&<span className="Item_movie_data_admin"><p><b>Genero: </b>{genero}</p></span>}
        {nombreProducto&&<span className="Item_movie_data_admin"><p><b>Nombre: </b>{nombreProducto}</p></span>}
      </span>  
      {opcomment&&<span className="admin_box_comment">{comment}</span>}
      <span className="item_admin_data_buttons_options" >
         {author&& <Button variant="outline-info"  onClick={(e)=>setOpComment(!opcomment)}> comment</Button>}
        <Link to={`/admin/editpelicula/${id}`}><Button   className={`btn_options ${id}`} variant="outline-primary" ><BsPencilFill /></Button></Link> <Button className={`btn_options ${id}`} id={id} onClick={handleDelete} variant="outline-danger" ><BsTrash/></Button>
      </span>
       </div>
      
  )
}
export default Items