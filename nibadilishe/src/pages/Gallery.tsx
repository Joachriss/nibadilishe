import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { PageHero } from "../components/PageHero"
import { PictureGallery } from "../components/PictureGallery"


export const Gallery = () => {
  return (
    <div>
        <PageHero description="Browse our gallery to witness the positive changes driven by NIBADILISHE." title="Our Gallery" page="Gallery"/>
        <div className="w-full">
          <div className="mx-auto max-w-[1240px] px-2">
            <PictureGallery/>
          </div>
        </div>
    </div>
  )
}
