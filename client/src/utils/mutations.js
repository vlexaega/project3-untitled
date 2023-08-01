import { gql } from "@apollo/client";

// export const ADD_IMAGE = gql`
//   mutation addImage($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $bio: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, bio: $bio, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
// export const ADD_COMMENT = gql`
//   mutation addComment($thoughtId: ID!, $commentText: String!) {
//     addComment(thoughtId: $thoughtId, commentText: $commentText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
// export const ADD_ARTWORK = gql`
//   mutation addArtwork($userId: ID!, $artImage: String!) {
//     addArtwork(userId: $userId, artImage: $artImage) {
//       _id
//       userName
//       artworks {
//         _id
//         image
//         isOriginal
//         canCritique
//         medium
//         canDownload
//         downloadPrice
//         canPurchase
//         purchasePrice
//         title
//         description
//       }
//     }
//   }`;

  export const UPLOAD_IMAGE = gql `
  mutation uploadImage($userId: ID!, $image: String!, $title: String!, $description: String!, $declaration: Boolean!, $critique: Boolean, $price: Float!) {
      uploadImage(userId: $userId, image: $image, title: $title, description: $description, declaration: $declaration, critique: $critique, price: $price) {
        _id
        image
        title
        description
        declaration
        critique
        price
        user {
          _id
          userName
          email
        }
      }
    }
  `;
