import realm from './revisionSchema'

// Function to generate a unique ID
function generateUniqueId() {
    return Math.random().toString(36).slice(2, 9);
  }
  
// Function to create a new object with a unique ID
function createNewObject(objectName) {
    let newId = generateUniqueId();
    while (realm.objects(objectName).filtered(`recordID == "${newId}"`).length > 0) {
      // If the generated ID already exists, generate a new one
      newId = generateUniqueId();
    }
    return newId
  }    

export function createNewRevision(revisionName, revisionJ0, revisionList){
    objectID = createNewObject("revision")
    realm.write(() => {
        realm.create("revision", {
            recordID: objectID,
            name: revisionName,
            dateJ0: revisionJ0,
            revisionList: JSON.stringify(revisionList),
        });
    });  
}

export function getAllRevision(){
    const revision = realm.objects("revision");
    console.log(revision);   
}

export function deleteAllRevision(){
    const revision = realm.objects("revision");
    console.log(revision); 
    revision.forEach(contact => {
        realm.write(() => {
            realm.delete(contact);
        });
    })
    const revision2 = realm.objects("revision");
    console.log(revision2); 
}

