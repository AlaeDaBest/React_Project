import React, { useState } from "react";
const CreateFragrance=()=>{
    const [name,setName]=useState('');
    const [brand,setBrand]=useState('');
    return(
        <div>
            <section>
                <form action="">
                    <section>
                        <div>
                            <label htmlFor="">Fragrance Name :</label>
                            <input type="text" />
                        </div>
                    </section>
                </form>
            </section>
        </div>
    )
}
export default CreateFragrance;