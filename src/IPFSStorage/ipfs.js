import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001/api/v0') 

export const  IpfsStorage = async(file)=>{

    // const [fileUrl, updateFileUrl] = useState(``)
        // const file = e.target.files[0]
        try {
          const added = await client.add(file)
          const url = `https://ipfs.infura.io/ipfs/${added.path}`
        //   updateFileUrl(url)
         return url;
        } catch (error) {
            // return false;
          console.log('Error uploading file: ', error)
        }  
      

}