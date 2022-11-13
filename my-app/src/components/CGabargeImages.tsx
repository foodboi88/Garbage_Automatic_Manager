import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import { Image } from 'antd'
import React from 'react'
import plastic_trash from '../images/plastic_trash.jpg'

const data = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
]

const CGabargeImages = () => {
  return (
    <div>
        <div style={{width:'100%',justifyContent:'space-around'}} className='center-everything'>
            <div className='garbage-type-selector'>
                <LeftCircleTwoTone style={{margin:'5px'}}/>
                <div className='type-garbage'>Rác thải nhựa</div>
                <RightCircleTwoTone style={{margin:'5px'}}/>
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