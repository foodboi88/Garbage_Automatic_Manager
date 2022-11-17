import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import { Image } from 'antd'
import React, {useState} from 'react'
import plastic_trash from '../images/plastic_trash.jpg'

const data = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
]

const garbageType = [
    'box_cardboard_paper',
    'glass_metal_plastic',
    'organic',
    'other'
]

const CGabargeImages = () => {
    const [index,setIndex] = useState<number>(0)

    return (
        <div>
            <div style={{width:'100%',justifyContent:'space-around'}} className='center-everything'>
                <div className='garbage-type-selector'>
                    <LeftCircleTwoTone style={{margin:'5px',fontSize:'30px',cursor:'pointer'}} onClick={
                        ()=>{
                            if(index>0) setIndex(index-1);
                            else setIndex(garbageType.length-1)
                        }
                    }/>
                    <div className='type-garbage'><p style={{    marginTop: "7px",marginBottom: "0px"}}>{garbageType[index]}</p></div>
                    <RightCircleTwoTone style={{margin:'5px',fontSize:'30px',cursor:'pointer'}}  onClick={
                        ()=>{
                            if(index<garbageType.length) setIndex(index+1);
                            else setIndex(0)
                        }
                    }/>
                </div>
            </div>
            <div className='list-garbage-image'>
                {
                    data.map((item)=>{
                        return(
                            <Image style={{width:'100px', margin: '10px', borderRadius: ' 15px'}} src={plastic_trash} preview={false}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CGabargeImages