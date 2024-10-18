import React, { useMemo, useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { IMG_DATA } from '../constants'

interface Props {
  work: string
}
interface WorkImgInfo {
  img: string
  title: string
  featured: boolean
}

const ImageSet = ({ work }: Props) => {
  const [workImg, setWorkImg] = useState<WorkImgInfo[]>([])

  useMemo(() => {
    const workImg: WorkImgInfo[] = IMG_DATA[work as keyof typeof IMG_DATA].map((data) => {
      return {
        img: data.img,
        title: data.title,
        featured: data.featured
      }
    })

    setWorkImg(workImg)
  }, [work])

  const srcset = (image: string, width: number, height: number, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${height * rows
        }&fit=crop&auto=format&dpr=2 2x`
    }
  }

  const renderImageList = () => {
    return workImg?.map((item) => {
      const cols = item.featured ? 2 : 1
      const rows = item.featured ? 2 : 1

      return (
        <ImageListItem key={item.img} cols={cols} rows={rows}>
          <img
            {...srcset(item.img, 250, 200, rows, cols)}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
            }}
            title={item.title}
            position="top"
            actionPosition="left"
          />
        </ImageListItem>
      )
    })
  }

  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        transform: 'translateZ(0)'
      }}
      rowHeight={200}
      gap={1}>
      {renderImageList()}
    </ImageList>
  )
}

export default ImageSet
