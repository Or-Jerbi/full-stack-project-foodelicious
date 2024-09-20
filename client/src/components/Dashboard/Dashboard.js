// import React, { useEffect, useState, useCallback  } from 'react';
// import styles from './Dashboard.module.css';
// import { useParams } from 'react-router-dom';
// import { useRecipesContext } from '../../hooks/useRecipesContext';
// import Modal from '../../components/Modal/Modal';

// const Dashboard = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [recipeToEdit, setRecipeToEdit] = useState(null); // For tracking which recipe to update
//     const [recipeToDelete, setRecipeToDelete] = useState(null); // For tracking which recipe to delete
//     const [showModal, setShowModal] = useState(false); // To show or hide the modal
//     const { userId } = useParams();
//     const { dispatch } = useRecipesContext(); 
  
//     // Memoize getRecipe function
//     const getRecipe = useCallback(async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/recipe/profile/${userId}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch recipe');
//             }
//             const data = await response.json();
//             setRecipes(data);
//         } catch (err) {
//             console.log(err);
//         }
//     }, [userId]);


//     // Use the memoized getRecipe function
//     useEffect(() => {
//         getRecipe();
//     }, [getRecipe]);

//     const handleEditClick = (recipeId) => {
//         setRecipeToEdit(recipeId); // Store the recipe ID
//         setShowModal(true); // Show the modal
//     };

//     // Show the modal and store the recipe to be deleted
//     const handleDeleteClick = (recipeId) => {
//         setRecipeToDelete(recipeId); // Store the recipe ID
//         setShowModal(true); // Show the modal
//     };

//     const confirmDelete = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/recipe/profile/' + recipeToDelete, {
//                 method: 'DELETE',
//             });
    
//             if (!response.ok) {
//                 throw new Error('Failed to delete the recipe');
//             }
    
//             const json = await response.json();
//             // console.log('Deleted recipe:', json);
    
//             setRecipes((prevRecipes) =>
//                 prevRecipes.filter((recipe) => recipe._id !== recipeToDelete)
//             );
    
//             dispatch({ type: 'DELETE_RECIPE', payload: json });
//             setShowModal(false);
//         } catch (error) {
//             console.error('Error deleting recipe:', error);
//         }
//     };
    

//     // Close the modal without deleting the recipe
//     const closeModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div>
//             <h1>My Recipes</h1>
//             {Array.isArray(recipes)
//                 ? recipes.map((recipe) => (
//                       <div key={recipe._id} className={styles.recipeCard}>
//                           {recipe.imgLink && (
//                               <img
//                                   src={recipe.imgLink}
//                                   alt={recipe.title}
//                                   className={styles.recipeImage}
//                               />
//                           )}
//                           <h1>{recipe.title}</h1>
//                           <p>{recipe.description}</p>
//                           <p>{recipe.prepTime}</p>
//                           <button onClick={() => handleEditClick(recipe._id)}>Edit</button>
//                           <button onClick={() => handleDeleteClick(recipe._id)}>Delete</button>
//                       </div>
//                   ))
//                 : 'No recipes found'}

//             {/* Modal Component */}
//             <Modal
//                 show={showModal}
//                 onClose={closeModal}
//                 onConfirm={confirmDelete}
//                 message="Are you sure you want to delete this recipe?"
//             />
//         </div>
//     );
// };

import React, { useEffect, useState, useCallback } from 'react';
import styles from './Dashboard.module.css';
import { useParams } from 'react-router-dom';
import { useRecipesContext } from '../../hooks/useRecipesContext';
import Modal from '../../components/Modal/Modal';
import EditForm from '../../components/EditForm/EditForm';

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipeToEdit, setRecipeToEdit] = useState(null); // Track the recipe to edit
    const [recipeToDelete, setRecipeToDelete] = useState(null); // Track the recipe to delete
    const [showModal, setShowModal] = useState(false); // For delete confirmation modal
    const { userId } = useParams();
    const { dispatch } = useRecipesContext(); 
  
    // Memoized fetch function to get the recipes
    const getRecipe = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/recipe/profile/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipe');
            }
            const data = await response.json();
            setRecipes(data);
        } catch (err) {
            console.log(err);
        }
    }, [userId]);

    useEffect(() => {
        getRecipe();
    }, [getRecipe]);

    // Handle the edit button click
    const handleEditClick = (recipeId) => {
        const recipe = recipes.find((recipe) => recipe._id === recipeId);
        setRecipeToEdit(recipe); 
    };

    // Close the edit form and return to the recipe list
    const handleCancelEdit = () => {
        setRecipeToEdit(null);
    };

    // Handle the deletion of a recipe
    const handleDeleteClick = (recipeId) => {
        setRecipeToDelete(recipeId); 
        setShowModal(true); 
    };

    const confirmDelete = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/recipe/profile/' + recipeToDelete, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete the recipe');
            }
            const json = await response.json();
            setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== recipeToDelete));
            dispatch({ type: 'DELETE_RECIPE', payload: json });
            setShowModal(false);
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    // Close the delete confirmation modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>My Recipes</h1>
            
            {/* Conditionally render the EditForm or the list of recipes */}
            {recipeToEdit ? (
                <EditForm 
                    recipeId={recipeToEdit._id} 
                    onCancel={handleCancelEdit} 
                    setRecipeToEdit={setRecipeToEdit}
                />
            ) : (
                <div>
                    {Array.isArray(recipes) && recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <div key={recipe._id} className={styles.recipeCard}>
                                {recipe.imgLink && (
                                    <img
                                        src={recipe.imgLink}
                                        alt={recipe.title}
                                        className={styles.recipeImage}
                                    />
                                )}
                                <h1>{recipe.title}</h1>
                                <p>{recipe.description}</p>
                                <p>{recipe.prepTime} mins</p>
                                <button onClick={() => handleEditClick(recipe._id)}>Edit</button>
                                <button onClick={() => handleDeleteClick(recipe._id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        'No recipes found'
                    )}
                </div>
            )}

            {/* Modal Component for Delete Confirmation */}
            <Modal
                show={showModal}
                onClose={closeModal}
                onConfirm={confirmDelete}
                message="Are you sure you want to delete this recipe?"
            />
        </div>
    );
};

export default Dashboard;
