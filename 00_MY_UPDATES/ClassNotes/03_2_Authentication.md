# AUTHENTICATION
> Code - [authentication](/00_MY_UPDATES/ClassCodes/3_2_Authentication/)

## FETCH API
* Can get data from an API.
* Can do get/ post calls, by default does get.

## HASHING
* Function to convert a string into another string.
* Every time same string is passed to the hashing function, it converts it to same hashed string. (1-1 mapping between string - hashed string)
* This conversion is 1-way only. Hashed string cannot be converted back to original string
* Example:user enters password as '123random', the BE server runs the hashing function on password string and converts it to hashed string. This hashed string is compared with the stored value in database for authentication. (passwords are stored in Hashed form in databases.)

## ENCRYPTION
* Function to convert a string into another string using a Key(another string).
* Unlike Hashing, this is 2-way. Encrypted key can be converted back to original string if key is available.
* Example: uploading photo in facebook, it is encrypted and stored in DB. when user requests photo, it is decrypted and shared with user.
  
## JSON WEB TOKEN
* COnverts a JSON and converts into a long string.
* Original string can be deduced from converted string by anyonw.
* But only the person with the password can verify if the JWRT is correct or not
 * Example: Signature on cheque. Anyone can see it, but only bank can verify it.